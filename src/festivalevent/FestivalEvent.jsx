import React from "react";

function FestivalEvent({onClick}) {
    return(
        <li onClick={() => onClick('/총학이벤트/총학 이벤트.png')}>
        <img src="/sidemn/5.png" alt="이벤트" />
      </li>
    );
}


export default FestivalEvent;