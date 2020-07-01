

// hosted in chrome browser

// when running JS engin program executes our code 
// parser -> line by line parses produses -> (Abstract Syntax Tree )-> conversion to machine code (machine code) -> Code Runs

//order how run 

//envirement   Execution context   in global   not inside any function *Associated with the global object *in the browser thats the window object

// var name = 'john';   global object

// function first(){
//     var a= 'hello';
//     second();
//     var x = a +name;
// }


// function second(){
//     var b= 'hello';
//     third();
//     var z = b +name;
// }




////execution context Object
// varible Object
//scope chain 
//this varible 


/////////////////////
//Hoisting 

// function calculateAge(year){
//     console.log(2020 - year);

// }
// calculateAge(1990); 



// this is hoisting 

//works cuz function declaration

// calculateAge(1992); 
// function calculateAge(year){
//     console.log(2020 - year);
// }

// var retirement = function(year){
//     console.log(65 - (2020- year));
// }

// retirement(1990);



//not gonna work cuz it is function expression 
// retirement(1990);
// var retirement = function(year){
//     console.log(65 - (2020- year));
// }




//varibles 

//works
// var age = 23;
// console.log(age);


// won't work undifined 
// console.log(age);
// var age = 23;

 
// function foo(){
//     console.log(age);//undefined
//     var age = 65;
//     console.log(age);//65
// }
// foo();
// console.log(age);//23 global 


////////////////
// Scoping in JS

// each func crates scope 
// var a = 'hello';
// first();
// function first(){
//     var b = 'hi';
//     second();

//     function second(){
//         var c = 'hey'; 
//         third()
//     }
// }

// function third(){
//     var d = 'john';
//     // console.log(c);
//     console.log(a+d) ;

// }
// lexical scping




// this KEYWORD varible 

//regular function call
//method call 

// console.log(this); //windows

// function calculateAge(year){
//     console.log(2020 - year);// 32
//     console.log(this);//window
// }

var john = {
    name: 'John',
    yearOfBirth : 1992,
    calculateAge:function(){
        console.log(this);
        console.log(2020 - this.yearOfBirth);

        // function innerFunction(){
        //     console.log(this);//window

        // }
        // innerFunction();
    }
}

john.calculateAge();
var mike = {
    name: 'mike',
    yearOfBirth: 1984
};

//method borrowing 

mike.calculateAge = john.calculateAge;


mike.calculateAge();