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
