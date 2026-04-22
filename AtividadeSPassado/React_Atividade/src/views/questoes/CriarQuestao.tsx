
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

export default function CriarQuestao() {
  const getInputClass = () => {
    return "form-control app-label mt-2";
  };

  return (
    <div className="display">
      <div className="card animated fadeInDown">
        <h2>Nova Pergunta</h2>
        <form>
          {}
          <div className="mb-2 mt-4">
            <label htmlFor="submoduleId" className="app-label">ID do Submódulo:</label>
            <input id="submoduleId" name="submoduleId" type="number" className={getInputClass()} />
          </div>

          {}
          <div className="mb-2 mt-4">
            <label htmlFor="questionText" className="app-label">Texto da Pergunta:</label>
            <textarea id="questionText" name="questionText" className={getInputClass()} rows={3} />
          </div>

          {}
          <div className="mb-2 mt-4">
            <label htmlFor="options" className="app-label">Opções (JSON):</label>
            <textarea 
              id="options" 
              name="options" 
              className={getInputClass()} 
              rows={3} 
              placeholder='Ex: {"a": "Opção 1", "b": "Opção 2"}'
            />
          </div>

          {}
          <div className="mb-2 mt-4">
            <label htmlFor="correctAnswer" className="app-label">Resposta Correta (ID):</label>
            <input id="correctAnswer" name="correctAnswer" type="number" className={getInputClass()} />
          </div>

          <div className="btn-content mt-4">
            <button type="submit" className="btn btn-success"><span className="btn-icon"><i><FaSave /></i></span> Salvar</button>
            <button type="button" className="btn btn-cancel"><span className="btn-icon"><i><MdCancel /></i></span> Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}