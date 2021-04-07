import styled from "styled-components";

export const WishlistPageContainer = styled.section`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media (max-width: 820px) {
    width: 70%;
  }

  @media (max-width: 420px) {
    width: 90%;
  }
`;

export const WishlistPageHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid darkgrey;

  @media (max-width: 420px) {
    display: none;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 30%;

  &:last-child {
    width: 10%;
    margin-left: auto;
  }
`;