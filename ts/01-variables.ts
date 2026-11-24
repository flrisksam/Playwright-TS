let myName : string = "SK";
console.log(`Hi ${myName}`);

let undefinedValue:undefined = undefined;
let nullValue:null = null;

let value:any = 81; value = "Pass";
let numberValue:number | null = null;

let tuplVar:[string,number] = ["OM",5]; //Cannot change order
console.log("Tuple when fixed value and order: "+tuplVar[0].substring(1),tuplVar[1]);

enum defaultIndexEnum {Red, Orange, Green}
let i:defaultIndexEnum = defaultIndexEnum.Orange;
console.log("Enum index: "+i);

enum customIndexEnum {Blue=1,Yellow=3,Brown=2}
let j:customIndexEnum = customIndexEnum.Yellow; //j=1
let colourName:string = customIndexEnum[3];  //colourName=Yellow

//Unknown
//Any
//Union