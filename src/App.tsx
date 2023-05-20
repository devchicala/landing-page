import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import InfoBoxes from "./components/infoboxes/InfoBoxes";
import InfoSectionOne from "./components/infoSectionOne/InfoSectionOne";
import InfoSectionTwo from "./components/infoSectionTwo/InfoSectionTwo";
import InfoSectionThree from "./components/infoSectionThree/InfoSectionThree";
import Teams from "./components/styles/Teams";
import InfoSectionFour from "./components/infoSectionFour/InfoSectionFour";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.default};
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    *{
      font-family: 'Roboto', sans-serif;
    }
  }
`;

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const theme = {
  colors: {
    primary: "darkBlue",
    secondary: "tomato",
    light: "black",
    text: "snow",
    textDark: "gray",
    bgDefault: "white",
    bgLight: "aliceBlue",
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Navbar mode={undefined} setMode={undefined} />
          <Hero />
          <InfoBoxes />
          <InfoSectionOne />
          <InfoSectionTwo />
          <InfoSectionThree />
          <InfoSectionFour />
          <Teams />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
