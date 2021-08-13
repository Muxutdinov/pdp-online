
const promise = new Promise((resolve, reject)=>{
setTimeout(()=>{
 resolve("foo")
 reject("too")
},2000);
});
// promise1.then((value)=>{
//     // console.log(value);
// })
console.log(promise);