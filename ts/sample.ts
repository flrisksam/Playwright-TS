interface TestUserDetails{
    username:string,
    password:string,
    role:string,
    isActive:boolean,
    age:number
}
const testUsersArray:TestUserDetails[] = [
    {username:"SK", password:"9", role:"Father", isActive:true, age:41},
    {username:"PY", password:"11", role:"Mother", isActive:false, age:37},
    {username:"HP", password:"25", role:"Ex", isActive:true,age:40}
]
for(const userName of testUsersArray){
    console.log(`Array username ${userName.username}`);
}

const filteredActiveUsers = testUsersArray.filter(usersValue => usersValue.isActive)
const activeUsersUsername = filteredActiveUsers.map(usernameValue => usernameValue.username);
console.log(`Active users username list ${activeUsersUsername}`);
console.log(`No of active users ${activeUsersUsername.length}`);
for(const activeUsers of activeUsersUsername){
    console.log(`Filtered active users username ${activeUsers}`);
}