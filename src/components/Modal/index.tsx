import { FC, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context";

import { Container, Overlay, CloseButton, Button } from "./styles";

const Modal: FC = () => {
  const { closeModal, resetUser } = useContext(UserContext);
  const history = useHistory();
  return (
    <Overlay>
      <Container>
        <strong>Deseja Terminar a Sessão?</strong> <br /> <br />
        <Button
          onClick={() => {
            resetUser();
            history.push("/");
            closeModal();
          }}
          type="button"
        >
          Sim
        </Button>
        &nbsp;&nbsp;
        <Button
          onClick={() => {
            closeModal();
          }}
          type="button"
        >
          Não
        </Button>
        <CloseButton
          type="button"
          onClick={() => {
            closeModal();
          }}
        >
          <img src="./icons/close.svg" alt="close" />
        </CloseButton>
      </Container>
    </Overlay>
  );
};

export default Modal;
