import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media (max-width: 800px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 85%;
  }

  button {
    margin-left: auto;
    margin-top: 50px;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: ${props => props.lastChild ? `8%` : `23%`};
`; 

export const TotalPriceContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media (max-width: 480px) {
    font-size: 28px;
  } 
`;

export const WarningTextContainer = styled.p`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;

  @media (max-width: 480px) {
    font-size: 18px;
  } 
`;