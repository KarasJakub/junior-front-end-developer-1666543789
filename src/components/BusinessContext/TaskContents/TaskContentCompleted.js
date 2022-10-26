import React from "react";
import * as S from "../BusinessContext.styled";
import Kristen_Anitson_Photo from "../../../assets/images/Kristen_Aniston_Photo.png";

const TaskContent = () => {
  const daysBetween = new Date().getDate() - new Date("2021-12-17").getDate();
  return (
    <S.MessageSection>
      <S.MessageTitle />
      <S.MessageAuthor>
        <h4>
          If're seeing this, you probably don't choose any task, or the task you
          chose doesn't exist anymore
        </h4>
      </S.MessageAuthor>
    </S.MessageSection>
  );
};

export default TaskContent;
