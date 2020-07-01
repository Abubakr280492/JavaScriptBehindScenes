//lecture varibles 

// console.log("abdi");

// var name = "John";
// console.log(name);

// var lastName = "Abdullaev";
// console.log(lastName);

// var age = 28;
// console.log(age);

// // 5 primitiv data types not object
// Number
// String
// Boolean
// undefined //assigned to varible not def
// null//not existent 


// //dynamic type
// // on its own he gonna do 

// var fullAge = true;
// console.log(fullAge); //for debuging tool 


// //Lec varibles 2
// var name = 'Abdi';
// var age = 28;

// console.log( name + age ); //string type cuersion auto convert to string same dataType
// //abdi28
// console.log(age+age);
// //56

// var job, isMarried;
// console.log(job); // undifined . assigned but not 
// job = 'teacher';
// isMarried = false;

// //sequence of structure goes down line by line out of top
// console.log(name + ' ' + age+ ' years old. He is a  ' + job + ' Is he  married?' + isMarried);


// //we mutate/change  varibles 
// age = "thirty six";
// job= "developer";

// console.log(name + ' ' + age+ ' years old. He is a  ' + job + ' Is he  married?' + isMarried);


// var lastName = prompt('What is last name ?');
// console.log('welcome ' + lastName);

// alert(name + ' ' + age+ ' years old. He is a  ' + job + ' Is he  married?' + isMarried);





// //Lec 2  operators 
// var now  = 2020;
// var birthYear = now - 28;

// birthYear = now -26 *2; //firstg multiple   operator presidence
// console.log(birthYear);
// //right to left 

// // first  ()

// var abdiAge = 28;

// var ageMark = 22;
// abdiAge = ageMark = (3+5)*4 -6;


// ageMark *=2;
// ageMark = ageMark*2;

// console.log(ageMark);
// console.log(abdiAge);



// //Lec if else statement 

// var name = "abdi";
// var age = 28;
// var isMarried = 'no';

// if (isMarried ==='yes'){
//     console.log(name + ' is married ');
// }else {
//     console.log( name + ' nope');
// }


// var age =16;
// if (age < 20){
//     console.log("teneger")
// }else {
//     console.log("man")

// }

// var job = 'developer';

// switch(job){
//     case 'teacher':
//         console.log('teacher kids ');
//         break;
//         case 'designer':
//         console.log('design kids ');
//         break;
        
//         case 'developer':
//         console.log('coding kids ');
//         break;
//         default:
//             console.log('he kicks dics ');
// }


// // solution


// var heightAbdi = 173;
// var heightMike = 165;
// var ageAbdi = 28;
// var ageMike = 21;

// var scoreAbdi = heightAbdi +5 * ageAbdi;
// var scoreMike = heightMike = 5 + ageMike;

// console.log('abdi scoreis '+scoreAbdi);
// console.log(' mike score is '+scoreMike);

// if(scoreAbdi> scoreMike){
//     console.log("abdi won " + scoreAbdi + ' ponts');
// }else if (scoreAbdi< scoreMike){
//     console.log("Mike won " + scoreMike + ' ponts');

// }else if (scoreAbdi === scoreAbdi){
//     console.log('same shit');
// }


////////////////////////////////////////////////////
// //Functions 


// //good for DRY

// function calculaterAge(yearOfbith){
//     var age = 2020 - yearOfbith;
//     return age;
// }

// var ageAbdi = calculaterAge(1990);
// console.log(ageAbdi);


// //Statement and expressions 

// //function statement 
// function someFun(par){
//     //code
// }

// // func expression
// var someFun = function(par){
//     //code
// }

// //expressions
// 3+4;
// var x =3;

// //statement 
// if(x===5){
//     //do somethink
// }

//arrays 

// var names = ["abdi",'Munavvar ', 'Khusan'];

// //other way is 
// var years = new Array(1990,1969,1992);

// //how to access 

// console.log(names);
// //i need 1 
// console.log(names[0]);

// names[1] = 'Khojiakbar';
// console.log(names);


// var abdi = ['abdi','abdullaev', 1992, 'developer', true];
// console.log(abdi);

// abdi.push('dispacher');
// console.log(abdi);

// //unshift adds to beginnig 

// abdi.unshift('mr');
// console.log(abdi);

// //pop remove last

// abdi.pop();
// console.log(abdi);
// //removes first 
// abdi.shift();
// console.log(abdi);

// //returns position

// //if certain element in or not good to check 
// alert(abdi.indexOf('developer'));

