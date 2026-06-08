import { Link } from 'react-router-dom'

function Home() {
  return (
    <section>
      <div className="page-title">
        <p>FarmaFlow</p>
        <h1>Sistema de Pré-Vendas para Farmácia</h1>
      </div>

      <div className="hero">
        <div>
          <p className="tag">Controle simples e organizado</p>

          <h1>
            Acompanhe clientes, pedidos e atendimentos da farmácia em uma única tela.
          </h1>

          <p className="hero-text">
            O FarmaFlow ajuda a organizar o processo de pré-venda, facilitando o
            cadastro de clientes, o acompanhamento dos pedidos e o controle dos
            atendimentos realizados.
          </p>

          <div className="hero-actions">
            <Link className="btn primary" to="/clientes">
              Ver Clientes
            </Link>

            <Link className="btn secondary" to="/atendimentos">
              Ver Pedidos
            </Link>
          </div>
        </div>

        <div className="summary-box">
          <h2>Resumo Operacional</h2>

          <ul>
            <li>Clientes cadastrados e organizados</li>
            <li>Pedidos acompanhados por status</li>
            <li>Produtos vinculados aos atendimentos</li>
            <li>Interface simples para uso no dia a dia</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Home