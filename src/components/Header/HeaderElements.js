import styled from "styled-components";

export const HeaderTop = styled.div`
  background: #01bf71;
  height: 45px;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderItems = styled.li`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;

  vertical-align: middle;
`;

export const Gambar = styled.img`
  color: #fff;
  font-size: 24px;
`;

export const BCA = styled.img`
  color: #fff;
  font-size: 24px;
  width: 50px;
  height: 20px;
`;

export const Text = styled.p`
  max-width: 440px;
  font-size: 13px;
  line-height: 24px;
  color: #fff;
  padding-left: 7px;
`;
