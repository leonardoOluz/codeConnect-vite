import { useEffect, useState } from "react";
import "./App.css";
import BarraDePesquisa from "./components/BarraDePesquisa";
import Card from "./components/Card";
import Filtros from "./components/Filtros";
import Ordenacao from "./components/Ordenacao";
import Sidebar from "./components/Sidebar";

export interface IDadosApi {
  imagem_capa: string;
  titulo: string;
  resumo: string;
  tags: string[];
  linhas_de_codigo: number;
  compartilhamentos: number;
  comentarios: number;
  usuario: {
    imagem: string;
    nome: string;
  };
  conteudo_codigo: string;
  comentarios_postagem: object[];
}

function App() {
  const [dados, setDados] = useState<IDadosApi[]>([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((response) => response.json())
      .then((data) => setDados(data));
  }, []);
  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtros />
        <Ordenacao />
        <ul className="lista-cards">
          {dados
            ? dados.map((item, index) => (
                <li key={index}>
                  <Card {...item} />
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default App;
