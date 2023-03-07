const nav = document.querySelector(".nav-menu");
const abrir = document.querySelector(".abrir-menu");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", (e) => {
    nav.classList.add("visible");
    
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

function agregarModal(titulo, parrafo){
    if(titulo==="WhatsApp"){
        divModal.innerHTML = `

            <h2><i class="bi bi-whatsapp"></i> &nbsp ${titulo}</h2>

            <h4>${parrafo}</h4>
            
            <h4>leo937579@gmail.com
            </h4>

            <button class="boton cerrar" id="cerrar-modal-centro">Cerrar</button>
        
            `;             

        hero.append(divModal);

        divModal.classList.add("active");


        const cerrarModalCentro = document.querySelector("#cerrar-modal-centro");

        cerrarModalCentro.addEventListener("click", () => {
            divModal.classList.remove("active"); 
                
        });

    }else if(titulo==="Correos"){
        divModal.innerHTML = `

            <h2><i class="bi bi-envelope"></i> &nbsp ${titulo}</h2>

            <h4>${parrafo}</h4>

            <h4>leoleand7@gmail.com
            </h4>
        
            <button class="boton cerrar" id="cerrar-modal-centro">Cerrar</button>
        
            `;             

        hero.append(divModal);

        divModal.classList.add("active");


        const cerrarModalCentro = document.querySelector("#cerrar-modal-centro");

        cerrarModalCentro.addEventListener("click", () => {
            divModal.classList.remove("active"); 
                
        });

    }
}


const botonesNavLink = document.querySelectorAll(".nav-link");
const hero = document.querySelector("#hero");

const divModal = document.createElement("div");
divModal.classList.add("modal-centro");
divModal.setAttribute("id", "modal-centro");


botonesNavLink.forEach(boton => {
    boton.addEventListener("click", (e) => {
        
        nav.classList.remove("visible");

        if(e.currentTarget.id === "whatsapp" || e.currentTarget.id === "whatsapp2"){
           
            agregarModal("WhatsApp", "Mi número: 11 5866-3919")

        }else if(e.currentTarget.id === "mail" || e.currentTarget.id === "mail2"){
            
            agregarModal("Correos", "leo937579@gmail.com");
                                    
        }else if(e.currentTarget.id === "1"){
            //alert("edu");

        }else if(e.currentTarget.id === "4"){
            //alert("id4");
        }
    });
});


const texto=document.getElementById('logo');

const letras = texto.innerText.split("");

texto.innerText = "";

letras.forEach((letra) => {

    let caracter = letra === ' ' ? '&nbsp;' : letra;
    texto.innerHTML = texto.innerHTML +  `
        <div>
            <span>${caracter}</span>
            <span  class="segunda-linea">${caracter}</span>
        </div>
    `;

});

// Animación de las letras del Nombre
texto.addEventListener('mouseenter', () => {
    let cuenta = 0;

    const intervalo = setInterval( () => {
        if(cuenta < texto.children.length){
            texto.children[cuenta].classList.add('animacion');
            cuenta += 1;
        }else{
            clearInterval(intervalo);
        }
    }, 30);
});


texto.addEventListener('mouseleave', () => {
    let cuenta = 0;

    const intervalo = setInterval( () => {
        if(cuenta < texto.children.length){
            texto.children[cuenta].classList.remove('animacion');
            cuenta += 1;
        }else{
            clearInterval(intervalo);
        }
    }, 30);
});



let link=document.getElementById('test');
link.addEventListener('click',()=> {
    
    const URL = "http://www.elhistorico.ga/";

    window.open(URL,"ventana1","width=400,height=600,scrollbars=NO") 
     
});

// Validación formulario
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    let banderaError = false;

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(nombre.value.length < 3){

        banderaError = true;
    }
    
    if(!regexEmail.test(email.value)){

        banderaError = true;
    }
    if(mensaje.value.length < 4){
    
        banderaError = true;
    }
    
    if(banderaError){
        
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo salió mal!',
            footer: '<a href="#contacto">Completa los campos del formulario.</a>',
            
            confirmButtonColor: '#ff0000',
            
            confirmButtonText: 'Ok!'
        })


    } else {
        
        Swal.fire({
            title: '¿Enviar formulario?',
            text: `Se van a enviar los datos del formulario!`,
            icon: 'question',//'warning'
            showCancelButton: true,
            confirmButtonColor: '#00FF00',
            cancelButtonColor: '#FF0000',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí,  Enviar!'
        }).then((result) => {
            if (result.isConfirmed) {
                
                Swal.fire({
                    title: 'Enviado!',
                    text: `Tus datos han sido enviados.`,
                    icon: 'success',//'warning'
                    
                    confirmButtonColor: '#00FF00',
                    
                    
                    confirmButtonText: 'OK!'
                })
            }
        })
    }
});

