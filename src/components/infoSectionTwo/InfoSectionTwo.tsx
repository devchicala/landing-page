import React from "react";
import styled from "styled-components";
import sectionImage1 from "../../images/laptopDark.jpg";

export const Container = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: ${({ Height }) => Height};
  background-image: url(${({ sectionImage }) => sectionImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  padding: 2%;
`;

const Description = styled.p`
  color: white;
  width: 40%;
  font-weight: lighter;
  font-size: 25px;
`;

const InfoSectionTwo = () => {
  return (
    <Container sectionImage={sectionImage1}>
      <TextWrapper>
        <Title>Fazemos todos trabalho de TI</Title>
        <Description>
          Disponibilizamos materias de apoio e tudo que for necessário para
          capacitação de todo pessoal
        </Description>
        <Description>
          Aplicamos as melhores e maiores técnicas e metodoligias disponíveis no
          mercado na execução das actividades.
        </Description>
      </TextWrapper>
    </Container>
  );
};

export default InfoSectionTwo;
