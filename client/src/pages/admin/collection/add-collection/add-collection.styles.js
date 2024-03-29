import styled from "styled-components";

export const AddCollectionForm = styled.form`
  position: relative;
`;

export const AddCollectionButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: #0066cc;
  color: wheat;
  outline: none;

  &:hover {
    cursor: pointer;
    border: 2px solid #0066cc;
    background-color: white;
    color: #0066cc;
    font-size: 18px;
  }
`;
