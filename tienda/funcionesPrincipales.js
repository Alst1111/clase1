//Creamos un nevo obeto producto

function nuevoProducto(nombre, desc, img, price) {
    var producto = {
        nombre: nombre,
        descripcion: desc,
        imagen: img,
        precio: price
    }
    //enviamos el objeto producto a la funcion
    // add product que se encarga de guardar el producto
    addProduct(producto);
}

function getStorage() {
    return JSON.parse(window.localStorage.getItem('productos')) //puede ser cualquier nombre


}

function setStorage(arr) {
    window.localStorage.setItem('productos', JSON.stringify(arr)) //seteamos un parametro von un nombre cualquieras para llamar al array

}

function addProduct(obj) {
    //traemos el array con los datos almacenados en el local storage
    var nuevoArrayProductos = getStorage();
    //insertamos el nuevo objeto en el array
    nuevoArrayProductos.push(obj);
    //guardamos nuevamente el localStorage
    setStorage(nuevoArrayProductos);

}

function validStorage() {
    //validamos si localStorage es nulo
    if (getStorage() == null) {
        //insertMOs UN ARRAY VACIO
        setStorage([]);
        //devolvemos el localStorage
        return getStorage();
    } else {
        //devolvemos el localStorage
        return getStorage();
    }
}


function renderView(arr) {
    //llamamos al contenedor de productosList
    var ul = document.getElementById('productosList');
    //seteamos su html a vacio
    ul.innerHTML = '';
    //iteramos el array de productos
    arr.forEach(function (item, index) {
        //creamos los elementos de html
        var li = document.createElement('li');
        var col1 = document.createElement('span');
        var col2 = document.createElement('span');
        var img = document.createElement('img');
        var titulo = document.createElement('h3');
        var desc = document.createElement('p');
        var price = document.createElement('strong');

        //seteamos los atributos de los elementos
        titulo.innerText = item.nombre;
        desc.innerText = item.descripcion;
        precio.innerText = '$' + item.precio;
        img.src = item.imagen;
        img.classList.add("")



        // insertamos los elementos en el DOM
        col1.appendChild(img);
        col2.appendChild(titulo);
        col2.appendChild(desc);
        col2.appendChild(price);
        li.appendChild(col1);
        li.appendChild(col2);
        ul.appendChild(li);
    })
}
