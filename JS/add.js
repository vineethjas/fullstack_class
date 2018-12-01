function add(){
    var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    var c=a+b;
    console.log(c);
    document.getElementById("result").innerHTML="<b>"+c+"</b>";
}