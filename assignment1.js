var func1 = function() {
    console.log("in function 1");
   // alert("in function 1");
    
}

function func2(func1,y) {
    func1();
    console.log(y);
    //alert(y);
    
}

function func3(name1, name2) {
    var ch1 = name1.charAt(0);
    var ch2 = name2.charAt(0);
    var result = ch1+ch2;
    console.log(result);
}

var value = (name1,name2) => {
    var ch1 = name1.charAt(0);
    var ch2 = name2.charAt(0);
    var result = ch1+ch2;
    console.log(result);

}

func2(func1,3);
func3("ABC","DEF")
value("ABC","DEF");
