import { FC, FormEvent, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useToasts } from "react-toast-notifications";

import { UserContext } from "../../context";
import api from "../../services/api";

import { Container, Overlay, CloseButton, FormButton, Form,
  FormGroup,
  Title,
  Label,
  Input,
  Message,
  Select, } from "./styles";

  const useStyles = makeStyles((theme) => ({
    container: {
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }))

const Forms: FC = () => {
  const { closeForm } = useContext(UserContext);
  const classes = useStyles();
  
  const history = useHistory();
  const [nome, setNome] = useState("");
  const [status, setStatus] = useState("");
  const [tempoPrisao, setTempoPrisao] = useState("");
  const [multa, setMulta] = useState("");
  const [dataCriacao, setDataCriacao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [statu, setStatu] = useState([]);

  const { addToast } = useToasts();

  useEffect(() => {
    api.get("status").then((response) => {
      setStatu(response.data);
    });
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const data = new FormData();

    data.append("nome", nome);
    data.append("status", status);
    data.append("tempoPrisao", String(tempoPrisao));
    data.append("multa", String(multa));
    data.append("dataCriacao", dataCriacao);
    data.append("descricao", descricao);

    await api.post("codigopenal", {
      nome: "Falsa Identidade",
      descricao:
        "Se passar por um advogado certificado ou funcionário do governo (incluindo policiais, membros do Departamento de Justiça, etc.)",
      multa: 0,
    })
    .then((response) => {
      history.push("/listCodes");
      addToast("Cadastro realizado com sucesso!", { appearance: "success" });
    })
    .catch()
    {
      addToast("Nao foi possivel salvar!", { appearance: "warning" });
    }

  }


  return (
    <Overlay>
      <Container>      
      <Form onSubmit={handleSubmit} className={classes.container} noValidate>
      <Title>Formulário de código penal</Title>
        <FormGroup>
          <div>
            <Label htmlFor="label">Nome</Label>
            <Input
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <Message>Nome incorrecto</Message>
          </div>
          &nbsp;
          <div>
            <Label htmlFor="label">Status</Label>
            <Select value={status} onChange={(e) => setStatus(e.target.value)}>
              {statu.map((status) => {
                return (
                  <option value={status["descricao"]}>
                    {status["descricao"]}
                  </option>
                );
              })}
            </Select>
            <Message>Status incorrecto</Message>
          </div>
          &nbsp;
          <div>
            <Label htmlFor="label">Data</Label>            
            <TextField
              id="date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              value={dataCriacao}
              onChange={(e) => setDataCriacao(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </FormGroup>
        <FormGroup>
          <div>
            <Label htmlFor="label">Multa</Label>
            <Input
              id="multa"
              value={multa}
              onChange={(e) => setMulta(e.target.value)}
            />
            <Message>Multa incorrecto</Message>
          </div>
          &nbsp;
          <div>
            <Label htmlFor="label">Tempo de Prisão</Label>
            <Input
              id="tempoPrisao"
              value={tempoPrisao}
              onChange={(e) => setTempoPrisao(e.target.value)}
            />
            <Message>Tempo de Prisão incorrecto</Message>
          </div>
          &nbsp;
          <div>
            <Label htmlFor="label">Descrição</Label>
            <Input
              id="descricao"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            <Message>Descrição incorrecto</Message>
          </div>
        </FormGroup>
        <FormGroup>
          <FormButton onSubmit={handleSubmit}>Adicionar</FormButton>
        </FormGroup>
      </Form>
      <CloseButton
          type="button"
          onClick={() => {
            closeForm();
          }}
        >
          <img src="./icons/close.svg" alt="close" />
        </CloseButton>
      </Container>
    </Overlay>
  );
};

export default Forms;
