// singleton
// Object.create

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "rohan",
    "full name": "rohan kadam",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "rohan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "rohan@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "rohan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());