function values(n){
    document.calculator.ans.value+= n
}

function borrar(){
    document.calculator.ans.value = document.calculator.ans.value.toString().slice(0,-1);
}