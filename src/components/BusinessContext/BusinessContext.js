import React from "react";
import * as S from "./BusinessContext.styled";
import ContextLogo from "../../assets/icons/ContextLogo.svg";

const BusinessContext = () => {
  return (
    <S.ContextWrapper>
      <S.Banner>
        <img src={ContextLogo} alt="Business Context Logo" />
      </S.Banner>
      <S.MainContentWrapper>
        <S.TaskListWrapper></S.TaskListWrapper>
        <S.MessageSection>
          <S.MessageTitle>Application has been accepted 🎉 🙌</S.MessageTitle>
        </S.MessageSection>
      </S.MainContentWrapper>
    </S.ContextWrapper>
  );
};

export default BusinessContext;
