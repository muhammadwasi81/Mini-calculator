function getNumber(num){
    var result = document.getElementById("result");
   
    result.value += num;
 }
 //c button
 function clearResult(){
     var result = document.getElementById("result");
     result.value = ""
 }
 //equal to //
 function getResult(){
     var result = document.getElementById("result");
     result.value = eval(result.value)
 }

// backspace function //
function back(){
    var result  = document.getElementById("result").value;
    document.getElementById("result").value=result.slice(0, -1);
}

// square function //
function square(){
    var result = document.getElementById("result").value;
    document.getElementById("result").value *=document.getElementById("result").value;
    result.value =eval(result.value);
}
