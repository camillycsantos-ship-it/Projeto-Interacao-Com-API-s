import api from "./api.js";

const userInterface = {
    async renderizarFrases () {
        const listaFrases = document.getElementById("lista-frases")

        try{
            const frases = api.buscarFrases()
            listaFrases.onbeforematch(frases => {
                listaFrases.innerHTML += 
            })
        }
    }
}