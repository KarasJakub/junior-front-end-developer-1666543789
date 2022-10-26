import styled from "styled-components";
import TaskCard from "./TaskCard/TaskCard";

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
  background-color: #f4f5f7;
  margin: 0 0 4px 4px;
  border-radius: 0 0 0 15px;

  & Link {
    text-decoration: none;
  }
`;

export const MessageSection = styled.section`
  width: 70%;
`;

export const MessageTitle = styled.h2`
  font-family: Poppins, sans-serif;
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 3.3rem;
  padding: 2rem 0 2rem 3rem;
`;

export const MessageAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3rem;

  & h4 {
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.5rem;
    padding-left: 1.5rem;
  }

  & p {
    font-family: Poppins, sans-serif;
    color: #6b778c;
    font-size: 1.3rem;
    padding-left: 1rem;
  }
`;

export const MessageContent = styled.p`
  font-family: Poppins, sans-serif;
  color: #6b778c;
  font-size: 1.7rem;
  line-height: 2.5rem;
  width: 80%;
  margin: -0.5rem 1rem 0 9rem;
`;

export const TaskCardCompleted = styled(TaskCard)`
  background-color: unset;
  box-shadow: unset;
`;
