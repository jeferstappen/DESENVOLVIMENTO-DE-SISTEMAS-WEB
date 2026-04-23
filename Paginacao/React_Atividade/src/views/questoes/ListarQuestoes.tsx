
import axios from "axios";
import { useEffect, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Question } from "../../type/Question"; 

const buscarTodas = async (): Promise<Question[] | null> => {
  try {
    const response = await axios.get("http://localhost:8000/rest/sistema/questoes/listar");
    return response.data.dados;
  } catch (error) { console.log(error); return null; }
};

export default function ListarQuestoes() {
  const [models, setModels] = useState<Question[] | null>(null);

  useEffect(() => {
    async function getData() {
      const data = await buscarTodas();
      if (data) setModels(data);
    }
    getData();
  }, []);

  return (
    <div className="display">
      <div className="card animated fadeInDown">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Lista de Perguntas</h2>
          <Link to="/sistema/questoes/criar" className="btn btn-add">
            <span className="btn-icon"><i><FaPlus /></i></span> Novo
          </Link>
        </div>
        <br />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Submódulo</th>
              <th>Pergunta</th>
              <th className="center actions">Ação</th>
            </tr>
          </thead>
          <tbody>
            {models?.map((model) => (
              <tr key={model.QUESTION_ID}>
                <td>{model.QUESTION_ID}</td>
                <td>{model.SUBMODULE_ID}</td>
                <td>{model.QUESTION_TEXT}</td>
                <td className="center actions">
                  <Link to="#" className="btn btn-edit"><i><BsPencilSquare /></i></Link>
                  <Link to="#" className="btn btn-delete"><i><FaRegTrashAlt /></i></Link>
                  <Link to="#" className="btn btn-info"><i><FaMagnifyingGlass /></i></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}