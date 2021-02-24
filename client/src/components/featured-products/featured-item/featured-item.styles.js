import styled from "styled-components";

export const FeaturedItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 380px;
  width: 100%;
  margin: 0 10px 30px;
  position: relative;

  @media (min-width: 992px) {
    height: 450px;
  }

  &:hover {
    .item__options {
      display: flex;
    }
  }
`;

export const ItemImageContainer = styled.div`
  width: 100%;
  height: 85%;
  background-image: url(${props => props.imageUrl ? props.imageUrl : ""});
  filter: grayscale(0);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ItemOptionsContainer = styled.div`
  font-family: 'Raleway', sans-serif;
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #638683;
  color: white;
  position: absolute;
  bottom: 12%;
  display: none;

  @media (max-width: 600px) {
    display: flex;
  }

  .add__to__cart {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 10px;

    &:hover {
      background-color: #56706e;
      cursor: pointer;
    }

    .add__to__cart__icon {
      width: 16px;
      margin-right: 10px;
      color: white;
    }
  }

  .add__to__whishlist, .quick__view {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;

    &:hover {
      background-color: #56706e;
      cursor: pointer;
    }
  }

  .add__to__whishlist {
    border-right: 1px solid #56706e;
    border-left: 1px solid #56706e;
  }
`;

export const ItemNameContainer = styled.h4`
  margin: 0;
  height: 5%;
  padding-top: 3%;
  font-family: 'Raleway', sans-serif;
  font-size: 13px;
  font-weight: 300;
  color: white;
  text-transform: uppercase;
  align-self: flex-start;
`;

export const ItemPriceContainer = styled.div`
  margin: 0;
  height: 5%;
  padding-top: 2%;
  align-self: flex-start;
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: white;
`;