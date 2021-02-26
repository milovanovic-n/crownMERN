import styled from "styled-components";

export const CollectionItemAdminContainer = styled.div`
  margin: 10px;
  width: 220px;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`;

export const CollectionItemAdminImage = styled.div`
  width: 100%;
  height: 95%;
  background-image: url(${props => props.imageUrl ? props.imageUrl : ""});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  margin-bottom: 5px;
`;

export const CollectionItemAdminOptions = styled.div`
  position: absolute;
  bottom: 6%;
  display: flex;
  width: 100%;
  height: 50px;
  background-color: black;
  z-index: 2;

  .edit {
    color: #638683;
    &:hover {
      color: #80adaa;
    }
  }

  .delete {
    color: #b3003b;
    &:hover {
      color: #e8004d;
    }
  }
`;

export const CollectionItemAdminOption = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  color: white;

  &:hover {
    cursor: pointer;
  }

  i {
    margin-left: 10px;
  }
`;

export const CollectionItemAdminFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
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