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
  closeModal: () => void;
  showModal: () => void;
  resetUser: () => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
  const [users, setUser] = useState<userObject>(INITIAL_STATUS);
  const [mostraModal, setMostraModal] = useState(false);

  function changeUser(dados: any) {
    setUser(dados);
  }

  function showModal() {
    setMostraModal(true);
  }

  function closeModal() {
    setMostraModal(false);
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
        closeModal,
        showModal,
        resetUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
