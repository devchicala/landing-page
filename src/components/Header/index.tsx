import React, { useContext} from "react";

import { Container, Perfil, Session, Menu, Button } from "./styles";

import { Link } from "react-router-dom";
import { UserContext } from "../../context";
import Modal from "../Modal";

const Header: React.FC = ({}) => {
  const { users, mostraModal, showModal } = useContext(UserContext);

  return (
    <Container>
      <Perfil>User - {users.nome}</Perfil>
      <Session>
        <Button onClick={() => showModal()}>Sair</Button>
      </Session>
      {mostraModal && <Modal />}
    </Container>
  );
};

export default Header;
