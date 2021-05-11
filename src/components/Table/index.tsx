import React, { FC, useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { UserContext } from "../../context";

import Form from "../FormCode";
import Forms from "../Form";
import ModalDelete from "../ModalDelete";
import ModalEdit from "../ModalEdit";

import { Button } from "./styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const DenseTable: FC = () => {
  const {
    users,
    mostraForm,
    mostraModalDelete,
    mostraModalEdit,
    showModalEdit,
    showForm,
    mostraFormEdit,
    showModalDelete,
  } = useContext(UserContext);
  const classes = useStyles();

  const [codigo, setCodigo] = useState([]);

  interface CodigoPenais {
    dataCriacao: string;
    descricao: string;
    id: number;
    multa: number;
    nome: string;
    status: number;
    tempoPrisao: number;
  }

  useEffect(() => {
    api.get("codigopenal").then((response) => {
      setCodigo(response.data);
    });
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Data</TableCell>
              <TableCell align="right">Multa</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Tempo de Prisão</TableCell>
              <TableCell align="right">Adicionar</TableCell>
              <TableCell align="right">Alterar</TableCell>
              <TableCell align="right">Remover</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {codigo.map((code) => {
              return (
                <TableRow key={code["id"]}>
                  <TableCell component="th" scope="row">
                    {code["id"]}
                  </TableCell>
                  <TableCell align="right">{code["nome"]}</TableCell>
                  <TableCell align="right">{code["dataCriacao"]}</TableCell>
                  <TableCell align="right">{code["multa"]}</TableCell>
                  <TableCell align="right">{code["status"]}</TableCell>
                  <TableCell align="right">{code["tempoPrisao"]}</TableCell>
                  <TableCell align="right">
                    <Button onClick={() => showForm()}>Adicionar</Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button onClick={() => showModalEdit(code)}>alterar</Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button onClick={() => showModalDelete()}>Remover</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {mostraForm && <Form />}
      {mostraModalEdit && <ModalEdit />}
      {mostraModalDelete && <ModalDelete />}
      {mostraFormEdit && <Forms />}
    </>
  );
};

export default DenseTable;
