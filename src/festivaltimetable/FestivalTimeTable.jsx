import React from "react";

function FestivalTimeTable({onClick}){
    return(
        <li onClick={() => onClick(['/타임테이블.png', '/타임테이블 31.png'])}>
        <img src="/sidemn/6.png" alt="타임 테이블" />
      </li>
    );


}

export default FestivalTimeTable;