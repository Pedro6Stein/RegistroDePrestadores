export default function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content p-8 space-y-6">
      <h1 className="text-5xl font-bold">Configurção inical</h1>
      <h1 className="text-2xl font-black">Layout de teste de componetes</h1>
      <div className="flex items-center gap-3">
        <button className="btn btn-primary">Salvar</button>
        <button className="btn btn-outline">Cancelar</button>
        <span className="badge badge-success">Ativo</span>
      </div>

      <div className="card w-96 bg-base-200 shadow">
        <div className="card-body">
          <h2 className="card-title">Teste DaisyUI</h2>
          <p>Se isso estiver estilizado, DaisyUI tá ok. 🎉</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-secondary">Ação</button>
          </div>
        </div>
      </div>

      <div className="alert alert-info">
        <span>Alerta de demonstração</span>
      </div>
    </div>
  );
}
