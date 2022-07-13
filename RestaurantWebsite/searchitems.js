function searchMenuItems() {
    var query = document.getElementById("menuQuery").value.toUpperCase();
    var ul = document.getElementById("menuList");
    var li = ul.getElementsByTagName("li");
    
    for(i=0;i<li.length;i++) {
        if(li[i].innerText.includes(query)) {
            li[i].classList.remove("is-hidden");
        } else {
            li[i].classList.add("is-hidden") ;
        }
    }
   
}


function searchCategoryItems() {
    var query = document.getElementById("categoryQuery").value.toUpperCase();
    var ul = document.getElementById("menuList");
    var li = ul.getElementsByTagName("li");
    var arr = [];
    var a1=[];
    for(i=0;i<li.length;i++) {

        var arr = li[i].classList[0];
       a1.push([arr,li[i]]);
    }

    for(j=0;j<a1.length;j++) {
        if(a1[j][0].includes(query)) {
            a1[j][1].classList.remove("is-hidden");
        } else {
            a1[j][1].classList.add("is-hidden") ;
        }
    }
   
}



function searchTables() {
    var query = document.getElementById("tableQuery").value.toUpperCase();
    var ul = document.getElementById("tableList");
    var li = ul.getElementsByTagName("li");
    for(i=0;i<li.length;i++) {
        if(li[i].innerText.includes(query)) {
            li[i].classList.remove("is-hidden");
        } else {
            li[i].classList.add("is-hidden") ;
        }
    }
}