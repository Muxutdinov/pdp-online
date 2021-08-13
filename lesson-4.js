// for, while,  do while
//===============for=loop
// var a = 15;
// for(let i = 1;i <= a; i++){
//     console.log(i+"  juft idish yuvildi!");
// }

// for(let i = 1;i <= arr.length; i++){
    
//     if(i % 2===0){
//         console.log(i+"  juft idish yuvildi!");
//     }
// }
//===============for=loop

//==========================================self==practice

// for(let i = 1;i <= a; i++){
    
//     if(i % 2===0){
//         console.log(i+"  juft idish yuvildi!");
//     }
    
//     else if(i % 3===0){
//         console.log(i+" uchta idish yuvildi!");
//     }

//     else if(i % 5===0){
//         console.log(i+" beshta idish yuvildi!");
//     }
// }

//==========================================self==practice

//====while=loop
// var j = 1;
// while( j <= a ){
//   if(j % 2!== 0){
//     console.log(j+ " tog marta yuvildi");
//   }
//   j++
// }
//====while=loop

//===================do=while
// var a = 15;
// var i = 1;
// do{
//   console.log(i+ "ta idish yuvildi!");
//   i++
// }while( i <= a );
//===================do=while
//============================================forni qoshimcha imkoniyatlari!==FOR OF qiymat boyicha arrayni aylanish
// var arr = [2,34,6,54,7,9,1,2,3,4,]
// for(var v of arr){
//     console.log(v+" soni!");
// } 
//=======
// var arr = [2,34,6,54,7,9,1,2,3,4,]
// for(var v of arr){
//    if(v === 0){
//      console.log("arrda 9 soni mavjud!");
//    }
//    else{
//      console.log("Berilgan son mavjud emas!");
//    }
// } 
//===================================================FOR-IN index boyicha arrayni aylanish
// for(var index in arr){
//      console.log(index);
// }
//===============
// var arr = [2,3,4,6,2,7,8,5,3,6]

// for(var index in arr){
//      if(arr[index] === 3&& arr[index]===7 && arr[index]===5){
//        console.log("soni "+index+" tartibida turibdi!");
//      }
// }
// var summa = 0;
// for(let i = 0;i<arr.length;i++){
//        summa = summa + arr[i]
// }

// console.log(summa);

//4


//===================vazifa
//2
// var n = [3,2,1,4,5,6,7,8,9,10,6,5,14]
// for(let i = 1;i<n.length;i++){
//   if(i % 2===0){
//     console.log(i+" soni juft");
//   }
//   if(i % 2!==0){
//     console.log(i+" soni tog");
//   }
// }


//3
// var arr = [2,3,4,6,2,7,8,5,3,6]
// for(let a = 1;a<arr.length;a++){
//   if(a % 2===0){
//     console.log(a+"  sonlari ikkiga bolinadi!");
//   }
// }
//5
// var arr = [5,16,7,4,10,3,4,4,14,5,14,4,44,4]
// if(arr%2===0){
//     console.log(arr);
// }
// else{
//     console.log(arr);
// }


// var num = [2,3,4,5,6,5,4,7,8,7,7,55,4,3]
// let sum =  0
// for(let i = 0; i <= num.length; i++ ){
//  if (i%2==0){
//     sum += num[i]
//   }
//   console.log(sum); 
// }

// var nom = [2,3,4,5,6,5,4,7,8,7,7,55,4,3]
// let som =  0
// for(let i = 0; i < nom.length; i++ ){
//  if (i%2!==0){
//     som *= nom[i]
//   }
//   console.log(som); 
// }
    