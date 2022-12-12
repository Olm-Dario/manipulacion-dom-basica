const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const button = document.getElementById('btnCalcular');
const pResult = document.querySelector('#result')

function btnOnClick (){
  pResult.innerText = input1.value + input2.value;
}

