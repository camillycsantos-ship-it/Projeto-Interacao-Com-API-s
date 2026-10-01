import api from "./api.js";

const userInterface = {
    async renderizarFrases () {
        const listaFrases = document.getElementById("lista-frases")

        try{
            const frases = await api.buscarFrases()
            frases.forEach(userInterface.adicionarFrases)
        }
        catch {
            alert('Erro ao renderizar frases')
            throw error
            
        }
    },

    adicionarFrases(frase){
        const listaFrases = document.getElementById("lista-frases");
        const li = document.createElement("li");
        li.setAttribute("data-id", frase.id)
        li.classList.add("li-frases")

        //ADICIONANDO A IMAGEM DAS ASPAS
        const iconeAspas = document.createElement("img")
        iconeAspas.src = "assets/imagens/aspas-azuis.png"
        iconeAspas.alt = "Aspas Azuis"
        iconeAspas.classList.add("icone-aspas")

        //CONSTRUIR A ESTRUTURA DO CONTEÚDO DA FRASE
        const fraseConteudo = document.createElement("div")
        fraseConteudo.textContent = frase.conteudo
        fraseConteudo.classList.add("frases-conteudo")

        //CONSTRUIR A ESTRUTURA DA AUTORIA DA FRASE
        const fraseAutoria = document.createElement("div")
        fraseAutoria.textContent = frase.autoria
        fraseAutoria.classList.add("frases-autoria")

        //DEFININDO A HIERARQUIA ENTRE AS TAGS (<li> , <img> , <div> )
        li.appendChild(iconeAspas)
        li.appendChild(fraseConteudo)
        li.appendChild(fraseAutoria)
        listaFrases.appendChild(li)

    const botaoExcluir = document.createElement("button")
    botaoExcluir.classList.add("botao-excluir")
    botaoExcluir.onclick = async () => {
        try{
            await api.excluirFrases(frase.id)
            userInterface.renderizarFrases();
        }
        catch(error){
            alert('Erro ao excluir frase')
        }
    }

    const iconeExcluir = document.createElement("img")
    iconeExcluir.src = "assets/imagens/icone-excluir.png";
    iconeExcluir.alt = "Icone Excluir";
    botaoExcluir.appendChild(iconeExcluir);
    iconeAspas.appendChild(botaoExcluir);
    li.appendChild(botaoExcluir);
}

}

export default userInterface;