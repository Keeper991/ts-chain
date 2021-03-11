# Typescript BlockChain Implement

Nomad Corder Typescript Lecture

Let's make Block-Chain!!

## TypeScript 특징들

- 함수의 인자 개수 일치 및 선택 인자 표시

```javascript
// 인자 개수 일치
const sayHi = (name, age, gender) => {
  console.log(`Hello ${name}, your age is ${age}, and ${gender}`);
};

sayHi(name, age); // error

// 선택 인자 표시
const sayHi = (name, age, gender?) => {
  // ? 를 이용해 인자가 선택적임을 표시
  console.log(`Hello ${name}, your age is ${age}, and ${gender}`);
};

sayHi(name, age); // Not Error
```
