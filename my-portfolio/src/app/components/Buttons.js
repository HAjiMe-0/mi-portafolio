"use client"

import { useState } from 'react';
import Image from "next/image";
import download from '../assets/icons/download.svg'
import style from './Buttons.module.css'

function Buttons(){
  const [showAlert, setShowAlert] = useState(false);
  const handleDownloadClick = () => {
    setShowAlert(true);
    alert('Downloading Document');
  };
    return(
        <div className={style["buttons"]}>
            <button className={style["btn-primary"]}onClick={handleDownloadClick}>
                <div className={style["btn-content"]}>
                    <p>Download CV</p>
                    <Image src={download} alt="arrow" className={style["btn-primary-img"]}/>
                </div>
            </button>
            <a className={style["btn-secondary"]} href="mailto:haroldquispehilari567@gmail.com">
                <div className={style["btn-content"]}>
                    <p>Contact me</p>
                </div>
            </a>
        </div>
    );
}

export default Buttons;