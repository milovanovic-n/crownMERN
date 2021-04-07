import styled, { keyframes, css } from "styled-components";


const beat = keyframes`
  30% {
    transform: scale(1.4);
  }

  50% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1);
  }
`;

const floatAway = (x, y) => keyframes`
  15% {
    opacity: 0;
  }

  16% {
    opacity: 1;
    transform: translate(0, 0);
  }

  100% {
    transform: translate(${x}px, ${y}px);
    opacity: 0;
  }
`;

const activeBeatAnimation = css`
  svg {
    animation: ${beat} cubic-bezier(0.04, 0.4, 0.5, 0.95) 1.2s forwards 1;

    path {
      fill: #8B0C00;
    }
  }
`;

const activeFloatAwayAnimation = (x, y) => css`
  animation: ${floatAway(x, y)} ease-out 2s forwards 1;
`;


export const AnimatedHeartBtn = styled.button`
  position: relative;
  height: 36px;
  width: 36px;
  padding: 11px 8px 8px;
  cursor: pointer;
  color: #2d2d2d;
  outline: none;
  border: none;
  border-radius: 50%;
  /*background-color: hsla(0, 0%, 100%, 0.8);*/
  background-color: transparent;
  box-shadow: 0 2px 4px 0 rgba(45, 45, 45, 0.14);

  ${props => props.MyActive ? activeBeatAnimation : ""}

  path {
    transition: fill 0.3s;
  }
`;

export const SmallHeart = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
  margin: -10px 0 0 -10px;
  opacity: 0;
  pointer-events: none;
  background: url("data:image/svg+xml;charset=utf-8,%3Csvg width='7' height='6' viewBox='0 0 18 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.012 14.905a19.999 19.999 0 0 1-3.885-2.388C2.528 10.466 1.002 8.095 1 5.442c-.002-2.45 1.922-4.43 4.283-4.432 1.128 0 2.209.453 3 1.258l.715.728.714-.73A4.199 4.199 0 0 1 12.707 1h-.001C15.069.998 16.996 2.97 17 5.421c.004 2.656-1.519 5.032-4.115 7.091a20.008 20.008 0 0 1-3.873 2.393z' stroke='%23ffffff' stroke-width='2' fill='%23C70039'/%3E%3C/svg%3E");
  background-position: 50%;
  background-repeat: no-repeat;
  ${props => props.MyActive ? activeFloatAwayAnimation(props.CordinateX, props.CordinateY) : ""}
`; 