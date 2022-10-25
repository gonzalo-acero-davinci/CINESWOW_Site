const resultado = document.querySelector('#Resultado')
const formulario  = document.querySelector('#Formulario');
const boton = document.querySelector('#Boton');

const Peliculas = [
    {nombre: 'Black Adam',valor: 500},
    {nombre: 'Halloween',valor: 500},
    {nombre: 'Tadeo',valor: 500},
    {nombre: 'One-Piece',valor: 500},
    {nombre: 'El Suplente',valor: 500},
    {nombre: 'cronicas de un afair',valor: 500},
    {nombre: 'El Fotografo de Minamato',valor: 500},
    {nombre: 'Argentina 1985',valor: 500},
    {nombre: 'La huerfana: El origen',valor: 500},
    {nombre: 'Sonrie',valor: 500},
    {nombre: 'Amsterdam',valor: 500},
    {nombre: 'Wakanda Por Siempre',valor: 500},
    {nombre: 'El Gerente',valor: 500},
    {nombre: 'Pasaje al paraiso',valor: 500},
    {nombre: 'El exorcista',valor: 500},
    {nombre: '30 noches con mi ex',valor: 500},
    {nombre: 'Astrocope',valor: 500},
    {nombre: 'Casablanca',valor: 500}
   ]

const filtrar = ()=>{
//console.log(formulario.value);
resultado.innerHTML = '';
const texto = formulario.value.toLowerCase();
for (let pelicula of Peliculas){
    let nombre = pelicula.nombre.toLowerCase();
    if(nombre.indexOf(texto) !== -1){
        resultado.innerHTML += `
            <li>${pelicula.nombre}</li>
        `
    }

    if(resultado.innerHTML === ''){
        resultado.innerHTML += `
            <li>Pelicula no disponible</li>
        `
    }
}
}

boton.addEventListener('click', filtrar)

