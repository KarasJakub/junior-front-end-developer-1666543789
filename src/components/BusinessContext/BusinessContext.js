import React from "react";
import * as S from "./BusinessContext.styled";
import ContextLogo from "../../assets/icons/ContextLogo.svg";
import Kristen_Anitson_Photo from "../../assets/images/Kristen_Aniston_Photo.png";
import TaskCard from "./TaskCard/TaskCard";
import TaskCardNew from "./TaskCard/TaskCardNew";

const BusinessContext = () => {
  const daysBetween = new Date().getDate() - new Date("2021-12-17").getDate();
  return (
    <S.ContextWrapper>
      <S.Banner>
        <img src={ContextLogo} alt="Business Context Logo" />
      </S.Banner>
      <S.MainContentWrapper>
        <S.TaskListWrapper>
          <TaskCardNew
            author="Olga Nelson   •   "
            title="New sprint, tasks and intro information."
            shortText="Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on..."
          />
          <TaskCard
            author="Kirsten Aniston   •   "
            title="Application has been accepted 🎉 🙌"
            shortText="Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on..."
          />
          <S.TaskCardCompleted
            author="Olga Nelson   •   "
            title="New sprint, tasks and intro information."
            shortText="Hi Eric, congratulations on completing the previous assignment. This time you will have to focus on..."
          />
        </S.TaskListWrapper>
        <S.MessageSection>
          <S.MessageTitle>Application has been accepted 🎉 🙌</S.MessageTitle>
          <S.MessageAuthor>
            <img src={Kristen_Anitson_Photo} alt="Kristen Anitson" />
            <h4>Kristen Anitson</h4>
            <p>{daysBetween} days ago</p>
          </S.MessageAuthor>
          <S.MessageContent>
            Hello! <br />
            My name is Kirsten, and I'm super happy to announce that your
            application to join Coders Family has been accepted! 🎉 🙌 <br />
            <br />
            <br />
            You really impressed us during the interview process, and we'd like
            to offer you a project with . We've been working with for quite some
            time, and it's important for us to keep them satisfied with our
            services — hence why we believe you'll be a great fit for this job.
            <br />
            <br />
            <br />
            Here's the project overview: You'll be responsible for building a
            database and page for recording and displaying book ratings. We'd
            like to work in two week-long sprints, we've already given you a
            head start and prepared your tasks to deliver in your first sprint.
          </S.MessageContent>
        </S.MessageSection>
      </S.MainContentWrapper>
    </S.ContextWrapper>
  );
};

export default BusinessContext;
