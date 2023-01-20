import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  margin-top: 5px;
  &:focus {
    border-color: blue;
    background-color: white;
  }
`;

export const Button = styled.button`
  font-size: 16px;
  background-color: #c0c0c0;
  border-radius: 5px;
  border: 1px solid gray;
`;
