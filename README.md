# Typescript BlockChain Implement

Nomad Corder Typescript Lecture

Let's make Block-Chain!!

## TypeScript 특징들

- 기본적으로 각 파일들이 모듈임을 가정하기 때문에, `export`를 해줘야함..

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

- 인자 타입 및 Return 타입 설정

```javascript
const func = (param1:string, param2:number, param3:boolean): void => {
  ...
}
```

- 인터페이스(c의 struct와 유사)

```javascript
// js에는 보이지 않음.
interface Human {
  name: string;
  age: number;
  gender: string;
}

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, your age is ${person.age}, and ${person.gender}`;
};

// 구조분해해서 받아올 수도 있음.
// 받아온 변수들의 타입도 자동으로 지정됨.
const sayHi = (person: Human): string => {
  const { name, age, gender } = person;
  return `Hello ${name}, your age is ${age}, and ${gender}`;
};
```

- Class (interface와는 다르게 js파일에 남음)

```javascript
class Human {
  public name: string;
  private age: number;  // private 선언된 변수에 직접 접근 시, error
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public getAge() {
    return this.age;
  }
}

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, your age is ${person.getAge()}, and ${person.gender}`;
}

console.log(sayHi(new Human("You", 29, "female")));
```

- 배열 선언 시, element 타입 제한

```javascript
const numArr: [number] = [1, 2, 3];
numArr.push("string"); // error

const numArr = [1, 2, 3];
numArr.push("string"); // error

const numArr: any = [1, 2, 3];
numArr.push("string"); // Not Error

const arr = [1, "2"]; // arr: string | number
arr.push("a"); // Not Error
arr.push({ age: 12 }); // Error

const arr = [1, "2", { age: 3 }]; // arr: string | number | { age: number }
arr.push({ tall: 162 }); // Error { tall: number } 은 허용되지 않는 타입.
arr.push({ age: "4" }); // Error  { age: string } 은 허용되지 않는 타입.
arr.push({ age: 5 }); // Not Error
```

- [number] vs number[]

```javascript
// [number]
const arr: [number] = []; // Error => 초기화 시, 1개의 number가 있어야함.

const arr: [number] = [1, 2]; // Error => 초기화 시, 1개의 number가 있어야함. 2개라서 에러.

const arr: [number, number] = [1]; // Error

const arr: [number] = [1];
arr.push(2); // Not Error => 최초 할당할 때만 지키면 됨.

// number[]
const arr: number[] = []; // Not Error => 들어올 인자에 대한 타입만 지정.
```
