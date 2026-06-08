import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span>Client</span>Hub
      </div>

      <nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/clientes">Clientes</NavLink>
        <NavLink to="/novo-cliente">Novo Cliente</NavLink>
        <NavLink to="/atendimentos">Atendimentos</NavLink>
      </nav>
    </header>
  )
}

export default Header
