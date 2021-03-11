interface Human {
  name: string,
  age: number,
  gender: string
}

const me = {
  name: "Choi",
  age: 34,
  gender: "male"
}

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, your age is ${person.age}, and ${person.gender}`;
}

console.log(sayHi(me));

export {};