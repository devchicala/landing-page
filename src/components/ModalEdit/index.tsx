import { FC, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context";

import { Container, Overlay, CloseButton, Button } from "./styles";

const ModalEdit: FC = () => {
  const { closeFormEdit, resetUser } = useContext(UserContext);
  const history = useHistory();
  return (
    <Overlay>
      <Container>
        <header>Alterar dados</header>
        <strong>Deseja alterar o registo?</strong> <br /> <br />
        <Button onClick={() => {resetUser();history.push("/");}} type="button">Sim</Button>&nbsp;&nbsp;
        <Button onClick={() => {closeFormEdit()}} type="button">Não</Button>
        <CloseButton type="button" onClick={() => {closeFormEdit()}}>
          <img src="./icons/close.svg" alt="close" />
        </CloseButton>
      </Container>
    </Overlay>
  );
};

export default ModalEdit;
