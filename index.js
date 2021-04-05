// - For an _instance_ of `Cat`, speak returns "`name` says meow!",

class Cat {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }

    speak(){
        return `${this.name} says meow!`;
    }
}

// - For an _instance_ of `Dog`, speak returns "`name` says woof!"

class Dog{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }

    speak(){
        return `${this.name} says woof!`;
    }
}


// - For an _instance_ of `Bird`, speak returns conditional output. If the
//   _instance_ of `Bird` is `male`, speak returns "It's me! `name`, the parrot!". If
//   it is not `male`, speak returns "`name` says squawk!".

class Bird {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }

    speak(){
        if (this.sex === "male"){
            return `It's me! ${this.name}, the parrot!`;
        }
        return `${this.name} says squawk!`; 
    }
}