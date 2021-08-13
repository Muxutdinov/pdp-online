// function num(){
//     console.log(Math.random());
// }
// num()

// var fun2 = function(){
//     console.log("ozgaruvchi bilan funksiyani ishlatish!");
// }
// fun2()
//============
// function foo(){
//     var a = Math.random()*10
//     var b = Math.random()*10
//     return a+b
// }
// var boo = foo()
// console.log(boo+23);
//==============
// function well(a, b, c){
//  return a+b+c
// }
// var boo = well(75,12,15)//funksiya parametirlari
// console.log(boo);
// function bu(...par){
//     var summa = 0;
//     for(var n of par){
//         summa = summa+=n;
//     }
//     console.log(summa);
//     return summa;
// }
// bu(2,34,54,64)
//===============
//Rekursiv funksiya
// function Rec(a){
//     console.log(a);
//     a++
//     if(a>10){
//         return;
//     }
//     Rec(a)
// }
//============================vazifalar
//1
// var arr = [2,3,45,652,2,5,8,54,]
// function filter(num){
//   for(let i = 0;i<arr.length;i++){
//      if(arr[i]===num){
//        console.log(arr[i]+"soni arrayda mavjud!");
//      }
//   }
// }
// filter(8)
//2
// function sonlar(...um){
//   var sum = 0;
//   for(var n of um){
//     sum = sum+n
//   }
//   console.log(sum);
// }
// sonlar(3,4,56,2,5)
//3
// var Array = ["olma","davlat","xalq","dasturchi","dasturlash","google","boolean"]
// function filter(soz){
//   for(let i = 0;i<Array.length;i++){
//     if(Array[i]===soz){
//       console.log(Array[i]+" sozi arrayda bor!");
//     }
//   }
// }
// filter("dasturlash")
//=====================practise
// var Array = [2,35,3,6,78,6]
