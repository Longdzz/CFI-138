const arr_1 = [1,2,3];
const arr_2 = [...arr_1];
// sao chep 2 arr
const arr_3 = [...arr_1, ...arr_2];
//gop mang
const arr_4 = [1,...arr_1];
//them so 1 vao dau mang
let student = {
    age: 20,
    name: "Alex",
    gpa: 4
}
let student_2 = {
    ...student
}
// sao chep 2 opject
const greeting = (studentName = friend) => {
    console.log(`Hello ${studentName}, welcome to Mindx`);
};

//aray funtion
//ham map
const num = [10,3,6];
let doubleNums = num.map((nums)=>{
    return nums * 2;
})
let doubleNums1 = num.map((num) => num * 2);
//2 cach viet giong nhau




// vi du khac
const Studens = [
    {
        FirstName: "Nguyen",
        lastName: "A",
        math: 8,
        english: 10,
        chemestic: 3,
    },
    {
        FirstName: "Nguyen",
        lastName: "b",
        math: 5,
        english: 10,
        chemestic: 7,
    },
    {
        FirstName: "Nguyen",
        lastName: "C",
        math: 8,
        english: 7,
        chemestic: 5,
    },
];


const preprosetsingst = (Studens)=>{
    let result = Studens.map((hocsinh)=>{
        const newhocsinh = {
            fullName: `${hocsinh.FirstName} ${hocsinh.lastName}`,
            gpa: (hocsinh.math + hocsinh.english + hocsinh.chemestic)/3,
        };
        return newhocsinh;
    })
    return result;
};
const newhocsinh1 = preprosetsingst(Studens);
console.log(newhocsinh1);
for(let i = 0; i < newhocsinh1.length;i++){
    for(let j = 1; j < newhocsinh1.length;j++){
        if(newhocsinh1[i].gpa < newhocsinh1[j].gpa){
            const hocsinhmoi = newhocsinh1[i];
            newhocsinh1[i] = newhocsinh1[j];
            newhocsinh1[j] = hocsinhmoi;
        }
    }
}
console.log(newhocsinh1);
// const best = newhocsinh1.filter((num1)=>{
//     const best1 = 0;
//     if(num1[i].gpa > best1){
//         best1 = num1[i];
//     }

// })
// const preprosetsingst = (Studens)=>{
//     return result = Studens.map((hocsinh)=>{
//         const {FirstName,lastName,math,english,chemestic} = hocsinh;
//         return {
//             fullName: `${FirstName} ${lastName}`,
//             gpa: (math + english + chemestic)/3,
//         };
//     })
// };
// const newhocsinh1 = preprosetsingst(Studens);
// console.log(newhocsinh1);
// filter
const filterfuntion = [1,2,3,4,5,6,7,8,9,10];
const evenNumber = filterfuntion.filter((num) => {
    const isvennumber = num % 2 === 0;
    return isvennumber;
})
console.log(evenNumber);
// const evenNumber1 = filterfuntion.filter((num)=> num % 2 === 0);

const arr_5 = [1,2,3,4,5]
const tong_arr = arr_5.reduce((acc,cur)=>{
    return acc + cur;
},0)



const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 }
];

// const tongtrungbinh = (scores) =>{
//     return result = scores.map((hocsinh)=>{
//         const{score,weight} = hocsinh;
//         return
//     })
// }

const getGPA_2 = (scores) =>{
    return scores.reduce((gpa,subject)=>{
        return gpa + subject.score * subject.weight;
    },0);
}
const gpa = getGPA_2(scores);
console.log(gpa);