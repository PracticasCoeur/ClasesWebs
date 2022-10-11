// var personas = ["Guillermo", "Josue", "Chino", "Axel", 100];
//+++++++++++++++++++++++++++ Ingresar personas
// personas.push("Samuel");
//+++++++++++++++++++++++++++ Sacar el valor segun la posicion comienza con 0
// personas[2];
//+++++++++++++++++++++++++++ Sumar el valor
// personas[4]=personas[4]+100;
//+++++++++++++++++++++++++++ Nuevo arreglo sacando personas
// var nuevoArreglo=personas.slice[2,4];
//+++++++++++++++++++++++++++ Eliminar personas
// personas.splice[2];
//+++++++++++++++++++++++++++ Areglo dentro de un arreglo
// personas.push[1,2,3];
// personas[5][1]; //posicion del primero arreglo y posiscion del segundo

// class miClase{
//     constructor(Nombre,Apellido){
//         this.Nombre=Nombre;
//         this.Apellido=Apellido;
//     }
// }
// var elplata= new miClase("Cesar", "Plata");

//++++++++++++++++++++++++++++++++++++++++++++++++++ Estructuras
// var persona={
//     Nombre:"Cesar",
//     Apellido:"Plata",
//     Edad:21,
//     correo:"cesar_josue30@hotmail.com"
// }

// function lapersona(Nombre,Apellido){
//     this.Nombre=Nombre;
//     this.Apellido=Apellido;
// }
// var elcesar= new lapersona("Cesar", "Cabello");

// let variable={
//     Nombre:"HP",
//     Ram:"8 GB"
// }
// let Nombre=variable.Nombre;
// let Ram=variable.Ram;
// let frase=`Mi computadora ${variable.Nombre} tiene ${variable.Ram} de ram`;

// var articulos=[
//     {nombre: "Bici", costo:3000},
//     {nombre: "TV", costo:2500},
//     {nombre: "Libro", costo:320},
//     {nombre: "Celular", costo:10000},
//     {nombre: "Laptop", costo:20000},
//     {nombre: "Teclado", costo:500},
//     {nombre: "Audifonos", costo:1700}
// ];
// articulos.forEach((valor)=>{
//     console.log(valor.nombre);
// })
// var articulosCaros=articulos.filter((valor)=>{
//     if(valor.costo>2000)
//     return valor;
// })

// var articulosDescuentos=articulos.map((articulo)=>{
//    return {nombre:articulo.nombre,costo:articulo.costo*0.8};
// })


//++++++++++++++++++++++++++++++++++++++++++++++++ Funciones
// function otrafuncion(){
//     console.log("Escribo desde otra funcion ");
// }
// function escribir(lafuncion){
//     return lafuncion();
// }
// escribir(otrafuncion);

// (variable1)=>{return variable1*2}
// variable1=>variable1*2;
// ()=>variable1*2;


//++++++++++++++++++++++++++++++++++++++++++++++ Calculadora
// function multiplicar(val1,val2){
//     return val1*val2;
// }
// function suma(val1,val2){
//     return val1+val2;
// }
// function cal(val1,val2,calculo){
//     return calculo(val1,val2);
// }
//funcion que defines al momento
// cal(4,9,multiplicar); //36
// cal(10,2,(val1,val2)=>{return val1/val2})//5

//++++++++++++++++++++++++++++Arrays+++++++++++++++++++++ Haciendo cosas con arreglos
// let nombres=["Guillermo", "Josue", "Chino", "Arely", "Samuel"];

let nombres=[
    {
        nombre:"Guillermo",
        edad: 37,
        sexo: "M"
    },
    {
        nombre:"Josue",
        edad: 22,
        sexo: "M"
    },
    {
        nombre:"Chino",
        edad: 20,
        sexo: "M"
    },
    {
        nombre:"Arely",
        edad: 21,
        sexo: "F"
    },
    {
        nombre:"Samuel",
        edad: 21,
        sexo: "M"
    }
];

let hombres=nombres.filter(persona=>{
    if(persona.sexo=="M" && persona.edad<25)
    {
        console.log("Evaluando a "+persona.nombre);
        return persona;
    }
})

let saludos=nombres.map(persona=>{
    // return `Hola ${persona.nombre} tu edad es de ${persona.edad}`;
    let sueldo=0;
    if(persona.edad>30)
    {
        sueldo=10000
    }
    return{nombre:persona.nombre,sueldo:sueldo};
})

let mujer=nombres.find(persona=>{
    if(persona.sexo=="F"){
        return true;
    }
})
 
nombres.forEach(persona=>{
    console.log(persona.nombre);
})

let hayMayores=nombres.some(persona=>{
    if(persona.edad>30)
    {
        return true;
    }
})

let contenedor=document.getElementById("contenedor");
let input=document.querySelector("#input");
let botoncito=document.querySelector("#botoncito");

botoncito.addEventListener("click",()=>{
    contenedor.innerText=input.value;
    contenedor.className="sombreado";
})

input.addEventListener("keyup",()=>{
    if(input.value.length>3)
    {

        contenedor.innerText=input.value;
        contenedor.className="exito";
    }
    else{
        contenedor.innerText=input.value;
        contenedor.className="falla";

    }
})