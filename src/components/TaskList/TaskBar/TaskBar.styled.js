import styled from "styled-components";

export const TaskBar = styled.div`
  width: 90%;
  margin: 1rem auto;
  display: flex;
  align-items: center;

  & img {
    width: 1.6rem;
    margin: 10px;
  }
`;

export const TaskContent = styled.p`
  font-family: Poppins, sans-serif;
  font-size: 1.8rem;
  line-height: 1.8rem;
`;
