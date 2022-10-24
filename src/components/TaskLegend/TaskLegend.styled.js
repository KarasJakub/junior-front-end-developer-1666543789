import styled from "styled-components";

export const LegendWrapper = styled.div`
  width: 25rem;
  max-height: 25rem;
  background-color: #cecece;
  display: flex;
  flex-direction: column;
`;

export const LegendTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
`;

export const LegendBar = styled.div`
  display: flex;
  margin: 1.5rem auto;
  width: 50%;

  & strong {
    font-size: 2rem;
    text-align: center;
  }

  & img {
    width: 3.5rem;
    padding-right: 1rem;
  }
`;
