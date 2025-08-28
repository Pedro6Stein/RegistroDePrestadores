export default function Navbar(onOpen) {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">Colaborador</a>
            </div>

            <div className="navbar-center">
                <div className="form-control">
                    <input type="text" placeholder="Pesquisar.." className="input input-bordered w-48 md:w-auto"></input>
                </div>
            </div>

            <button className="navbar-end"  onOpen>
                <a className="btn border-0 bg-blue-600 hover:bg-blue-700 text-white">
                    Adicionar
                </a>
            </button>
        </div>
    );
}