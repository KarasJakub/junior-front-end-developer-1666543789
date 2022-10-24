import React from "react";
import * as S from "./PageWrapper.styled";
import TaskLegend from "../TaskLegend/TaskLegend";
import TaskList from "../TaskList/TaskList";
import Navigation from "../Navigation/Navigation";

const PageWrapper = () => {
  return (
    <S.PageWrapper>
      <Navigation />
      <S.ContentWrapper>
        {/* <TaskLegend>dsdsds</TaskLegend> */}
        <TaskList>sss</TaskList>
      </S.ContentWrapper>
    </S.PageWrapper>
  );
};

export default PageWrapper;
