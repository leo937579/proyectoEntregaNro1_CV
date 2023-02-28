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