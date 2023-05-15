


let m = [];

function laSoNguyenTo(n) {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
function tinhTongSoNguyenTo() {
    var a = parseInt(document.getElementById("nhap-a").value);
    var b = parseInt(document.getElementById("nhap-b").value);
    var tong = 0;
    if(a<b){
        for (var i = a; i <= b; i++) {
            if (laSoNguyenTo(i)) {
                m.push(i);
                tong += i;
            }
        }
        console.log(m);
        document.getElementById("div1").innerHTML = "Các số nguyên tố trong khoảng từ a - b là:" +m;
        document.getElementById("div2").innerHTML = "Tổng các số nguyên tố trong khoảng từ " + a + " đến " + b + " là: " + tong;
    }
    else{
        document.getElementById("div1").innerHTML = "Vui Long Nhap Lai, so a dang lon hon b"
    }
}


