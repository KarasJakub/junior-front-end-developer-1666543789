import React from "react";
import * as S from "../BusinessContext.styled";
import Kristen_Anitson_Photo from "../../../assets/images/Kristen_Aniston_Photo.png";

const TaskContent = () => {
  const daysBetween = new Date().getDate() - new Date("2021-12-17").getDate();
  return (
    <S.MessageSection>
      <S.MessageTitle>New super fancy title 🎉 🙌</S.MessageTitle>
      <S.MessageAuthor>
        <img src={Kristen_Anitson_Photo} alt="Kristen Anitson" />
        <h4>Olga Nelson</h4>
        <p>{daysBetween} days ago</p>
      </S.MessageAuthor>
      <S.MessageContent>
        Hello! <br />
        Why I have same photo as Kristen Aniston? Because we are clones, don't
        worry.Folly words widow one downs few age every seven. If miss part by
        fact he park just shew. 🙌 🎉 <br />
        <br />
        <br />
        Up unpacked friendly ecstatic so possible humoured do. Ample end might
        folly quiet one set spoke her. We no am former valley assure. Four need
        spot ye said we find mile. Are commanded him convinced dashwoods did
        estimable forfeited. Shy celebrated met sentiments she reasonably but.
        <br />
        <br />
        <br />
        Way nor furnished sir procuring therefore but. Warmth far manner myself
        active are cannot called. Set her half end girl rich met. Me allowance
        departure an curiosity ye. In no talking address excited it conduct.
        Husbands debating replying overcame blessing he it me to domestic.
      </S.MessageContent>
    </S.MessageSection>
  );
};

export default TaskContent;
