import inquirer from "inquirer";
let something ='ali';
// something=55;

// let obj ={
//     name:'ali',
//     age:55
// }
// console.log(obj.prof)

// const addNumber = (a,b) => a +b;
// addNumber()

// union 
//c sharp and ts same founder
// ya string ya null

// let myname: string | null | undefined |number;
// let myname: string | null 
// myname =null;
// console.log(myname)

// myname="zia";
// console.log(myname)

// myname = undefined ; //error
//myname =12;

// let myAge: string | number;
// myAge =16;
// console.log(myAge)

// console.log(myAge.toLowerCase()); 
//just string pe apply hota h lowercase
//runtime error

// myAge ="Dont know"; //narowing hum ik rasta usko btachukay hain
// console.log(myAge)
// console.log(myAge.toString())
// console.log(myAge.toLowerCase())

//compiler and transpile 

// let newAge = Math.random()> 0.6 ? 'Khan':60;
// // newAge.toLowerCase();
// if (newAge === 'khan'){
//     newAge.toUpperCase();
// } //typescript ko

// if (typeof newAge ==="string"){
//  newAge.toUpperCase();
// }
// typeof newAge ==='string'
// ? newAge.toUpperCase()
// : newAge.toFixed(); //number 

// let age: number | 'died' | 'unknown';
// age =90; //ok
// age ='died' //ok
// age='unknown' //ok
// age ="living"; //error

//union varible ki type define krdetay hain
//ik type btaye h and literal values
// let zia: 'zia';
// zia='zia';
// zia ='khan'; //error

// let yourName = Math.random() > 0.6 ? 'Hira Khan': undefined;

// if(yourName){
//     yourName.toUpperCase(); //ok : string
// }
//ya undefined ya hira khan 
//  yourName.toUpperCase(); //Error object is possibly 'undefined'

// yourName ?.toUpperCase();
// console.log(yourName)

//logi bolean representation false hote h 

// type RawData = boolean | number | string | null | undefined;

//ya number ya string 
// let data: RawData;

// type Id = number | string;
// type IdMaybe = Id | undefined |null;

// let teacher ={
//     name:"Zeeshan",
//     experience: "10"
// }
// console.log(teacher.name)
// console.log(teacher["experience"]);
//khale object allow nh karta 
// teacher={

// }
// let teacher :{ name: string; exp:number}={
//     name:'Zeeshan',
//     exp:10,
// };

//type imasis basic type hai ap apni custom type bana sakty hain

// teacher.name =4 //errror
// aliased object type
// let Student:{
//     name:string;
//     age:number;
// }

// let student: Student ={
//     name:"Hira",
//     age:30,
// }
// console.log(student["name"]);
// console.log(student.age);

//interfaces obj ki type define karsakty hain
// interface Manager {
//  name: string,
//  subordinates ?: number
// }
// ? ho tb bhi theek h na ho tb bhi theek h
// 2 trha ki type structural nominal
//nominal type m ik type pakistan usmy name ageik zia object ik noman object
//dono ik dosray m jasakty hain
//typescript nominal ko support nh krti
//structural ik dosray m nahi jassktay 

// interface Ball{
//     diameter: number;
// }

// interface Sphere {
//     diameter: number
// }
// let ball: Ball = {diameter:10};
// let sphere: Sphere ={diameter:20};
// sphere =ball;
// ball=sphere

// interface Tube {
//     diameter: number;
//     lenght: number;
// }
// let tube: Tube ={diameter:12, lenght:3}

// tube=ball; //error
// ball=tube;
// console.log(tube)


// let myType ={name:'Zia',id:1}
// // case 1
// myType={id:2,name:'Tom'};
// case 2
// myType={id:2,name_person:'Tom'}
// var x:{id:number; [x:string]: any} //index signature
//
// x={id:1, fullname:'Zia'};
// myType={id:2,name:'Tom',age:22} //error excess property

// myType =myType2;
// let myType3={id:2,name_person:'Tom'}
//name samehona chahye

// myType = myType3;

// var x:{id:number,[x:string]:any};
//index signature sqaure bracket type btadengy
//it could be any name
// var y={id:1,fullname:'Zia'};
// x=y;
// var myType4 ={id:2,name:'Tom',age:22};
// myType = myType4;

// let myType1={name:'ariba',id:1}
// let myType={name:'memon',id:2}

// myType1=myType

// let myType3={id:2, name_person:'new'}

// myType=myType3

// var x:{id:number,[x:string]:any}={
//     id:33,
//     age:'5',
//     prof:'',
// };
// let y ={id:1, fullname:'Zia'};
// x=y

 
// let myType4={id:2,name:'memon',age:5};

// myType =myType4
// console.log(x)

// number gusssing game

// import inquirer from 'inquirer';
let numGenerate :number=   Math.floor(Math.random()*10);
console.log(numGenerate)

function match(input:Number){
    if(numGenerate === input){
    console.log("Hurry!! You guess the right num")
    } else{
        console.log("Opps... Better luck next time")
    }
}

const userInput = await inquirer.prompt([{
    name:'userInput',type:"number",message:"Please enter a number"
}])

match(userInput.userInput)
