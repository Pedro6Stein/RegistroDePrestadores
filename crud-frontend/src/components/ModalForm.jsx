// ModalForm.jsx
export default function ModalForm({ modal }) {
    const { isOpen, onClose, mode, onSubmit } = modal;

    if (!isOpen) return null;

    return (
        <div className="modal modal-open">
            <div className="modal-box">
                <h3 className="font-bold text-lg">
                    {mode === "edit" ? "Editar Colaborador" : "Adicionar Colaborador"}
                </h3>

                <p className="py-4 text-sm text-base-content/70">
                    Preencha os dados e clique em {mode === "edit" ? "Salvar alterações" : "Adicionar"}.
                </p>

                <div className="modal-action">
                    <button className="btn btn-ghost" onClick={onClose}>
                        Cancelar
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={onSubmit}
                    >
                        {mode === "edit" ? "Salvar alterações" : "Adicionar"}
                    </button>
                </div>
            </div>

            <div className="modal-backdrop bg-black/40" onClick={onClose} />
        </div>
    );
}