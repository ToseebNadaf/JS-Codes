// objects inside array 
// very useful in real world applications

const users = [
    {user_id : 1 ,firstName : "tosib",gender:"male"},
    {user_id : 2 ,firstName : "harshit",gender:"malesig"},
    {user_id : 3 ,firstName : "rakes",gender:"male"}
];

for(let value of users){
    console.log(value); // {user_id: 1, firstName: 'tosib', gender: 'male'}
                        //{user_id: 2, firstName: 'harshit', gender: 'male'}
                        //{user_id: 3, firstName: 'rakes', gender: 'male'}
                        
    console.log(value.user_id); // 1 - 2- 3

    console.log(value.firstName); // tosib - harshit -rakes
}                                           