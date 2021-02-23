import styled from "styled-components";

export const CarouselItemContainer = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.imageUrl ? props.imageUrl : ""});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 1200px) {
    height: 85vh;
  }
`;

export const CarouselItemDescription = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;

export const DescriptionSubtitle = styled.div`
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  color: #648683;
  margin: 0;
  font-weight: 200;

  @media (min-width: 480px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 992px) {
    font-size: 24px;
  }
`;

export const DescriptionTitle = styled.div`
  margin: 0;
  font-family: 'Playfair Display', serif;
  color: white;
  text-transform: uppercase;
  font-size: 20px;

  @media (min-width: 480px) {
    font-size: 32px;
  }

  @media (min-width: 768px) {
    font-size: 44px;
  }

  @media (min-width: 992px) {
    font-size: 48px;
  }
`;

export const CarouselItemLink = styled.div`
  margin-top: 20px;
  font-family: 'Raleway', sans-serif;
  font-size: 13px;
  color: white;
  padding-bottom: 3px;
  border-bottom: 1px solid white;
  width: fit-content;
  cursor: pointer;

  &:hover {
    color: #648683;
    border-bottom: 1px solid #648683;
  }
`;