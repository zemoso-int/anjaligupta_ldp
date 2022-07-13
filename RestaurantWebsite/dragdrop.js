var global_order_details_t1 = [];
var global_order_details_t2 = [];
var global_order_details_t3 = [];

function onDragOver(event) {
    event.preventDefault();
}

function onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function onDrop(event) {
    event.preventDefault();
    let dish_id = event.dataTransfer.getData('text');
    let ele = document.getElementById(dish_id);  //dish id
    let dish = ele.getElementsByTagName("a")[0].text;
    let price = ele.getElementsByTagName("p")[0].innerHTML.substring(3);
    let table_id = event.target.id;    
    updateGloalOrderDetails(table_id,dish,price);
    addDishToModal(table_id);
    updateSummary(table_id);
}

function updateGloalOrderDetails(table_id,dish,price) {

    var temp, flag = false;
    if(table_id == 't1')     {
        temp = global_order_details_t1;
    } else if(table_id == 't2') {
        temp = global_order_details_t2;
    } else {
        temp = global_order_details_t3;
    }

    for(var i=0;i<temp.length;i++) {
        if(temp[i][0] == dish)         {
            temp[i][2] = Number(temp[i][2]) + 1;
            flag = true;
        }
    }

    if(flag == false) {
        temp.push([dish,price,1]);
    }

    if(table_id == 't1')     {
        global_order_details_t1 = temp;
    } else if(table_id == 't2') {
        global_order_details_t2 = temp;
    } else {
        global_order_details_t3 = temp;
    }

    console.log("global array:");
    printArray(global_order_details_t1);
}

function updateSummary(table_id) {

    var temp, total_amt = 0, total_qty=0;

    if(table_id == 't1')     {
        temp = global_order_details_t1;
    } else if(table_id == 't2') {
        temp = global_order_details_t2;
    } else {
        temp = global_order_details_t3;
    }

    for(var i=0;i<temp.length;i++) {  
        total_amt = Number(total_amt) + Number(temp[i][1] * temp[i][2]);
        total_qty = Number(total_qty) + Number(temp[i][2]);
    }

    console.log("in updateSummary  "+table_id);
    document.getElementById(table_id).getElementsByTagName("p")[0].innerHTML = "Rs. "+total_amt;
    document.getElementById(table_id).getElementsByTagName("p")[1].innerHTML = "Total Items: "+total_qty;
    document.getElementById(table_id).getElementsByTagName("p")[2].innerHTML = "Order Total: "+total_amt;
}



function addDishToModal(table_id) {

    let original_table = document.getElementById(table_id).getElementsByTagName("table")[0].getElementsByTagName("tbody")[0];
    original_table.innerHTML = '';
    var temp;

    if(table_id == 't1')     {
        temp = global_order_details_t1;
    } else if(table_id == 't2') {
        temp = global_order_details_t2;
    } else {
        temp = global_order_details_t3;
    }

    for(var i=0;i<temp.length;i++) { 
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        td1.innerHTML = temp[i][0];     //dish name
        td2.innerHTML = temp[i][1];     //dish price

        var x = document.createElement("input");
        x.setAttribute("type", "number");
        x.setAttribute("min",1);
        x.setAttribute("max",5);
        x.setAttribute("value",temp[i][2]);
        x.setAttribute("dishName",temp[i][0] );
        x.setAttribute("onchange","updateQty(this.value,this.id,"+table_id+")");
        x.setAttribute("onClick","(this.oldValue=this.value)");
        x.setAttribute("id",temp[i][0]);

        td3.appendChild(x);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);    
        original_table.appendChild(tr);

    }    
}

function updateQty(new_qty,id_,table)  {
    var table_id = table.id;
    console.log("in updateQty "+new_qty+" "+id_+" "+table_id);
    var temp;

    if(table_id == 't1')     {
        temp = global_order_details_t1;
    } else if(table_id == 't2') {
        temp = global_order_details_t2;
    } else {
        temp = global_order_details_t3;
    }

    for(var i=0;i<temp.length;i++) {  
        if(temp[i].includes(id_)) {
            temp[i][2] = new_qty;
        }
    }

    if(table_id == 't1')     {
        global_order_details_t1 = temp;
    } else if(table_id == 't2') {
        global_order_details_t2 = temp;
    } else {
        global_order_details_t3 = temp;
    }
    console.log("calling updateSummary with table id "+table_id);
    updateSummary(table_id);

}


function displayModal(t_id) {
    let div = document.getElementById(t_id).getElementsByTagName("div")[0];
    div.style.display = "block";
}

function closeModal(m_id) {
    modal = document.getElementById(m_id);
    modal.style.display="none";
}

function generateBill(table_id) {
    var total = document.getElementById(table_id).getElementsByTagName("p")[2].innerHTML;
    alert(total);

    if(table_id == 't1')     {
       global_order_details_t1 = [];
    } else if(table_id == 't2') {
        global_order_details_t2 = [];
    } else {
        global_order_details_t3 = [];
    }

    addDishToModal(table_id);
    updateSummary(table_id);

}

function printArray(dish_array) {

    for(var k=0;k<dish_array.length;k++) {

        console.log(dish_array[k]);
        console.log("---");
    }
}

function exists(arr, search) {
    return arr.some(row => row.includes(search));
}