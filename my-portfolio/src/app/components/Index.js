import React from "react";
import style from './Index.module.css'

import Profile from "./Profile.js";
import Facts from "./Facts.js";
import Tabs from "./Tabs.js";
import ContentImg from "./ContentImg";
import Buttons from "./Buttons";

function Portafolio(){
    return(
        <div className={style.main}>
            <div className={style["container"]}>
                <Profile/>
                <Facts/>
                <Buttons/>
                <Tabs/>
                <ContentImg/>
            </div>
        </div>
    );
}

export default Portafolio;
