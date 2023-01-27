import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    text-align: center;
  }
`;

export const Form = styled.form`
  max-width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 0;

  button {
    font-size: 18px;
  }
`;

export const Label = styled.label``;

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 200px;
  display: block;
`;
