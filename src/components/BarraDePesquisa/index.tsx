import { useEffect, useState } from "react";
import "./styles.css";

export default function BarraDePesquisa() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  useEffect(() => {
    console.log(termoPesquisa);
  }, [termoPesquisa]);
  return (
    <input
      placeholder="Digite o que você procura"
      type="search"
      className="barra-pesquisa"
      value={termoPesquisa}
      onChange={(e) => setTermoPesquisa(e.target.value)}
    />
  );
}
