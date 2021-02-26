import styled from "styled-components";

export const UpdateCollectionContainer = styled.div`
  margin: 50px 0;
`;

export const UpdateCollectionTitle = styled.h4`
  font-weight: normal;

  .collection__title {
    font-weight: bold;
  }
`;

export const UpdateCollectionForm = styled.form`
  position: relative;
`;

export const UpdateCollectionFormButton = styled.button`
  position: absolute;
  font-size: 18px;
  z-index: 1;
  top: 0;
  right: 0;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color:#2D8659;
  color: white;
  outline: none;

  &:hover {
    cursor: pointer;
    border: 2px solid  #206040;
    background-color: white;
    color:  #206040;
  }
`;