                ///////////////////////////// VARIABLES AND DATA TYPES ////////////////////////
//==========>>>>>> First J.S Code
console.log("Hello Java Script");
console.log("Hello World!")

//===============>>>>>>>> Variables in J.S
//============>>>> Let , Var , Const
//==========>>>> Naming Convention and Cases
let fullName = "Hamza Ali" //=======>>>> Camel Case
console.log(fullName);

const full_name = "Zaid Ali"
console.log(full_name); //=========>>>> Snake Case

var FullName = "Amna Ali"
console.log(FullName); //========>>>>> Pascal Case / Title Case

//===========>>>>> Variables Rule
let _abc;
let $abc; //===========>>>> Valid Rule 
let abc123;
// let abc abc ====>>> Spaced
// let 123abc ====>> Dont use digits in starting
// let for ======>>>> Dont use Reserved Words for declaring a variable name
// let export =====>> Reserved Words

//=============>>>> Primitive Data Types (Pre-Defined Function)
//===========>>> String
let myName = "Ali Jawad"
console.log(myName);
console.log(typeof myName);

//===========>>>> Number
let myNumber = 12
console.log(myNumber);

//==========>>>> Boolean
let myBoolean = true
console.log(myBoolean);
console.log(typeof myBoolean);

//===========>>>> Bigint
let myBigint = BigInt(12345678)
console.log(myBigint);
console.log(typeof myBigint);

//===========>>>> Symbol
let mySymbol = Symbol("This is a symbol")
console.log(mySymbol);

//==========>>> Null
let myNull = null
console.log(myNull);
console.log(typeof myNull);

//===========>>> Undefined
let myUndefined;
console.log(myUndefined)

//==========>>> Non-Primitive Data Types (User-Defined Function)
//=========>>>> Objects (Arrays , Functions)
//=========>>> Objects
let Student = {
    name : "Farooq",
    age : 23,
    city : "Lahore"
}
//===========>>>>> Acess key 
console.log(Student.name)
console.log(Student["city"])
//===========>>>>>>> Updated or Re-Over
Student.name = "Ayesha"
console.log(Student);
console.log(typeof Student);

//=======>>>> String Concatenation
let Concatenation = "113" + 12
console.log(Concatenation);

//================>>>>>>>>>> PRACTICE QUESTION OF CHAPTER 1 ====================>>>>>>>>>//
//=========>>>>>>> Const Object
const Profile = {
    name : "Asif Hussain",
    followers : 123,
    following : 15,
    post : 12,
    isFollow : true,
};
console.log(Profile)
console.log(typeof Profile ["name"]);
console.log(typeof Profile ["followers"]);