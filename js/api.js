//REQUISIÇÃO - MÉTODO GET (OBTER DADOS DO SERVIDOR)
const api = {
    async buscarFrases() {
        try{
            const response = await fetch('http://localhost:3000/frases')
            return await response.json()
        }
        catch{
            alert('Erro ao buscar frases')
            throw error
        }
    },

    async salvarFrases(frase) {
        try{
            const response = await fetch('http://localhost:3000/frases',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(frase)
            })
            return await response.json()
        }
        catch{
            alert('Erro ao salvar frases')
            throw error
        }
    },
    
    async excluirFrases(id){
        try{
            const response = await fetch(`http://localhost:3000/frases/${id}`, {
                method: "DELETE"
            })
        }
        catch{
            alert('Erro ao deletar frase')
            throw error
        }
    }
}
export default api;