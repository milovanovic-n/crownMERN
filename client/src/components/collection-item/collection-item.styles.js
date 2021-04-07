import styled from "styled-components";

export const CollectionItemContainer = styled.div`
  width: ${props => props.featured ? "100%" : "22vw"}; 
  display: flex;
  flex-direction: column;
  height: 360px;
  align-items: center;
  margin: ${props => props.featured ? "0 10px 30px" : ""};
  position: relative;

  &:hover {
    .item__options {
      display: flex;
    }
  }

  @media (max-width: 800px) {
    width: 40vw;
  }

  @media (max-width: 600px) {
    height: 280px;
  }

  @media (max-width: 380px) {
    width: 70vw;
  }

  @media (min-width: 1200px) {
    height: 400px;
  }
`;

export const CollectionItemImage = styled.div`
  width: 100%;
  height: 95%;
  background-image: url(${props => props.imageUrl ? props.imageUrl : ""});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: ${props => props.featured ? "" : "5px"};

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 800px) {
    opacity: unset;
  }
`;

export const CollectionItemFooter = styled.div`
  width: 100%;
  height: 5%;
  display: ${props => props.featured ? "none" : "flex"};
  justify-content: space-between;
  font-size: 18px;

  .name {
    width: 90%;
    margin-bottom: 15px;
  }

  .price {
    width: 10%;
  }
`;

export const CollectionItemOptions = styled.div`
  font-family: 'Raleway', sans-serif;
  display: none;
  width: 100%;
  height: 45px;
  background-color: black;
  color: white;
  position: absolute;
  bottom: ${props => props.featured ? "5%" : "6%"};

  @media (max-width: 600px) {
    display: flex;
  }

  .add__to__cart {
    width: 60%;
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
    width: 20%;
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
    border-right: 1px solid #232323;
    border-left: 1px solid #232323;
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