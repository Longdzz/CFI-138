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
// let a = 0;
// do {
//     a = Number(prompt("Nhap Vao so a: "));
// } while (a<10);
// function compareNumbers(a, b) {
//     return a - b;
//   }
// let vonglap = [2, 5, 8, 1, -4, 5, 10, 9];

// // bt1

// let tich = 1;
// for(let i = 0; i < vonglap.length;i++){
//     tich *= vonglap[i];
// }
// console.log("Tich Cua Mang La: ", tich);





//bt2
// let num_chia2nn;
// for(let i = 0; i < vonglap.length;i++){
//     if(vonglap[i] % 2 === 0){
//         num_chia2nn = vonglap[i];
//         break;
//     }
// }
// for(let i = 0; i < vonglap.length;i++){
//     if(vonglap[i] % 2 === 0 && vonglap[i] < num_chia2nn){
//         num_chia2nn = vonglap[i];
//     }
// }
// console.log("So Nho Nhat Chia Het Cho 2 la: ", num_chia2nn);



//bt3
// let chia3_ln;
// for(let i = 0; i < vonglap.length;i++){
//     if(vonglap[i] % 3 === 0){
//         chia3_ln = vonglap[i];
//         break;
//     }
// }
// for(let i = 0; i < vonglap.length;i++){
//     if(vonglap[i] % 3 === 0 && vonglap[i] > chia3_ln){
//         chia3_ln = vonglap[i];
//     }
// }
// console.log("So Lon Nhat Chia Het Cho 3 la: ", chia3_ln);


//bt4
// let tbcong = 0;
// for(let i = 0; i < vonglap.length;i++){
//     tbcong += vonglap[i];
// }
// console.log("Trung Binh Cong Cua Mang La: ", tbcong/vonglap.length);

// const value = mycar[carkey];
// console.log(carket, '-'. value);
// delete mycar.sodem;
// cach tao 1 obj: const person = {};
// const fullinformation = Object.assign(mycar, aaddd);
 //bt5
// function so_ngt(a){
//     let so_dem = 0;
//     for(let i = a -1 ; i > 1; i--){
//         if(a % i == 0){
//             so_dem++;
//         }
//     }
//     if(so_dem === 0){
//         return true;
//     }
//     else if(so_dem != 0){
//         return false;
//     }
// }
// console.log("Cac So Nguyen To Trong Mang La: ");
// for(let i = 0; i<vonglap.length;i++){
//     if(so_ngt(vonglap[i]) == true){
//         console.log(vonglap[i], ','); 
//     }
// }

//bt6

// let kiemtra_nhohon10 = 0;

// for(let i = 0; i < vonglap.length; i++){
//     if(vonglap[i] < 10 ){
//         kiemtra_nhohon10 ++;
//     }
// }
// if(kiemtra_nhohon10 === 0){
//     console.log("Khong Co Phan Tu Nao Nho Hon 10");
// }
// else if(kiemtra_nhohon10 != 0){
//     console.log("Mang Co Phan Tu Nho Hon 10");
// }

//bt7
// const arr2 = [...arr2];
// let kiemtra_lonhon20 = 0;

// for(let i = 0; i < vonglap.length; i++){
//     if(vonglap[i] <= 20 ){
//         kiemtra_lonhon20++;
//     }
// }
// if(kiemtra_lonhon20 === 0){
//     console.log("Tat Ca Phan Tu Lon Hon 20");
// }
// else if(kiemtra_lonhon20 != 0){
//     console.log("Mang Co Phan Tu Nho hon 20");
// }


//bt8

// let num;
// for(;true;){
//     num = Number(prompt("Nhap So N vao: "));
//     let so = 0;
//     for(let i = 0; i < vonglap.length;i++){
//         if(num == vonglap[i]){
//             so = 1;
//         }
//     }
//     if(so == 1){
//         console.log("So Ban Nhap Trung la: ", num);
//         break;
//     }
// }
//.includes;








