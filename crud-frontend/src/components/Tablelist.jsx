export default function TableList() {
    const funcionarios = [
        { id: 1, nome: "Pedro Stein", email: "zodtewill@gmail.com", cargo: "Desenvolvedor Júnior", valorHora: 150, isAtivo: true },
        { id: 2, nome: "Pedro Stein 2", email: "zodtewill@gmail.com", cargo: "Desenvolvedor Pleno", valorHora: 350, isAtivo: false },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>E-mail</th>
                        <th>Valor/h</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {funcionarios.map((f) => (
                        <tr key={f.id} className="hover">
                            <th scope="row">{f.id}</th>
                            <td>{f.nome}</td>
                            <td>{f.cargo}</td>
                            <td>
                                <a className="link" href={`mailto:${f.email}`}>{f.email}</a>
                            </td>
                            <td>{f.valorHora.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
                            <td>
                                <span className={`badge ${f.isAtivo ? "badge-success" : "badge-error"}`}>
                                    {f.isAtivo ? "Ativo" : "Inativo"}
                                </span>
                            </td>
                            <td className="flex gap-2">
                                <button className="btn btn-active btn-sm">Atualizar</button>
                                <button className="btn btn-ghost text-error hover:bg-error/10 btn-sm">Deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}