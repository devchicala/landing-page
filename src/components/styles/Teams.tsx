import styled from "styled-components";
import avatarImage1 from "../../images/staff1.jpg";
import avatarImage2 from "../../images/staff2.jpg";
import avatarImage3 from "../../images/staff3.jpg";
import avatarImage4 from "../../images/staff4.jpg";
import TextBanner from "../textbanner/TextBanner";

const Container = styled.div`
  padding: 5%;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 280px;
  display: flex;
  margin: 1%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 12px 13px 2px rgba(153, 153, 153, 0.33);
  -webkit-box-shadow: 19px 12px 13px 2px rgba(221, 198, 198, 0.33);
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MemberName = styled.div`
  color: ${(props) => props.theme.colors.primary};
`;

const TeamPosition = styled.div`
  color: ${(props) => props.theme.colors.textDark};
`;

const Teams = () => {
  return (
    <Container>
      <TextBanner title={"Wir union"} subtitle={"Our Team"}></TextBanner>
      <Wrapper>
        <Card>
          <CardImage src={avatarImage1} />
          <TextWrapper>
            <MemberName>Name</MemberName>
            <TeamPosition>Position</TeamPosition>
          </TextWrapper>
        </Card>
        <Card>
          <CardImage src={avatarImage2} />
          <TextWrapper>
            <MemberName>Name</MemberName>
            <TeamPosition>Position</TeamPosition>
          </TextWrapper>
        </Card>
        <Card>
          <CardImage src={avatarImage3} />
          <TextWrapper>
            <MemberName>Name</MemberName>
            <TeamPosition>Position</TeamPosition>
          </TextWrapper>
        </Card>
        <Card>
          <CardImage src={avatarImage4} />
          <TextWrapper>
            <MemberName>Name</MemberName>
            <TeamPosition>Position</TeamPosition>
          </TextWrapper>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Teams;
