var x = 'girl';

const person = {
    Name: 'Anjali',
    Age: 28,
    greet1: () => {
        console.log(`Hi, I am ${x}`);
        //Note: ${Name} wont work because its not a variable. Also " & ' dont seem to work. ` works only

        console.log("My name is "+this.Name);
        //this will give output as undefined because inside arrow functions, behaviour of this changes and the scope becomes global
    },

    greet2() {
        console.log("My age is "+this.Age);
        //this works here becuase it is not an arrow function and default behaviour of this takes place
    }

};

person.greet1();
person.greet2();