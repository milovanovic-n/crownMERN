import styled from "styled-components";
import Carousel from "react-elastic-carousel";


export const FeaturedProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${props => props.imageUrl ? props.imageUrl : ""});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  margin-bottom: 50px;

  @media (min-width: 600px) {
    padding: 50px;
  }

  @media (min-width: 992px) {
    padding: 50px 70px;
  }
`;

export const FeaturedProductsHeader = styled.h4`
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin: 25px 0;
  position: relative;

  &::before {
    content: "";
    width: 117px;
    height: 1px;
    background: white;
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
  }

  &::after {
    content: "///";
    line-height: 20px;
    background: transparent;
    padding: 0 2px;
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 12px;
    font-family: 'Raleway',sans-serif;
    letter-spacing: 0;
  }

  @media (max-width: 420px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 28px;
    margin: 30px 0;

    &::before {
      bottom: -20px;
    }

    &::after {
      bottom: -30px;
    }
  }

  @media (min-width: 992px) {
    font-size: 32px;
    margin: 40px 0;
  }
`;

export const SliderContainer = styled(Carousel)`
  padding: 20px 0;
  position: relative;

  @media (min-width: 600px) {
    padding: 35px 0;
  }

  @media (min-width: 992px) {
    padding: 50px 0;
  }

  .rec.rec-arrow {
    font-size: 16px;
    border: none;
    border-radius: 2px;
    background-color: white;
    box-shadow: none;
    width: 30px;
    min-width: 15px;
    height: 35px;
    color: #464646;
    display: flex;
    align-items: center;
    position: absolute;

    @media (max-width: 420px) {
      display: none;
    }

    &:hover {
      color: #638683;
    }

    &:disabled {
      visibility: hidden;
    }
  }

  .rec.rec-arrow-right {
    right: 3px;
    justify-content: flex-end;
    padding-right: 10px;
    z-index: 2;
  }

  .rec.rec-arrow-left {
    left: 3px;
    justify-content: flex-start;
    padding-left: 10px;
    z-index: 2;
  }

  .rec.rec-pagination {
    position: absolute;
    bottom: 20px;
    align-items: flex-end;

    .rec.rec-dot {
      border: none;
      border-radius: 0;
      box-shadow: none;
      background-color: white;
      height: 1px;
    }

    .rec.rec-dot_active {
      background-color: #638683;
      height: 3px;
    }
  }
`;