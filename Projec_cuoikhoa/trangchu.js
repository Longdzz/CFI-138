window.onscroll = function(){
var count = 0;
var project1 = setInterval(project,10);
function project(){
    count ++;
    var num1 = document.getElementById("lnum1").innerHTML=count;
    if(count == 200){
        clearInterval(project1);
    }
}
var count2 = 0;
var project2 = setInterval(project_a,10);
function project_a(){
    count2 ++;
    var num2 = document.getElementById("lnum2").innerHTML=count2;
    if(count2 == 50){
        clearInterval(project2);
    }
}

    var count3 = 0;
var project3 = setInterval(project_b,10);
function project_b(){
    count3 ++;
    var num3 = document.getElementById("lnum3").innerHTML=count3;
    if(count3 == 1000){
        clearInterval(project3);
    }
}

var count4 = 0;
var project4 = setInterval(project_c,10);
function project_c(){
    count4 ++;
    var num4 = document.getElementById("lnum4").innerHTML=count4;
    if(count4 == 5){
        clearInterval(project4);
    }
}
}
/* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. The "active" class is used to add a background color to the current button when its belonging panel is open. The "show" class is used to open the specific accordion panel */
const accordion = document.getElementsByClassName('lbody5_c_container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}



