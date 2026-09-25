//REQUISIÇÃO - MÉTODO GET (OBTER DADOS DO SERVIDOR)
const api = {
    async buscarFrases() {
        try{
            const response = await fetch('https://localhost:3000/frases')
            return await response.json()
        }
        catch{
            alert('Erro ao buscar frases')
            throw error
        }
    }
}
export default api;