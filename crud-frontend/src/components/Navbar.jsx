export default function Navbar({ onOpen }) {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Colaborador</a>
      </div>

      <div className="navbar-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Pesquisar.."
            className="input input-bordered w-48 md:w-auto"
          />
        </div>
      </div>

      <div className="navbar-end">
        <button
          className="btn border-0 bg-blue-600 hover:bg-blue-700 text-white"
          onClick={onOpen}
        >
          Adicionar Colaborador
        </button>
      </div>
    </div>
  );
}
