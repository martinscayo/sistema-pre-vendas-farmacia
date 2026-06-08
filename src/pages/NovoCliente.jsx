import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cadastrarCliente } from '../services/api'

function NovoCliente() {
  const navigate = useNavigate()

  const [cliente, setCliente] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    status: 'Cliente ativo'
  })

  function alterarCampo(evento) {
    const { name, value } = evento.target

    setCliente({
      ...cliente,
      [name]: value
    })
  }

  async function enviarFormulario(evento) {
    evento.preventDefault()

    await cadastrarCliente(cliente)
    navigate('/clientes')
  }

  return (
    <section>
      <div className="page-title">
        <p>Novo Cliente</p>
        <h1>Cadastrar Cliente da Farmácia</h1>
      </div>

      <form className="form" onSubmit={enviarFormulario}>
        <label>
          Nome
          <input
            type="text"
            name="nome"
            value={cliente.nome}
            onChange={alterarCampo}
            required
          />
        </label>

        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={cliente.email}
            onChange={alterarCampo}
            required
          />
        </label>

        <label>
          Telefone
          <input
            type="text"
            name="telefone"
            value={cliente.telefone}
            onChange={alterarCampo}
            required
          />
        </label>

        <label>
          Cidade
          <input
            type="text"
            name="cidade"
            value={cliente.cidade}
            onChange={alterarCampo}
            required
          />
        </label>

        <label>
          Status
          <select
            name="status"
            value={cliente.status}
            onChange={alterarCampo}
          >
            <option value="Cliente ativo">Cliente ativo</option>
            <option value="Aguardando retorno">
              Aguardando retorno
            </option>
          </select>
        </label>

        <button className="btn primary" type="submit">
          Salvar Cliente
        </button>
      </form>
    </section>
  )
}

export default NovoCliente