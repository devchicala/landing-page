import styled from "styled-components";

export const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.9);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: #f5f5f5;
  width: 100%;
  max-width: 650px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;
  header {
    font-size: 1.75rem;
    font-weight: 600;
    color: #00f;
  }
  strong {
    font-size: 2.25rem;
    color: #faf;
    margin-bottom: 3.5rem;
  }
  p {
    font-size: 1.25rem;
    color: #faf;
    margin-top: 0.25rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 5rem;
  height: 2rem;
  color: #000;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.2rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background: transparent;
  border: 0;
`;

export const Form = styled.form`
  align-items: center;
`;

export const FormGroup = styled.div`
  color: palevioletred;
  display: flex;
  width: 700px;
  margin: 50px auto;
  justify-content: center;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
`;

export const Input = styled.input`
  padding: 0.5em;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
  height: 2rem;
`;

export const Select = styled.select`
  width: 5rem;
  height: 2rem;
  color: #000;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.2rem;
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
  font-size: 1rem;
`;

export const Title = styled.p`
  font-family: sans-serif;
  font-size: 1.5rem;
  color: #001;
  text-align: center;
  margin-bottom: 1.5rem;
  margin-top: 4rem;
`;

export const FormButton = styled.button`
  width: 5rem;
  height: 2rem;
  color: #000;
  border-radius: 0.5rem;
  border: none;
  font-size: 1.2rem;
`;