// if(abdi.indexOf('developer')=== -1){
//     console.log("abdi not developer");
// }


// ////////////////////////////////////
// //Objects
// var arr = [1,2,3];
// arr[0];

// // u would like to acces by name
// //then use object   key value pair 
// //no order bro in object 

// var abdi = {
//     name: 'Abdi',  //key name   value is Abdi
//     lastName: 'Abdullaev',
//     age: 28,
//     job: 'developer',
//     isMarried: true
// }

// console.log(abdi);

// // retrive in two ways 
// // dot notation or 

// console.log(abdi.lastName);
// console.log(abdi['lastName']);

// var xyz = 'job';
// console.log(abdi[xyz]);

// //mutate it 

// abdi.lastName = 'Miller';
// abdi['job'] = 'dispacher';
// console.log(abdi);


// //new empty object 
// var jane = new Object();

// jane.name = "Jane";
// jane.lastName = 'Smith';
// jane['yearOFBirtgh'] = 1997;
// jane['job'] = 'makeUp';


// console.log(jane);

//Object methods

// //objects can hold other object array 
// var abdi = {
//     name: 'Abdi',  //key name   value is Abdi
//     lastName: 'Abdullaev',
//     age: 28,
//     job: 'developer',
//     isMarried: true,
//     family: ['Jane','Mark','Bob'],
//     calculaterAge: function(yearOFBirth){
//         return 2020-yearOFBirth;
  
//     }
// };
// console.log(abdi);
// console.log(abdi.family);
// console.log(abdi.family[2]);
// console.log(abdi.calculaterAge(1992));

// //methhod   function assosiated  push pop shirf




// var abdi = {
//     name: 'Abdi',  //key name   value is Abdi
//     lastName: 'Abdullaev',
//     age: 28,
//     job: 'developer',
//     yearOfBirth: 1990,
//     isMarried: true,
//     family: ['Jane','Mark','Bob'],
//     calculaterAge: function(){
//         return 2020-this.yearOfBirth;
  
//     }
// };

// console.log(abdi.calculaterAge());

// var age = abdi.calculaterAge();
// abdi.age = age;

// console.log(abdi);


//ver 2.0



// var abdi = {
//     name: 'Abdi',  //key name   value is Abdi
//     lastName: 'Abdullaev',
//     job: 'developer',
//     yearOfBirth: 1967,
//     isMarried: true,
//     family: ['Jane','Mark','Bob'],
//     calculaterAge: function(){
//         this.age = 2020 - this.yearOfBirth;
//     }
// };

// abdi.calculaterAge()  //gonna add age to object 
// console.log(abdi);
  

///////////////////////////////////////
// loops

// for (var  i= 0; i<10; i++){
//     console.log(i);
// }
 
//  var names = ['Abdi', 'Khusan','Khoji','Akbar','Ali'];

// // for (var i =0; i<name.length; i++){
// //     console.log(names[i]);
// // }

// for (var i=names.length-1; i>=0; i--){
//     console.log(names[i]);
// }


//while loops 

// var names = ['Abdi', 'Khusan','Khoji','Akbar','Ali'];

// var i = 0;
// while(i<names.length){
//     console.log(names[i]);
//     i++;
// }


// for(var i=1; i<=5; i++){
    
//     console.log(i);
    
//     if(i===3){
//         break;
//     }
// }



// for(var i=1; i<=5; i++){
//     if(i===3){
//         continue;
//     }
//     console.log(i);
// }


// ///////////////////////////////
// var years = [1992,2008,1995,1977,1933,2001];



// function printFullAge(years){
//     var ages = [];
//     var fullAge= [];

// for (var i=0; i<years.length; i++){
//     console.log(ages[i] = 2020 - years[i]);
// }
 
// for (var i =0; i<ages.length; i++){
//     if(ages[i]>=18){
//         console.log("Person is " + ages[i] + 'years old, and is full age ');
//         fullAge.push(true);
//     }else {
//         console.log("Person is " + ages[i] + 'years old, and Not is full age ');
//         fullAge.push(false);
        
//     }
// }
// return fullAge;

// }

// var years = [2001,2008,1992,1999,1977];
// var full_1 = printFullAge(years);
// var full_2 = printFullAge([2012,1915,1992]);

//1996  from LiveScript to JavaScript :
// 1997 EcmaScript
// 2009 EcmaScript 5 (ES5) with lots of features
// 2015  ECMAScript (ES2015) with biggest update ever
//2016 ECMAScript (ES2016) minor changes
