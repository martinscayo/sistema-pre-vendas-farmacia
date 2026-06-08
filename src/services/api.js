const API_URL = 'http://localhost:3000'

export async function buscarClientes() {
  const resposta = await fetch(`${API_URL}/clientes`)
  return resposta.json()
}

export async function cadastrarCliente(cliente) {
  const resposta = await fetch(`${API_URL}/clientes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cliente)
  })

  return resposta.json()
}

export async function buscarAtendimentos() {
  const resposta = await fetch(`${API_URL}/atendimentos`)
  return resposta.json()
}