// console.log(vonglap.sort(compareNumbers));
// for(let i = 0; i<vonglap.length;i++){
//     console.log(vonglap[i]+ ',');
// }
// for(let i = 0; i< vonglap.length;i++){
//     for(let j = 0; j<vonglap.length-1;j++){
//         if(vonglap[j] > vonglap[j+1]){
//             let num = vonglap[j];
//             vonglap[j] = vonglap[j+1];
//             vonglap[j+1]= num;
//         }
//     }
// }
// for(let i = 0; i<vonglap.length;i++){
//     console.log(vonglap[i]+ ',');
// }



//bt2.1

const s = ["long", "qua", "dz", "pro", "text"];
//bt1
// let b = s[0].length;
// for(let i = 1; i < s.length;i++){
//     if(s[i].length < b){
//         b = s[i].length;
//     }
// }
// for(let i = 0; i <s.length;i++){
//     if(s[i].length === b){
//         console.log("Phan tu dau tien co chieu dai nho nhat la phan tu thu: ", i, "Gia tri phan tu la", s[i]);
//         break;
//     }
// }

//bt2
// let a;
// a = prompt("Nhap vao chuoi text: ");
// for(let i = 0; i < s.length;i++){
//     if(s[i] === a){
//         console.log("Phan Tu trung la phan tu thu ", i);
//     }
// }

//bt3
// let news = [];
// for(let i = 0; i < s.length;i++){
//     news.push(s[i].slice(0,3));
// }
// console.log("Day news moi la: ", news);

//bt4
// let newa = "";
// for(let i = 0; i < s.length;i++){
//     newa += s[i];
//     newa += "-";
// }
// newa = newa.substring(0,newa.length-1);
// console.log("Chuoi Moi La: ", newa);

//bt3.1
let a = [];
let b = [];
let a1 = [];
let b1 = [];
a = prompt("Nhap vao day so a(cach nhau bang dau phay): ");
b = prompt("Nhap vao day so b(cach nhau bang dau phay): ");
let ac = ",";
a = a + ac;
b += ac;
console.log(a);
let m = "";
for(let i = 0; i < a.length;i++){
    if(a[i] != ","){
        m += a[i];
    }
    else if(a[i] == ","){
        if(m == ""){
            continue;
        }
        else if(m != ""){
            let n = Number(m);
            a1.push(n);
            m = "";
        }
    }
    // let n = Number(a[i]);
    //     a1.push(n);
}
for(let i = 0; i < b.length;i++){
    if(b[i] != ","){
        m += b[i];
    }
    else if(b[i] == ","){
        if(m == ""){
            continue;
        }
        else if(m != ""){
            let n = Number(m);
            b1.push(n);
            m = "";
        }
    }
}
console.log(typeof(a1[0]));
let kiem_tra = 0;
for(let i = 0; i < a1.length;i++){
    for(let j = 0;j<b1.length;j++){
        if(a1[i] != b1[j]){
            kiem_tra++;
        }
        else if (a1[i] == b1[j]){
            kiem_tra = 0;
            break;
        }
    }
}
if(kiem_tra == 0){
    console.log("tất cả các giá trị số trong d1 có nằm trong d2");
}
else if(kiem_tra != 0){
    console.log("tất cả các giá trị số trong d1 không nằm trong d2");
}
let tong_a1 = 0;
for(let i = 0; i < a1.length;i++){
    tong_a1 += a1[i];
}
let kiem_tra2 = 0;
for(let i = 0; i< b1.length;i++){
    if(b1[i] % tong_a1 == 0){
        kiem_tra2++;
    }
}
console.log(a1);
console.log(b1);
console.log("Tong a1 la: ",tong_a1);
console.log(kiem_tra2);
if(kiem_tra2 == 0){
    console.log("Không có phần tử trong d2 chia hết cho tổng của d1");
}
else if(kiem_tra2 != 0){
    console.log("Có phần tử trong d2 chia hết cho tổng của d1");
}
let new_mang = [];
for(let i = 0; i < a1.length;i++){
    if(a1[i] % 2 == 0){
        new_mang.push(a1[i]);
    }
}
for(let i = 0; i < b1.length;i++){
    if(b1[i] % 2 == 0){
        new_mang.push(b1[i]);
    }
}
console.log("Mang moi chia het cho 2 la: ", new_mang);