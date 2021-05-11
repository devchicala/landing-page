import { FC, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context";

import { Container, Overlay, CloseButton, Button } from "./styles";

const ModalDelete: FC = () => {
  const { closeFormDelete, resetUser } = useContext(UserContext);
  const history = useHistory();
  return (
    <Overlay>
      <Container>
        <header>Apagar dados</header>
        <strong>Deseja apagar o registo?</strong> <br /> <br />
        <Button onClick={() => {resetUser();history.push("/");}} type="button">Sim</Button>&nbsp;&nbsp;
        <Button onClick={() => {closeFormDelete()}} type="button">Não</Button>
        <CloseButton type="button" onClick={() => {closeFormDelete()}}>
          <img src="./icons/close.svg" alt="close" />
        </CloseButton>
      </Container>
    </Overlay>
  );
};

export default ModalDelete;
