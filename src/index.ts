import * as CryptoJS from "crypto-js";

class Block {
  static calculateBlockHash = (
    index: number,
    previousHash: string, 
    data: string, 
    timeStamp: number
    ): string => CryptoJS.SHA256(index + previousHash + data + timeStamp).toString();

  static validateBlock = (aBlock: Block): boolean =>
    typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.data === "string" &&
    typeof aBlock.timeStamp === "number";

    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timeStamp: number;
    constructor(index: number,
      hash: string,
      previousHash: string,
      data: string,
      timeStamp: number) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timeStamp = timeStamp;
      }
}

const genesisBlock = new Block(0, "h1h1h1h1", "", "hello world", 123456);

let blockChain: Block[] = [genesisBlock];

const getBlockChain = (): Block[] => blockChain;

const getLastestBlock = (): Block => blockChain[blockChain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const getHashforBlock = (aBlock: Block): string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.data, aBlock.timeStamp);

const createNewBlock = (data: string): Block => {
  const prevBlock: Block = getLastestBlock();
  const newIndex: number = prevBlock.index + 1;
  const newTimeStamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(newIndex, prevBlock.hash, data, newTimeStamp);
  const newBlock: Block = new Block(newIndex, newHash, prevBlock.hash, data, newTimeStamp);
  addBlock(newBlock);
  return newBlock;
}

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if(!Block.validateBlock(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
}

const addBlock = (candidateBlock: Block): void => {
  if(isBlockValid(candidateBlock, getLastestBlock())) {
    getBlockChain().push(candidateBlock);
  }
}

createNewBlock("second Block");
createNewBlock("third Block");
createNewBlock("fourth Block");

console.log(getBlockChain());

export {};