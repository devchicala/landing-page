import { FC, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context";

import { Container, Overlay, CloseButton, Button } from "./styles";

const ModalEdit: FC = () => {
  const { closeFormEdit, closeModalEdit, showFormEdit, resetUser } = useContext(UserContext);
  const history = useHistory();
  return (
    <Overlay>
      <Container>
        <header>Alterar dados</header>
        <strong>Deseja alterar o registo?</strong> <br /> <br />
        <Button onClick={() => {showFormEdit();closeModalEdit()}} type="button">Sim</Button>&nbsp;&nbsp;
        <Button onClick={() => {closeModalEdit()}} type="button">Não</Button>
        <CloseButton type="button" onClick={() => {closeModalEdit()}}>
          <img src="./icons/close.svg" alt="close" />
        </CloseButton>
      </Container>
    </Overlay>
  );
};

export default ModalEdit;
