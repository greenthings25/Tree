console.log('My first code');
// variables
a=5; //js accept variables w/o any declaration 
var a=5;
console.log(a);
let b=5;  
//let b=8;           // with 'let' we can't declare a variable multiplely within a block 
console.log(b);
const n=44;
//const n=77; 
//console.log(n)
{
    var a=34;         // block2
    console.log(a);
    let b=8;
    console.log(b);
    const n=77;
    console.log(n);

}
console.log(n)         // when block is changed it allows change in variable value
var a=0;
console.log(a)        //whichever the block ,if declare a variable with 'var' and whenever the value changes it get reflected.here final value of a=0: global scope when declare a variable with var
                      // for 'var' it can change value in the same block
 //console.log(b)     //let b=5; and printing value here. then b=5 at end               
 // 'let' = block scoped variable.if declare a variable with 'let' value remains confined to that block. can change value in another block but not inside
 // to make variable value more secure and confined use 'let'/otherwise change at any point
 var firstName='Sree';
 console.log(typeof(firstName));
 let bool=true;
 console.log(typeof(bool));
 var j='';
 console.log(typeof(j));
 //Arrays-datatypes
var g=['pine','teak',100] //g or arr1 .[0 1 2 ]defines its an array
console.log(g.length);
g.push('rosewood');  //insert an element
g.pop()    
console.log(g); // console.log(g=[1]) -//to get one from list, give the index no/find an element
console.log(g=[1]); 
//find length of an element
console.log(g.length);
//add an element to the array
// datatype - objects
let person={
     fname:'jj',
      age:8,
      location:'TVM'
}
         //person-object, and defines a no of chara to that object,oblect stores values as key value(field) packets(structure of object)
       console.log(person);
       console.log(person.age);

let per=new Object();//by default empty object
per.fname= 'raja';
per.age= 6;
console.log(per.age);
let cars=new Object();
cars.fname= 'jagur';
console.log(cars.fname);
// array of objects
var arr2 =[
    {
    fname:'ali',
      age:8,
      location:'TVM'
},
{ 
    fname:'sam',
      age:9,
      location:'TV'
}
];

console.log(arr2[1].age);
// functions- fn name(parameters-input) 
function add_val(a,b){
  var sum=a+b;
  console.log(sum);
}
  add_val(1,8);//calling fn and giving parameters// instead repeatedly doing a fn call a defined fn
  function add_val2(a,b){
var sum=a+b;
return sum;  //same with return//returns a value from fn
  }
  var result=add_val2(1,9);
  console.log('sum is ' +result); // to store the value in a varible(result)
  function mul(c,d) {
    var multiplely=c*d;
    console.log(multiplely);
  }
  mul(5,6);
  // function multiplely(a,b){
  //return a*b}
  //console.log(multiplely(2,6));
  var ab=7;
  var abc=ab++;//post incre //for pre ++ab, ans 
  console.log(ab);
  console.log(abc);
  var exp=(4*7)-8**2+9;
  console.log(exp)
//conditional statements
if (exp>0) {
  console.log('value is greater than zero')
} 
else if(exp==0){
  console.log('value is equal to zero')  //if exp===0; compare values and datatype also
} 
else {
  console.log('value is less than zero')
};
var tt=56;
var tm='56';
if (tt>tm) {
  console.log('value is greater')
} 
else if(tt==tm){
  console.log('value is equal')  //here comparing only value, not datatypes//===, print whatever inside else
} 
else {
  console.log('value is lesser')
};
//instead of else if we can use logical operators 
var tt=56;
var tm='56';
if (tt>tm || tt==tm) {
  console.log('value is greater or equal ')
} 

else {
  console.log('value is lesser')
};
var result1=exp>0?'value is less than zero':'value is greater than zero';
//looping statements-loop,forloop
for (let i= 0; i<10;++i){
  console.log(i+1);          //i=1,i<=10  //can give pre-post incre
  
}
//write a for loop to print contents of the array
var arr3=[1,45,66,78,90];
for (i= 0; i < arr3.length; i++) {
  console.log (arr3[i]);
  
}
//for in loop
var obj={fname:'er',age:4,location:'kottayam'}
for (const i in obj) {
  console.log(obj[i]);  //i is the key (fname,age)//if use .log(i)=will print the keys
}
//for of loop
for (const i of arr3){
  console.log(i);    // i - elements of array /let can also be used
  
}
//while loop
let e=1;
while (e<=10){
  console.log(e);      // after checking cdt execute inside 
  e++;
  
}
let o=0;
while (o<=10){
  console.log(o+1);
  o++;
}
//do while loop - entry and exit controlled // atleast once execute first w/o checking cdt
let r=1;
do {
  console.log(r);
    r++;
}
 while (r<=10);

