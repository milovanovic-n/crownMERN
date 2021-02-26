import styled, { css } from "styled-components";


const ToggleFeaturedOn = css`
  color: #638683;
    
  &:hover {
    color: #80adaa;
    cursor: pointer;
  }
`;

const ToggleFeaturedOff = css`
  color: #b3003b;
    
  &:hover {
    color: #e8004d;
    cursor: pointer;
  }
`;


/*
 *  ADD ITEM STYLES
 */

export const AddItemForm = styled.form`
  position: relative;
  margin-bottom: 80px;
`;

export const AddItemSelectCollection = styled.select`
  width: 75%;
  border: none;
  border-bottom: 1px solid grey;
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  outline: none;
`;

export const AddItemButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 255px;
  right: 0;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: #0066cc;
  color: wheat;
  outline: none;

  &:hover {
    cursor: pointer;
    border: 2px solid #0066cc;
    background-color: white;
    color: #0066cc;
    font-size: 18px;
  }
`;


/**
 * EDIT ITEM STYLES
 */

export const EditItemContainer = styled.div`
  margin: 50px 0;
`;

export const EditItemTitle = styled.h4`
  font-weight: normal;

  .item__name {
    font-weight: bold;
  }
`;

export const EditItemForm = styled.form`
  position: relative;
`;

export const EditCollectionContainer = styled.select`
  width: 75%;
  border: none;
  border-bottom: 1px solid grey;
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  outline: none;
`;

export const EditItemButton = styled.button`
  position: absolute;
  font-size: 18px;
  z-index: 1;
  top: 255px;
  right: 0;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #2D8659;
  color: white;
  outline: none;

  &:hover {
    cursor: pointer;
    border: 2px solid #206040;
    background-color: white;
    color: #206040;
  }
`;

export const EditFeaturedValueContainer = styled.div`
  font-size: 28px;
  margin: 15px 0;
`;

export const EditFeaturedValue = styled.div`
  display: flex;
  align-items: center;
`;

export const EditFeaturedValueIcon = styled.div`
  ${props => props.isOn ? ToggleFeaturedOn : ToggleFeaturedOff}
`;

export const EditFeaturedValueText = styled.span`
  font-size: 14px;
  margin-left: 10px;
`;