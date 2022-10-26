import React from "react";
import * as S from "./PageWrapper.styled";
import TaskList from "../TaskList/TaskList";
import Navigation from "../Navigation/Navigation";
import BusinessContext from "../BusinessContext/BusinessContext";
import { Route, Routes, useNavigate } from "react-router-dom";

const PageWrapper = () => {
  return (
    <S.PageWrapper>
      <Navigation />
      <S.ContentWrapper>
        <TaskList />
        <BusinessContext />
      </S.ContentWrapper>
    </S.PageWrapper>
  );
};

export default PageWrapper;
