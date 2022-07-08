let i =0;
let j= 100;
function localScore() {
    localStorage.setItem("local",i);
    i++;
    var count1 = localStorage.getItem('local'); 
    document.getElementById("id1").innerHTML= count1;
}
function sessionScore() {
    sessionStorage.setItem("session",j);
    j++;
    var count2 = sessionStorage.getItem('session'); 
    document.getElementById("id2").innerHTML= count2;
}