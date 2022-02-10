import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: blueviolet;
  box-shadow: 1px 1px 9px 2px rgba(0, 0, 0, 0.4);
`;

export const NavbarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width 1300px;
    height 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #fff;
`;
