import { FC, FormEvent, useEffect, useState } from "react";
import Header from "../Header";
import { Button } from "../Header/styles";
import {
  Form,
  FormGroup,
  Title,
  Label,
  Input,
  Message,
  Select,
} from "./styles";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import api from "../../services/api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })
);

const FormCode: FC = () => {
  const classes = useStyles();
  const [nome, setNome] = useState("");
  const [status, setStatus] = useState("");
  const [tempoPrisao, setTempoPrisao] = useState("");
  const [multa, setMulta] = useState("");
  const [dataCriacao, setDataCriacao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [statu, setStatu] = useState([]);

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
      tempoPrisao: 90,
    });

    alert("Cadastro realizado com sucesso!");
  }
  return (
    <>
      <Header />
      <Title>Formulário de código penal</Title>
      <Form onSubmit={handleSubmit} className={classes.container} noValidate>
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
          <Button onSubmit={handleSubmit}>Adicionar</Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default FormCode;
