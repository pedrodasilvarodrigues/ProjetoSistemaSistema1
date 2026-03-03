import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Clientes } from './Pages/Clientes';
import { Produtos } from './Pages/Produtos/';

import { Toaster } from 'sonner';
import { Vendas } from './Pages/Vendas';
<<<<<<< HEAD
import { Fornecedor } from './Pages/Fornecedor/CadastroFornecedor';
=======
import { Fornecedor } from './Pages/Fornecedor/indexFornecedor';
>>>>>>> e6d94b9242c2677c751cfcd0c494c8b42dd7071c

export default function App() {
  return (
    <BrowserRouter>
      <Toaster richColors />
      <nav className="bg-green-800 p-4 text-white flex gap-4">
        <Link to="/" className="hover:underline">Clientes</Link>
        <Link to="/fornecedores" className="hover:underline">Fornecedores</Link>
        <Link to="/produtos" className="hover:underline">Produtos/Estoque</Link>
           <Link to="/fornecedores" className="hover:text-green-200 transition-colors">Fornecedores</Link>
        <Link to="/vendas" className="hover:text-green-200 transition-colors">Vendas/Financeiro</Link>
     
        
      </nav>

      <Routes>
        <Route path="/" element={<Clientes />} />
        <Route path="/fornecedores" element={<Fornecedor />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/fornecedores" element={<Fornecedor />} />
      </Routes>
    </BrowserRouter>
  );
}