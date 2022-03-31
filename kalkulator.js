function view(val){
    document.getElementById("viewer").value += val
}

function clean(){
    document.getElementById("viewer").value = "";
}

function backspace(){
    var val = document.getElementById("viewer").value;
    document.getElementById("viewer").value = val.substring(0, val.length-1);
        0,
        val.length-1
}

function equal(){
    var val = document.getElementById("viewer").value;
    if(val){
        document.getElementById("viewer").value = eval(val)
    }
}