nombre.addEventListener("blur", function (e){
    const field = e.target;
    const fieldValue = e.target.value;

    field.nextElementSibling.innerText = "";

    if(fieldValue.length===0 || fieldValue.length < 3){
        
        field.classList.remove("valid")
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Requerido";
        nombre.value = "";
        nombre.focus();

    }else{
        field.classList.remove("invalid");
        field.classList.add("valid")
    }
});

email.addEventListener("blur", function (e){
    const field = e.target;
    const fieldValue = e.target.value;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    field.nextElementSibling.innerText = "";

    if(!regexEmail.test(fieldValue)){
        
        field.classList.remove("valid")
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Ingresa un e-mail válido";
        email.value = "";
        email.focus();

    }else{
        field.classList.remove("invalid");
        field.classList.add("valid")
    }
});

mensaje.addEventListener("blur", function (e){
    const field = e.target;
    const fieldValue = e.target.value;

    field.nextElementSibling.innerText = "";

    if(fieldValue.length < 4){
        
        field.classList.remove("valid")
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerText = "Requerido";
        mensaje.value = "";
        mensaje.focus();

    }else{
        field.classList.remove("invalid");
        field.classList.add("valid")
    }
});


// Barras Animadas 
const softSkills = document.querySelector("#soft-skills");
const barras = document.querySelectorAll(".progress-bar");
const btn1 = document.querySelector("#btn1");

const porcentajes = [];
let i=0;

barras.forEach(barra => {
    
    porcentajes[i] = parseInt(barra.innerHTML.slice(0, -1));
    i++;

});

softSkills.addEventListener("mouseenter", (e) =>{
    
    let progreso = [0,0,0,0];
    let prog1= "";

    let intervalo = [];
    
    intervalo[0] = setInterval(function(){

        progreso[0] = progreso[0] + 1;
        prog1= progreso[0].toString()+"%";
        
        
        
        barras[0].style.width = prog1; 
        barras[0].style.fontSize = "1.5rem";
        barras[0].setAttribute("aria-valuenow", prog1);
        barras[0].innerText = prog1;
        //console.log(progreso[0]);

        if(progreso[0]>=porcentajes[0]){
            clearInterval(intervalo[0]);
        }
        
    },30);

    intervalo[1] = setInterval(function(){

        progreso[1] = progreso[1] + 1;
        prog1= progreso[1].toString()+"%";
        
        
        
        barras[1].style.width = prog1; 
        barras[1].style.fontSize = "1.5rem";
        barras[1].setAttribute("aria-valuenow", prog1);
        barras[1].innerText = prog1;
        //console.log(progreso[1]);

        if(progreso[1]>=porcentajes[1]){
            clearInterval(intervalo[1]);
        }
        
    },30);

    intervalo[2] = setInterval(function(){

        progreso[2] = progreso[2] + 1;
        prog1= progreso[2].toString()+"%";
        
        
        
        barras[2].style.width = prog1; 
        barras[2].style.fontSize = "1.5rem";
        barras[2].setAttribute("aria-valuenow", prog1);
        barras[2].innerText = prog1;
        //console.log(progreso[2]);

        if(progreso[2]>=porcentajes[2]){
            clearInterval(intervalo[2]);
        }
        
    },30);

    intervalo[3] = setInterval(function(){

        progreso[3] = progreso[3] + 1;
        prog1= progreso[3].toString()+"%";
        
        
        
        barras[3].style.width = prog1;
        barras[3].style.fontSize = "1.5rem";
        barras[3].setAttribute("aria-valuenow", prog1);
        barras[3].innerText = prog1;
        //console.log(progreso[3]);

        if(progreso[3]>=porcentajes[3]){
            clearInterval(intervalo[3]);
        }
        
    },30);
    

    softSkills.addEventListener("mouseleave", (e) =>{
       
        for(i=0; i<porcentajes.length; i++){

        clearInterval(intervalo[i]);
        barras[i].style.width = "0";
       }
       
    });
    
});