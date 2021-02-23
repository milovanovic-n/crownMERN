import styled from "styled-components";
import Carousel from "react-elastic-carousel";


export const CarouselContainer = styled(Carousel)`
  margin: 0;
  position: relative;

  &:hover {

    .rec.rec-arrow {
      visibility: visible;
    }

    .rec.rec-arrow-right {
      right: 20px;

      @media (max-width: 480px) {
        right: 0;
        background-color: transparent;
        color: white;
      }
    }

    .rec.rec-arrow-left {
      left: 20px;

      @media (max-width: 480px) {
        left: 0;
        background-color: transparent;
        color: white;
      }
    }
  }

  .rec-slider-container {
    margin: 0;
  }

  .rec.rec-arrow {
    visibility: hidden;
    border-radius: 0;
    box-shadow: none;
    width: 45px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 900;
    background-color: white;
    color: black;

    &:hover {
      background-color: transparent;
      color: white;
    }
    
    &:disabled {
      visibility: hidden;
    }
  }

  .rec.rec-arrow-left {
    position: absolute;
    left: -50px;
    z-index: 2;

    @media (max-width: 480px) {
      left: 0;
      background-color: transparent;
      color: white;
    }
  }

  .rec.rec-arrow-right {
    position: absolute;
    right: -50px;
    z-index: 2;

    @media (max-width: 480px) {
      right: 0;
      background-color: transparent;
      color: white;
    }
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