//validar el localStorage
validStorage();

//llamar a los inputs

var btn = document.getElementById('add');
var nombre = document.getElementById('name');
var desc = document.getElementById('desc');
var img = document.getElementById('img');
var price = document.getElementById('price');

btn.addEventListener('click', function(){
    console.log('me ejecuto')
    nuevoProducto(nombre.value,desc.value,img.value,price.value);
    alert('nuevo producto' + nombre.value + 'se ha creado con exito');
    nombre.value = '';
    desc.value = '';
    img.value = '';
    price.value = '';


})
