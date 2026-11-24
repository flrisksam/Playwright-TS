// interface inputType {
//     empName: string, empAge: number;
// }

// function empDetails(dataObj: inputType) {
//     console.log(dataObj.empName + " " + dataObj.empAge);
// }
// empDetails({ empName: 'SK', empAge: 41 })

// const people: inputType[] = [
//     { empName: "PY", empAge: 38 },
//     { empName: "SN", empAge: 11 },
// ];
// console.log(people[1].empName);

// interface TestUser {
//     username: string,
//     password: string,
//     role: string,
//     isActive: boolean
// }
// const usersArray: TestUser[] = [
//     { username: "SK", password: "SNPS", role: "TM", isActive: true },
//     { username: "MSK", password: "SNPS", role: "TL", isActive: false }
// ]
// console.log(`1st user username is ${usersArray[0].username} and is active ${usersArray[0].isActive}`);
// console.log(`2nd user role ${usersArray[1].role}`);


interface TestEnvironmentDefinition {
    readonly environment: string,
    browser: "chromium"|"firefox"|"webkit",
    headless: boolean,
    timeout?: number
}
const testEnvironment: TestEnvironmentDefinition[] = [
    { environment: "QA", browser: "chromium", headless: true, timeout: 30000 },
    { environment: "UAT", browser: "firefox", headless: false },
    { environment: "QA", browser: "webkit", headless: true, timeout: 60000 },
]

function getBrowserInfo(browserInfo:TestEnvironmentDefinition):string{
    return `${browserInfo.environment} environment uses ${browserInfo.browser}`;
}
for(const env of testEnvironment){
    console.log(getBrowserInfo(env));    
}

// for(const environmentDetails of testEnvironment){
//     console.log(`Environment ${environmentDetails.environment}. Browser ${environmentDetails.browser}. Timeout ${environmentDetails.timeout ?? "Default timeout"}`);
// }
// function getBrowserInfoArray(browserInfoArray:TestEnvironmentDefinition[]):string{
//     let response:string = "";
//     for(const testBrowser of browserInfoArray){
//         return "QA environment uses chromium";
//      }
//     return response;
// }
// console.log(`QA environment uses ${getBrowserInfoArray(testEnvironment)}`);