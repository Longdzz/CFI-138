// // let x = true;
// // let y = true;
// // let z = false;
// /*
// x && y && z → f
// x && y && !z → t
// (x && y) || z → t
// (x && y) || !z → t
// x && (y || z) → t
// x && !(y || z) → f
// x && (y || !z) → t
// x && (!y || z) → f
//  */
// /*
// name = 'AAA', age = 20, isGood = true
// age + 10 = 30
// age % 3 = 2
// name + ' BBB' = "AAABBB"
// !isGood = f

// name == 'aaa' && age >= 20 → f
// name != 'aaa' && isGood → t
// !(age < 10) && !isGood → f
//  */
// // a = 10, b = 20, c = 30, d = '40'
// // a + b + c = 60
// // a - b / c = 9.333333
// // a - (b * c) = -590
// // d - (a * b) - c = -190 
// // a + b + c + d = 6040
// // d + a + b + c = 40102030
// // d + a - b + c = 4020
// // a - b + d - c = -1070
// // d - c + a - b = 0
// // a * b + d * c = 1400
// // let a = 10;
// // let b = 20;
// // let c = 30;
// // let d = "40";
// // console.log(a - b + d - c);



// // x = true, y = false, z = 10

// // x && y → f
// // x && !y → t
// // x && z == 10 → t
// // (x && z == 10) → t
// // !(x && z == 10) → f
// // !(x && z == 50) → t

// // x && y && z == 10 → f
// // x && !y && z == 10 → t
// // x || y || z == 10 → t
// // (x && y) || z != 10 → f
// // !(x && z == 10) || y → f

// // 5. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? 
// // Giải thích vì sao có kết quả đó?
// // a = 1, b = '2', c = 3, d = '4'

// // b + d = 24 
// // a + b + c + d =  1234

// // a - b + c - d = -2
// // a - b - c + d = -44 
// // (b + d) - (a + c) = 20 
// // (a + b) - (c + d) = -22
// // a * c + b * d = 38
// // -b + d = -24
// // -b - d = -6
// // -(b + d) = -24
// // let a = 1;
// // let b = "2";
// // let c = 3;
// // let d = "4";
// // console.log(a + b + c + d);

// // 6. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? 
// // Giải thích vì sao có kết quả đó?
// // age = 25, isMarried = false, isRich = true

// // age > 25 && isMarried && isRich → f
// // (age <= 25 || isMarried) && isRich → t
// // (age > 10 || isRich) && isMarried → f
// // !(age >= 15 && isMarried) && isRich → f
// // !(age <= 20) || !(isMarried && isRich) → t
// // (age > 8 && !isMarried) || isRich → t
// // !(age < 8 && !isMarried) || isRich → t
// // (age == 8 && isMarried) || !isRich → f



// // Kiểu dữ liệu nguyên thủy primitive datetype
// // -number: 1, 2, 4, 5
// // -String: "Hello mindx"
// // -Boolean: true & false
// // -null
// // -undefined
// 1. Sự khác biệt giữa const let var
// 2. Các kiểu dữ liệu ở trong JS
// 3. Sự khác nhau giữa null và undefined
// 4. Các scope ở trong JS
// let m = 4;
// let n = 3;
// for(let i = 0; i < n; i++){
//     for(let y = 0; y<=i; y ++){
//         console.log("*");
//     }
//     console.log("<br/>")
// }
// for(let i = 1; i<=500;i++){
//     console.log(i );
// }
// for(let i = 1; i<=300;i++){
//     if((i % 2 === 0) && (i % 3 ===0)){
//         console.log(i );
//     }
// }
// let tong_35 = 0;
// for(let i = -30; i <=50;i++){
//     if(i % 2 === 0){
//         tong_35 += i;
//     }
// }
// console.log("Tong cac so tu -30 den 50 la: ", tong_35);

// let so_n1 = prompt("Nhap So N: ");
// let so_n = parseInt(so_n1);
// let tich = 1;
// for(let i = 1; i <= so_n; i ++){
//     tich *= i;
// }
// console.log("Luy Thua Cua So N la: ", tich);
// let so_n1= prompt("Nhap so N1: ");
// let so_n2= prompt("Nhap so N2: ");
// let so_n3= prompt("Nhap so N3: ");
// let so_n1a = parseInt(so_n1);
// let so_n2a = parseInt(so_n2);
// let so_n3a = parseInt(so_n3);
// for( let i = so_n1a; i <= so_n2a; i++){
//     if(i % so_n3a === 0){
//         console.log("So Nho Nhat chia het cho x la: ", i);
//         break;
//     }
// }
// let so = prompt("Nhap So N: ");
// let so_1 = parseInt(so);
// let kiem_tra = 0;
// for(let i = so_1 - 1; i > 1; i--){
//     if(so_1 % i === 0){
//         kiem_tra++;
//     }
// }
// if(kiem_tra === 0){
//     console.log("N la so nguyen to ");
// }
// else{
//     console.log("N khong phai la so nguyen to ");
// }
// let kiem_tra = 0;
// while (kiem_tra > 0){
//     let so = prompt("Nhap So N: ");
//     let so_1 = parseInt(so);
//     if((n>=2) && (n<=10)){
//         kiem_tra += 1;
//     }
// }
// let so = prompt("Nhap So N: ");
// let so_1 = parseInt(so);
// for(let i = 1; i <= 10;i++){
//     console.log(so_1 ," x", i, "= ", so_1*i);
//     console.log("<br/>");
// }
let so = prompt("Nhap So N: ");
let n = parseInt(so);
for(let i = 0; i <= n; i++){
    let nam = "";
     for(let y = 0; y< i; y ++){
        nam += "*";
     }
     console.log(nam);
     }
// let so = prompt("Nhap Chieu Cao: ");
// let n = parseInt(so);
// let so = prompt("Nhap So N: ");
// let n = parseInt(so);
// let a = prompt("Nhap So N: ");
// let n = parseInt(a);
// console.log(`${n} x ${i} = ${n*i}`);







