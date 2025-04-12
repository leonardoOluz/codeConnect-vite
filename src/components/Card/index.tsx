import "./styles.css";
import Code from "./assets/code.svg";
import Share from "./assets/share.svg";
import Chat from "./assets/chat.svg";
import { IDadosApi } from "../../App";

export default function Card(props: IDadosApi) {
  const {
    imagem_capa,
    comentarios,
    titulo,
    linhas_de_codigo,
    compartilhamentos,
    resumo,
    usuario,
  } = props;
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={imagem_capa} alt="imagem do post" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>
        <div className="conteudo__rodape">
          <ul>
            <li>
              <img src={Code} alt="codigos" />
              {linhas_de_codigo}
            </li>
            <li>
              <img src={Share} alt="compartilhamento" />
              {compartilhamentos}
            </li>
            <li>
              <img src={Chat} alt="Comentarios" />
              {comentarios}
            </li>
          </ul>
          <div className="rodape__usuario">
            <img src={usuario.imagem} alt="imagem do usuario" />
            {usuario.nome}
          </div>
        </div>
      </div>
    </article>
  );
}
