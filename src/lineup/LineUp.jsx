import React from "react";

function LineUp({onClick}){
    return (
        <li onClick={() => onClick(['/lineup/폴블.gif', '/lineup/릴보.gif', '/lineup/백아.gif', '/lineup/큐떱.gif'])}>
            <img src="/sidemn/4.png" alt="라인업" />
          </li>
      );
}

export default LineUp;