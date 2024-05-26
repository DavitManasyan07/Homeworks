///////////////////////////    1

class Author {
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get email() {
    return this._email;
  }
  set email(value) {
    this._email = value;
  }
  get gender() {
    return this._gender;
  }
  set gender(value) {
    if (value.toLowerCase() !== "male" && value.toLowerCase() !== "female") {
      let genderBool = confirm("You are Male??");
      if (genderBool) {
        value = "male";
      } else {
        value = "female";
      }
    }
    this._gender = value;
  }
}

class Book {
  constructor(title, author, price, quantity) {
    this.title = title;
    this.price = price;
    this.author = author;
    this.quantity = quantity;
  }

  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }

  get author() {
    return this._author;
  }
  set author(value) {
    this._author = value;
  }

  get price() {
    return this._price;
  }
  set price(value) {
    if (value < 0) {
      value = Number(prompt("Input another number for price", 10));
    }
    this._price = value;
  }

  get quantity() {
    return this._quantity;
  }
  set quantity(value) {
    if (value < 0) {
      value = Number(prompt("Input another number for  quantity", 10));
    }
    this._quantity = value;
  }

  getProfit() {
    return this.price * this.quantity;
  }
}

////////////////////////  2

let num = 0;

class Account {
  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  credit(amount) {
    this.balance += amount;
    return this.balance;
  }

  debit(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      return this.balance;
    } else {
      alert("Amount exceeded balance.");
      console.log("Amount exceeded balance.");
      return "Amount exceeded balance.";
    }
  }

  transferTo(anotherAccount, amount) {
    if (this.balance >= amount) {
      anotherAccount.balance += amount;
      this.balance -= amount;
      return this.balance;
    } else {
      alert("Amount exceeded balance.");
      console.log("Amount exceeded balance.");
      return "Amount exceeded balance.";
    }
  }
  static identifyAccounts(accountFirst, accountSecond) {
    let bool = false;
    for (let property1 in accountFirst) {
      for (let property2 in accountSecond) {
        if (
          property1 === property2 &&
          accountFirst.property1 === accountSecond.property2
        ) {
          bool = true;
          return accountFirst.property1;
        }
      }
    }
    return bool;
  }

  checkName(value) {
    if (value.length >= 4) {
      this._name = value;
    } else {
      value = prompt(
        "The length of this name is too short, please input another name"
      );
      this.checkName(value);
    }
  }

  checkBalance(value) {
    if (value >= 0 && !isNaN(value)) {
      this._balans = value;
    } else {
      value = Number(prompt("Input another amount for balance"));
      this.checkBalance(value);
    }
  }

  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this.checkName(value);
  }
  get balance() {
    return this._balans;
  }
  set balance(value) {
    this.checkBalance(value);
  }
}

////////////////////////     3
class Person {
  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
  }


  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getGender() {
    return this.gender;
  }

  getAge() {
    return this.age;
  }


  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  setGender(gender) {
    this.gender = gender;
  }

  setAge(age) {
    this.age = age;
  }

  toString() {
    return `Person [First Name: ${this.firstName}, Last Name: ${this.lastName}, Gender: ${this.gender}, Age: ${this.age}]`;
  }
}

class Student extends Person {
  constructor(firstName, lastName, gender, age, program = [], year, fee) {
    super(firstName, lastName, gender, age);
    this.program = program;
    this.year = year;
    this.fee = fee;
    this.exams = {}; 
  }


  getProgram() {
    return this.program;
  }

  getYear() {
    return this.year;
  }

  getFee() {
    return this.fee;
  }


  setProgram(program) {
    this.program = program;
  }

  setYear(year) {
    this.year = year;
  }

  setFee(fee) {
    this.fee = fee;
  }

  passExam(program, grade) {
    this.exams[program] = grade;
    if (this.program.every((prog) => this.exams[prog] >= 50)) {
      this.year++;
    }
  }

  toString() {
    return `Student [First Name: ${this.firstName}, Last Name: ${this.lastName}, Gender: ${this.gender}, Age: ${this.age}, Program: ${this.program}, Year: ${this.year}, Fee: ${this.fee}]`;
  }
}

class Staff extends Person {
  constructor(firstName, lastName, gender, age, program, pay) {
    super(firstName, lastName, gender, age);
    this.program = program;
    this.pay = pay;
  }


  getProgram() {
    return this.program;
  }

  getPay() {
    return this.pay;
  }

  setProgram(program) {
    this.program = program;
  }

  setPay(pay) {
    this.pay = pay;
  }

  toString() {
    return `Staff [First Name: ${this.firstName}, Last Name: ${this.lastName}, Gender: ${this.gender}, Age: ${this.age}, Program: ${this.program}, Pay: ${this.pay}]`;
  }
}


