function numberOneTriangle() {
    let n = parseInt(document.getElementById("nhap-n").value);

    if (n < 1 || n > 10) {
      alert("Số bạn nhập không hợp lệ. Vui lòng nhập lại số trong khoảng từ 1 đến 10.");
      return;
    }

  
    let dausao = "";
    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = 0; j < i; j++) {
        row += "*";
      }
      dausao += "<p>" + row + "</p>";
    }
    document.getElementById("triangle").innerHTML = dausao;
  }