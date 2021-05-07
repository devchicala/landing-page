import React, { useContext, useEffect, useState } from "react";
import { Container, Window, Title, Input, Screen, Button } from "./styles";

import { useHistory } from "react-router-dom";

import api from "../../services/api";
import { UserContext } from "../../context";
import { useToasts } from "react-toast-notifications";
const Login: React.FC = () => {
  const { changeUser } = useContext(UserContext);

  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");
  const [retorno, setRetorno] = useState([]);

  const history = useHistory();

  const { addToast } = useToasts();

  useEffect(() => {
    if (retorno.length) {
      const n = retorno[0]["nome"];
      const s = retorno[0]["senha"];

      if (nome === n && password === s) {
        addToast("Sucesso!", { appearance: "success" });
        history.push("/listCodes");
        changeUser(retorno[0]);
      } else {
        addToast("Falha!, verifar os dados", { appearance: "warning" });
      }
    } else {
      addToast("Nome do usuário não encontrado", { appearance: "error" });
    }
  }, [retorno]);

  async function login(name: string) {
    await api
      .get("/usuarios", {
        params: {
          nome: `${name}`,
        },
      })
      .then((response) => {
        setRetorno(response.data);
      });
  }

  return (
    <Container>
      <Window>
        <Screen>
          <Title>Login</Title>
          <Input
            placeholder="Nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <br />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button onClick={() => login(nome)}>Entrar</Button>
        </Screen>
      </Window>
    </Container>
  );
};

export default Login;
