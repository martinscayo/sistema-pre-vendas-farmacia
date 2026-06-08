import { useEffect, useState } from 'react'
import ClienteCard from '../components/ClienteCard'
import { buscarClientes } from '../services/api'

function Clientes() {
  const [clientes, setClientes] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    async function carregarClientes() {
      const dados = await buscarClientes()
      setClientes(dados)
      setCarregando(false)
    }

    carregarClientes()
  }, [])

  if (carregando) {
    return <p className="loading">Carregando clientes...</p>
  }

  return (
    <section>
      <div className="page-title">
        <p>Base de clientes</p>
        <h1>Clientes cadastrados</h1>
      </div>

      <div className="grid">
        {clientes.map((cliente) => (
          <ClienteCard key={cliente.id} cliente={cliente} />
        ))}
      </div>
    </section>
  )
}

export default Clientes
