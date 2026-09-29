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

    async salvarFrases() {
        try{
            const response = await fetch('http://localhost:3000/frases',{
                Method: "POST",
                Headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(frases)
            })
            return await response.json()
        }
        catch{
            alert('Erro ao salvar frases')
            throw error
        }
    }

}
export default api;