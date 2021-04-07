import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const CollectionPageTitle = styled.h2`
  font-family: 'Playfair Display',serif;
  color: #638683;
  font-size: 32px;
  margin: 0 auto 30px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;

export const CollectionPageItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }

  @media (max-width: 380px) {
    grid-template-columns: 1fr;
  }
`;