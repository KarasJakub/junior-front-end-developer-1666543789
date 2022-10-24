import React from "react";
import * as S from "./Navigation.styled";
import logo from "../../assets/icons/logo.svg";
import user from "../../assets/images/Normal.png";

const Navigation = () => {
  return (
    <S.Navigation>
      <img src={logo} alt="Company Logo" />
      <img src={user} alt="User" />
    </S.Navigation>
  );
};

export default Navigation;
