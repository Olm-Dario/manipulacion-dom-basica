const form = document.querySelector('#form')
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const button = document.getElementById('btnCalcular');
const pResult = document.querySelector('#result')


/*
  Para este caso seria cuando los input no esten en un formulario

button.addEventListener('click', btnOnClick)

function btnOnClick (){
  pResult.innerText = input1.value + input2.value;
}

*/

/*
  Los fomularios por defecto toman al ultimo boton con el evento submit,
  esto hace que la pagina se recargue cada que hagamos click en el boton,
  para evitar mandamos como parametro en nuestra funcion que queremos que
  se ejecute el evento submit, luego usamos la funcion preventDefault();
*/ 

form.addEventListener('submit', btnOnClick)

function btnOnClick (event){
  event.preventDefault();
  pResult.innerText = input1.value + input2.value;
}

/*
  La otra manera de evitar la recarga de la pagina es pasarle el tipo al boton:
  <button type="button" id="btnCalcular">Calcular</button>
  Si le decimos que el boton es de tipo button no recargara la pagina
*/