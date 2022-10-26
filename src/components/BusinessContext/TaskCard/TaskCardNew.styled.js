import styled from "styled-components";

export const TaskCardWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  background-color: white;
  border-radius: 15px;
`;

export const TopBar = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const BarText = styled.p`
  font-family: Poppins, sans-serif;
  font-size: 1.2rem;
  margin: 1rem;
  color: #6b778c;
  display: flex;
  align-items: center;

  & .new {
    background-color: #0165ff;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    color: white;
    padding: 7px;
    font-size: 10px;
    border-radius: 5px;
    margin-right: 1rem;
  }
`;

export const Title = styled.h3`
  font-family: Poppins, sans-serif;
  font-size: 1.5rem;
  margin: 1rem;
  font-weight: 500;
  font-weight: 700;
  line-height: 18px;
  color: ${({ isClicked }) => (isClicked ? "black" : "#0165ff")};
`;
