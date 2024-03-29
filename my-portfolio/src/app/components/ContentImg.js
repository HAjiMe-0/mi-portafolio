"use client"
import style from './ContentImg.module.css'

import Image from "next/image";
import hero from '../assets/images/Hero_2.png';
import link from '../assets/icons/link.svg';
import bussines from '../assets/images/bussiness_man.png';
import pictures from '../assets/images/pictures_wall.jpeg';
import kitchen from '../assets/images/kitchen.jpeg';
import mobile from '../assets/images/mobile_app.png';
import issima from '../assets/images/issima_page.png'


function ContentImg(){
    return(
        <div className={style["project-container"]}>
            <div className={style["content-card-img"]}>
                <Image className={style["image"]} src={hero} />
                <div className={style["content-card-img-overlay"]}></div>
                <div className={style["content-card-img-detail"]}>
                    <p className={style["title"]}>SmarterTrading411</p>
                    <p className={style["detail"]}>Landing page of SmarterTrading411 created using WordPress</p>
                    <button className={style["btn"]}>
                        <Image src={link} alt="link"/>
                    </button>
                </div>
            </div>
            <div className={style["content-card-img"]}>
                <Image className={style["image"]} src={bussines} />
                <div className={style["content-card-img-overlay"]}></div>
            </div>
            <div className={style["content-card-img"]}>
                <Image className={style["image"]} src={pictures} />
                <div className={style["content-card-img-overlay"]}></div>
            </div>
            <div className={style["content-card-img"]}>
                <Image className={style["image"]} src={kitchen} />
                <div className={style["content-card-img-overlay"]}></div>
            </div>
            <div className={style["content-card-img"]}>
                <Image className={style["image"]} src={mobile}/>
                <div className={style["content-card-img-overlay"]}></div>
            </div>
            <div className={style["content-card-img"]}>
                <Image className={style["image"]} src={issima}/>
                <div className={style["content-card-img-overlay"]}></div>
            </div>
        </div>
    );
}
export default ContentImg;
