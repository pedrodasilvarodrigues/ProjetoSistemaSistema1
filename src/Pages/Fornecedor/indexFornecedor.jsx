import { useEffect, useState } from 'react';
import { api } from '../../Services/api';

export function Fornecedor() {
  const [fornecedores, setFornecedores] = useState([]);

  useEffect(() => {
    api.get('/fornecedores')
      .then((res) => {
        // AQUI ESTAVA O ERRO: Agora está setFornecedores e não setProdutos
        setFornecedores(res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar fornecedores:", err);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-green-800">Estoque de Fornecedores - AGROVIDA</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fornecedores.length > 0 ? (
          fornecedores.map((fornecedor) => (
            <div key={fornecedor.id} className="p-4 border rounded-lg shadow-md bg-white border-l-8 border-l-green-600">
              <h3 className="font-bold text-lg text-gray-700">{fornecedor.nome}</h3>
              <p className="text-gray-500">Cidade: {fornecedor.cidade}</p>
              
              <div className="mt-4 flex justify-between items-center">
                <span className={`text-xl font-black ${fornecedor.estoque < 10 ? 'text-red-600' : 'text-green-700'}`}>
                
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">Carregando estoque do Fabricio...</p>
        )}
      </div>
    </div>
  );
}