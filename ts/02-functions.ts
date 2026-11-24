function sampleFunction():void{
    console.log("Hi");
}
function getTestCaseTitle (input:string):string {
    let output:string = "Test: ";
return output+input;
}

if(getTestCaseTitle("login with valid credentials")==="Test: login with valid credentials"){
console.log("Passed");
}
else
{
    console.log("Failed");
}

function canRetryNormal(attemptsUsed:number,maxRetries:number):boolean{
    return attemptsUsed<maxRetries;
}
const retryOutputNormal = canRetryNormal(6,3);
console.log(`Retry Status: ${canRetryNormal(6,3)}`);