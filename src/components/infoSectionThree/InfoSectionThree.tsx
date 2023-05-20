import React from "react";
import sectionThreeImage from "../../images/section3.png";
import { Container, Description, Header, Image, Left, List, ListItem, Right, Title, Wrapper } from "../styles/styled.Section";


const InfoSectionThree = () => {
  return (
    <Container>
      <Wrapper direction={'row-reverse'}>
        <Right>
          <Image src={sectionThreeImage} />
        </Right>
        <Left>
          <Title>Porquê nos escolher?</Title>
          <Header>Garantimos a melhor qualidade de serviço do mercado</Header>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            exercitationem quam cupiditate repudiandae tempora rem sed
            distinctio laborum blanditiis molestias, enim aliquid labore natus
            optio nostrum. Ratione libero nesciunt animi?
          </Description>
          <List>
            <ListItem>Assitência técnica</ListItem>
            <ListItem>Seguridade</ListItem>
            <ListItem>Control dos dados</ListItem>
            <ListItem>Qualidade</ListItem>
            <ListItem>Eficiência</ListItem>
            <ListItem>Transparência</ListItem>
          </List>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default InfoSectionThree;