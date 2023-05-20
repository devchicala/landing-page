import React from "react";
import TextBanner from "../textbanner/TextBanner";
import styled from "styled-components";
import {
  Card,
  CardContent,
  CardTitle,
  Button,
  Description,
} from "../styles/stuled.Card";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const InfoBoxes = () => {
  return (
    <div>
      <TextBanner
        title={"O que oferecemos"}
        subtitle={"Nossos serviços"}
      ></TextBanner>
      <Container>
        <Card>
          <CardContent>
            <CardTitle>Websites</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              labore fuga aperiam magnam quia, odio doloremque esse quae soluta
              eaque cumque nihil sunt nam voluptas quasi recusandae repellat
              delectus eveniet!
            </Description>
            <Button>Ler mais...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Android App</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              labore fuga aperiam magnam quia, odio doloremque esse quae soluta
              eaque cumque nihil sunt nam voluptas quasi recusandae repellat
              delectus eveniet!
            </Description>
            <Button>Ler mais...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Ios App</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              labore fuga aperiam magnam quia, odio doloremque esse quae soluta
              eaque cumque nihil sunt nam voluptas quasi recusandae repellat
              delectus eveniet!
            </Description>
            <Button>Ler mais...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Windows</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              labore fuga aperiam magnam quia, odio doloremque esse quae soluta
              eaque cumque nihil sunt nam voluptas quasi recusandae repellat
              delectus eveniet!
            </Description>
            <Button>Ler mais...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Flutter</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              labore fuga aperiam magnam quia, odio doloremque esse quae soluta
              eaque cumque nihil sunt nam voluptas quasi recusandae repellat
              delectus eveniet!
            </Description>
            <Button>Ler mais...</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>React Native</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              labore fuga aperiam magnam quia, odio doloremque esse quae soluta
              eaque cumque nihil sunt nam voluptas quasi recusandae repellat
              delectus eveniet!
            </Description>
            <Button>Ler mais...</Button>
          </CardContent>
        </Card>
      </Container>

    </div>
  );
};

export default InfoBoxes;
