import api from "./api.js";

const userInterface = {
    async renderizarFrases () {
        const listaFrases = document.getElementById("lista-frases")

        try{
            const frases = await api.buscarFrases()
            frases.forEach(frase => {
                listaFrases.innerHTML += `
                <li class="li-frases" data-id="${frase.id}">
                <img src="assets/imagens/aspas-azuis.png" class="icone-aspas">
                <div class="frases-conteudo">${frase.conteudo}</div>
                <div class="frases-autoria">${frase.autoria}</div>
                </li>
                `
            })
        }
        catch {
            alert('Erro ao renderizar frases')
            throw console.error();
            
        }
    }
}

export default userInterface;