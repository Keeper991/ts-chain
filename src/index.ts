class Human {
  public name: string;
  private age: number;
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

export {};