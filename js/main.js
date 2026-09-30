import userInterface from "./userInterface.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    userInterface.renderizarFrases();

    const formularioFrases = document.getElementById("frases-form")
    formularioFrases.addEventListener("submit", submissaoFormulario)

    async function submissaoFormulario(event){
        event.preventDefault();
        const id = document.getElementById("frases-id").value
        const conteudo = document.getElementById("frases-conteudo").value
        const autoria = document.getElementById("frases-autoria").value

        try{
            await api.salvarFrases({conteudo, autoria})
            userInterface.renderizarFrases();
        }
        catch{
            alert("Erro ao enviar frase")
        }
    }
})
