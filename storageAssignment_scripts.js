let i =0;
let j= 100;
function localScore() {
     if(localStorage.getItem('local') == null)
    {
        localStorage.setItem("local",1);
        x = 1;
    } else {
        var x = localStorage.getItem('local');
        var x = Number(x)+1;
        localStorage.setItem("local",x);
    }
    
    // i++;
    // var count1 = localStorage.getItem('local'); 
    document.getElementById("id1").innerHTML= x;
}
function sessionScore() {
    sessionStorage.setItem("session",j);
    j++;
    var count2 = sessionStorage.getItem('session'); 
    document.getElementById("id2").innerHTML= count2;
}
