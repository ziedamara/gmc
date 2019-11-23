let input = "";

    function ShowValue(btn){  
    input += btn.value;
    
      console.log(input);
      document.getElementById("textview").innerHTML = input;
    }

function quickMath(){
  console.log(eval(input));
       document.getElementById("textview").innerHTML = eval(input);
}

function Reset(btn){
   document.getElementById("textview").innerHTML = "0";
  input = "";
}
