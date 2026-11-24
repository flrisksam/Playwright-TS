let numArray:number[] = [3,1,7];
console.log("Full Array: "+numArray);
numArray.push(9);
console.log("After add last: "+numArray);
numArray.pop();
console.log("After remove last: "+numArray);

let multiTypeNonGenericArray:(String|number)[] = [9,"SK"];
//Generic array
let nameArray:Array<String> = ["SK","PY"];
let multiDataTypeArray:Array<String|boolean> = ["SK",true];
let anyArray:Array<any> = [5, false, "OM"];

for(let i:number=0;i<numArray.length;i++){
    console.log("Value in array "+numArray[i]);
}

for(let arrayIndex in numArray){
    console.log("For index - value in array "+numArray[arrayIndex]);
}

for(let value of numArray){
    console.log("For value - value in array "+value);
}

const systemUsers = [
    { username: "admin", password: "admin123", role: "Admin", age:41 },
    { username: "tester", password: "test123", role: "Tester", age:40 },
    { username: "viewer", password: "view123", role: "Viewer", age:38 }
];
console.log(`Username: ${systemUsers[1].username}`);
const youth = systemUsers.filter(n => n.age>40);
const doubledAge = youth.map(userAge => userAge.age*2);
for(let e of youth){
    console.log(`Mr Young ${e.username}`);
}
console.log(doubledAge);
