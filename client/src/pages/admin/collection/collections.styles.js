import styled, { css } from "styled-components";

const EditOptionStyles = css`
  color: #80adaa;
  border-right: 1px solid #383838;

  &:hover {
    cursor: pointer;
    color: #638683;
  }
`;

const DeleteOptionStyles = css`
  color: #b30941;

  &:hover {
    cursor: pointer;
    color: #8f0130;
  }
`;


export const CollectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CollectionItemsContainer = styled.div`
  width: 100%;
  margin: 50px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const CollectionItemContainer = styled.div`
  width: 31%;
  margin: 1%;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  position: relative;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const CollectionItemTitle = styled.h4`
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-size: 24px;
  text-transform: uppercase;
`;

export const CollectionOptions = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  background-color: black;
`; 

export const CollectionOption = styled.div`
  width: 50%;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.optionEdit ? EditOptionStyles : DeleteOptionStyles}

  i {
    margin-left: 5px;
  }
`;