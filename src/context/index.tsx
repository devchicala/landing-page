import { useState, createContext, ReactNode, useEffect } from "react";

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

interface UserContextData {
  users: userObject;
  changeUser: (dados: any) => void;
  mostraModal: boolean;
  mostraForm: boolean;
  mostraFormEdit: boolean;
  mostraFormDelete: boolean;
  closeModal: () => void;
  showModal: () => void;
  closeForm: () => void;
  showForm: () => void;
  showFormEdit: () => void;
  closeFormEdit: () => void;
  showFormDelete: () => void;
  closeFormDelete: () => void;
  resetUser: () => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [users, setUser] = useState<userObject>(INITIAL_STATUS);
  const [mostraModal, setMostraModal] = useState(false);
  const [mostraForm, setMostraform] = useState(false);
  const [mostraFormEdit, setMostraFormEdit] = useState(false);
  const [mostraFormDelete, setMostraFormDelete] = useState(false);

  function changeUser(dados: any) {
    setUser(dados);
  }

  function showModal() {
    setMostraModal(true);
  }

  function closeModal() {
    setMostraModal(false);
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
        showModal,
        showForm,
        closeModal,
        closeForm,
        resetUser,
        showFormEdit,
        closeFormEdit,
        showFormDelete,
        closeFormDelete,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
