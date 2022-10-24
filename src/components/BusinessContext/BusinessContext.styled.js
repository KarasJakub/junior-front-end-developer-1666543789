import styled from "styled-components";

export const ContextWrapper = styled.main`
  width: 100%;
  max-width: 130rem;
  border-radius: 15px;
`;

export const Banner = styled.div`
  width: 100%;
  height: 7rem;
  position: relative;
  background-color: white;
  border-radius: 15px 15px 0 0;
  border-bottom: 1px solid #cecece;

  & img {
    position: absolute;
    bottom: -7%;
    left: 5%;
  }
`;

export const MainContentWrapper = styled.section`
  width: 100%;
  display: flex;
  height: calc(100% - 7rem);
  background-color: white;
  border-radius: 0 0 0 15px;
`;

export const TaskListWrapper = styled.div`
  width: 30%;
  background-color: #cecece;
  margin: 0 0 4px 4px;
  border-radius: 0 0 0 15px;
`;

export const MessageSection = styled.section`
  width: 70%;
`;

export const MessageTitle = styled.h2`
  font-family: Poppins, sans-serif;
  font-size: 3rem;
  font-weight: 600;
  line-height: 3.3rem;
  padding: 1rem 0 1rem 2rem;
`;
