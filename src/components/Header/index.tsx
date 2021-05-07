import React, { useContext, useState } from "react";

import { Container, Perfil, Session, Menu, Button } from "./styles";

import { Link } from "react-router-dom";
import { UserContext } from "../../context";
import Modal from "../Modal";

const Header: React.FC = ({}) => {
  const { users, mostraModal, closeModal, showModal } = useContext(UserContext);

  return (
    <Container>
      <Perfil>User - {users.nome}</Perfil>
      <Menu>
        {" "}
        <Link to="/listCodes">Lista dos códigos penais</Link>{" "}
      </Menu>
      <Session>
        <Button onClick={() => showModal()}>Sair</Button>
      </Session>
      {mostraModal && <Modal />}
    </Container>
  );
};

export default Header;
