import styled from "styled-components";

export const Card = styled.div`
  width: 350px;
  margin: 10px 10px;
  box-shadow: 5px 12px 13px 2px rgba(153, 153, 153, 0.33);
  -webkit-box-shadow: 5px 12px 13px 2px rgba(221, 198, 198, 0.33);
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.bgLight} 50%,
    ${(props) => props.theme.colors.bgDefault} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    color: snow;
    background-position: left bottom;
    cursor: pointer;
  }
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
`;

export const Description = styled.div`
  color: ${(props) => props.theme.colors.textDark};
  font-size: 15px;
  text-align: center;
`;

export const Button = styled.a`
  color: red;
  font-weight: bold;
  margin-top: 30px;
  cursor: pointer;
`;
