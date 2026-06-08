import { useEffect, useState } from 'react'
import { buscarAtendimentos } from '../services/api'

function Atendimentos() {
  const [atendimentos, setAtendimentos] = useState([])

  useEffect(() => {
    async function carregarAtendimentos() {
      const dados = await buscarAtendimentos()
      setAtendimentos(dados)
    }

    carregarAtendimentos()
  }, [])

  return (
    <section>
      <div className="page-title">
        <p>Histórico</p>
        <h1>Atendimentos recentes</h1>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Assunto</th>
              <th>Prioridade</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            {atendimentos.map((item) => (
              <tr key={item.id}>
                <td>{item.cliente}</td>
                <td>{item.assunto}</td>
                <td>{item.prioridade}</td>
                <td>{item.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Atendimentos
