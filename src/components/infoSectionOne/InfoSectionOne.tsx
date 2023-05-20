import React from "react";
import sectionOneImage from "../../images/section1.png";
import { Container, Description, Header, Image, Left, List, ListItem, Right, Title, Wrapper } from "../styles/styled.Section";


const InfoSectionOne = () => {
  return (
    <Container>
      <Wrapper  direction={'row'}>
        <Right>
          <Image src={sectionOneImage} />
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
          </List>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default InfoSectionOne;
