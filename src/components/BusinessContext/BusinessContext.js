import React from "react";
import * as S from "./BusinessContext.styled";
import ContextLogo from "../../assets/icons/ContextLogo.svg";
import TaskCard from "./TaskCard/TaskCard";
import TaskCardNew from "./TaskCard/TaskCardNew";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaskContentActive from "./TaskContents/TaskContentActive";
import TaskContentNew from "./TaskContents/TaskContentNew";
import TaskContentCompleted from "./TaskContents/TaskContentCompleted";

const BusinessContext = () => {
  return (
    <Router>
      <S.ContextWrapper>
        <S.Banner>
          <img src={ContextLogo} alt="Business Context Logo" />
        </S.Banner>
        <S.MainContentWrapper>
          <S.TaskListWrapper>
            <Link to="new" style={{ textDecoration: "none" }}>
              <TaskCardNew
                author="Olga Nelson   •   "
                title="New super fancy title"
                shortText="Why I have same photo as Kristen Aniston? Because we are clones, don't
                worry. Folly words widow one downs."
              />
            </Link>
            <Link
              to="active"
              style={{ textDecoration: "none", color: "black" }}
            >
              <TaskCard
                author="Kirsten Aniston   •   "
                title="Application has been accepted 🎉 🙌"
                shortText="Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on..."
              />
            </Link>
            <Link
              to="completed"
              style={{ textDecoration: "none", color: "black" }}
            >
              <S.TaskCardCompleted
                author="Jack Sparrow   •   "
                title="In the middle of the ocean"
                shortText="There is nothing much to tell. We have to do our work"
              />
            </Link>
          </S.TaskListWrapper>
          <Routes>
            <Route path="/active" element={<TaskContentActive />} />
            <Route path="/new" element={<TaskContentNew />} />
            <Route path="/completed" element={<TaskContentCompleted />} />
            <Route path="/" element={<TaskContentCompleted />} />
          </Routes>
        </S.MainContentWrapper>
      </S.ContextWrapper>
    </Router>
  );
};

export default BusinessContext;
