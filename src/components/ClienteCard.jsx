function ClienteCard({ cliente }) {
  return (
    <div className="card">
      <div className="card-top">
        <h3>{cliente.nome}</h3>
        <span className={`status ${cliente.status === 'Ativo' ? 'ativo' : 'analise'}`}>
          {cliente.status}
        </span>
      </div>

      <p><strong>E-mail:</strong> {cliente.email}</p>
      <p><strong>Telefone:</strong> {cliente.telefone}</p>
      <p><strong>Cidade:</strong> {cliente.cidade}</p>
    </div>
  )
}

export default ClienteCard
