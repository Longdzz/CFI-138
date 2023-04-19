// bt6
// let n;
// for(;true;){
//     n = Number(prompt("Nhap So N: "));
//     if(n>=2){
//         break;
//     }
// }
// let tong = 0;
// for(let i = 1; i<=n;i++){
//     tong += 1/(i*(i+1));
// }
// console.log("S= ", tong);

// bt7
// // let n = Number(prompt("Nhap So N: "));
// // let so_uoc = 0;
// // for(let i = 1; i<=n;i++){
// //     if(n % i == 0){
// //         so_uoc += 1;
// //     }
// // }
// // console.log("So Uoc Cua N la: ", so_uoc);

//bt9
// let chuoi;
// let x;
// for(;true;){
//      chuoi = prompt("Nhap Day So (it nhat 5 ki tu): ");
//      if((chuoi.length)>=5){
//         break;
//      }
// }
// for(;true;){
//     x = Number(prompt("Nhap So x (x >=2 ): "));
//     if(x >= 2){
//         break;
//     }
// }
// let ki_tu = "";
// for(let i = 0; i < x;i++){
//     ki_tu += "0";
// }
// console.log("Chuoi S sau khi them la: ", ki_tu+chuoi);

// bt10

// let a;
// let b;
// for(;true;){
//     a = Number(prompt("Nhap So a (a>0): "));
//     if(a>0){
//         break;
//     }
// }
// for(;true;){
//     b = Number(prompt("Nhap So b (b>0): "));
//     if(b>0){
//         break;
//     }
// }
// let set = 0;
// if(a>b){
//     for(let i = b; i > 0;i--){
//         if(a % i == 0 && b % i == 0){
//             console.log("Uoc Chung Lon Nhat la: ", i);
//             set++;
//             break;
//         }
//     }
//     if(set == 0){
//         console.log("a & b khong co UCLN.");
//     }
// }
// else if(a<b){
//     for(let i = a; i > 0;i--){
//         if(b % i == 0 && a % i == 0){
//             console.log("Uoc Chung Lon Nhat la: ", i);
//             break;
//         }
//     }
//     if(set == 0){
//         console.log("a & b khong co UCLN.");
//     }
// }

//bt10 & bt11

// let a;
// let b;
// for(;true;){
//     a = Number(prompt("Nhap So a (a>0): "));
//     if(a>0){
//         break;
//     }
// }
// for(;true;){
//     b = Number(prompt("Nhap So b (b>0 & b # a): "));
//     if(b>0 && b!= a){
//         break;
//     }
// }
// let x;
// let y;
// function UCLN(x,y){
//     while(x!=y){
//         if(x>y){
//             x = x - y;
//         }
//         else if(y>x){
//             y = y - x;
//         }
//     }
//     return x;
// }
// console.log("UCLN Cua a & b la: ", UCLN(a,b));
// console.log("BCNN Cua a & b la: ", a*b/UCLN(a,b));

//bt12
// let so_lan = 0;
// for(let i = 0;i<5;i++){
//     let so_nn = Math.floor(Math.random() * 21);
//     let n;
//     for(;true;){
//         n = Number(prompt("Nhap So n (tu 0-20): "));
//         if(n>=0 && n <= 20){
//             break;
//         }
//     }
//     if(n==so_nn){
//         console.log("Ban Da Nhap Dung!");
//         break;
//     }
//     else if(n != so_nn){
//         console.log("Ban Da Nhap Sai, Vui Long Thu Lai");
//         so_lan++;
//     }
// }
// if(so_lan == 5){
//     console.log("Ban Da Thua Cuoc");
// }
