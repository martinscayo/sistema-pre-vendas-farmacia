import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Clientes from './pages/Clientes'
import NovoCliente from './pages/NovoCliente'
import Atendimentos from './pages/Atendimentos'

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/novo-cliente" element={<NovoCliente />} />
          <Route path="/atendimentos" element={<Atendimentos />} />
        </Routes>
      </main>
    </>
  )
}

export default App
