import { useState } from "react";
import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";
import Tablelist from "./components/Tablelist";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");

  const handleOpen = (mode) => {
    setModalMode(mode);
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  const handleSubmit = () => {
    if (modalMode === "add") console.log("O modal foi adicionado");
    else console.log("O modal foi alterado");
    setIsOpen(false);
  };

  return (
    <>
      <Navbar onOpen={() => handleOpen("add")} />
      <Tablelist />
      <ModalForm modal={{
        isOpen,
        onClose: handleClose,
        mode: modalMode,
        onSubmit: handleSubmit,
      }} />

    </>
  );
}
