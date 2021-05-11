import { useState, createContext, ReactNode, useEffect } from "react";
import Forms from "../components/Form";

const INITIAL_STATUS = {
  id: "",
  nome: "",
  senha: "",
};

interface userObject {
  id: string;
  nome: string;
  senha: string;
}

interface CodigoPenais {
  id: number;
  nome: string;
  descricao: string;
  dataCriacao: string;
  multa: number;
  tempoPrisao: number;
  status: number;
}

interface UserContextData {
  users: userObject;
  changeUser: (dados: any) => void;
  mostraModal: boolean;
  mostraForm: boolean;
  mostraFormEdit: boolean;
  mostraFormDelete: boolean;
  mostraModalEdit: boolean;
  mostraModalDelete: boolean;
  closeModal: () => void;
  showModal: () => void;
  closeForm: () => void;
  showForm: () => void;
  showFormEdit: () => void;
  closeFormEdit: () => void;
  showFormDelete: () => void;
  closeFormDelete: () => void;
  resetUser: () => void;
  codigoPenal: any;
  showModalEdit: (codigo: CodigoPenais) => void;
  closeModalEdit: () => void;
  showModalDelete: () => void;
  closeModalDelete: () => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [users, setUser] = useState<userObject>(INITIAL_STATUS);
  const [mostraModal, setMostraModal] = useState(false);
  const [mostraModalEdit, setMostraModalEdit] = useState(false);
  const [mostraModalDelete, setMostraModalDelete] = useState(false);
  const [mostraForm, setMostraform] = useState(false);
  const [mostraFormEdit, setMostraFormEdit] = useState(false);
  const [mostraFormDelete, setMostraFormDelete] = useState(false);
  const [codigoPenal, setCodigoPenal] = useState<CodigoPenais>();

  function changeUser(dados: any) {
    setUser(dados);
  }

  function showModal() {
    setMostraModal(true);
  }

  function closeModal() {
    setMostraModal(false);
  }

  function showModalEdit(codigo: CodigoPenais) {
    setMostraModalEdit(true);
    setCodigoPenal(codigo);
  }

  function closeModalEdit() {
    setMostraModalEdit(false);
  }

  function showModalDelete() {
    setMostraModalDelete(true);
  }

  function closeModalDelete() {
    setMostraModalDelete(false);
  }

  function showForm() {
    setMostraform(true);
  }

  function closeForm() {
    setMostraform(false);
  }

  function showFormEdit() {
    setMostraFormEdit(true);
  }
  function closeFormEdit() {
    setMostraFormEdit(false);
  }

  function showFormDelete() {
    setMostraFormDelete(true);
  }

  function closeFormDelete() {
    setMostraFormDelete(false);
  }
  function resetUser() {
    setUser(INITIAL_STATUS);
  }

  return (
    <UserContext.Provider
      value={{
        users,
        changeUser,
        mostraModal,
        mostraForm,
        mostraFormEdit,
        mostraFormDelete,
        mostraModalEdit,
        mostraModalDelete,
        showModal,
        showForm,
        closeModal,
        closeForm,
        resetUser,
        showFormEdit,
        closeFormEdit,
        showFormDelete,
        closeFormDelete,
        codigoPenal,
        showModalEdit,
        closeModalEdit,
        showModalDelete,
        closeModalDelete,
      }}
    >
      {children}      
    </UserContext.Provider>
  );
}
