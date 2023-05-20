import React from "react";
import { Container } from "../infoSectionTwo/InfoSectionTwo";
import sectionImage4 from "../../images/bg2.jpg";
import styled from "styled-components";

const Card = styled.div`
  width: 250px;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Number = styled.div`
  font-weight: bold;
  font-size: 50px;
  color: ${(props) => props.theme.colors.text};
`;

const Subtitle = styled.div`
  font-weight: bold;
  font-style: 50px;
  color: white;
`;

const InfoSectionFour = () => {
  return (
    <Container sectionImage={sectionImage4} Height={"300px"}>
      <Card>
        <CardContent>
          <Number>100+</Number>
          <Subtitle>Subscribers</Subtitle>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Number>100+</Number>
          <Subtitle>Subscribers</Subtitle>
        </CardContent>
      </Card>{" "}
      <Card>
        <CardContent>
          <Number>80K+</Number>
          <Subtitle>Subscribers</Subtitle>
        </CardContent>
      </Card>{" "}
      <Card>
        <CardContent>
          <Number>9000+</Number>
          <Subtitle>Subscribers</Subtitle>
        </CardContent>
      </Card>
    </Container>
  );
};

export default InfoSectionFour;
