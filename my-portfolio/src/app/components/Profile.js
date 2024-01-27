"use client"
import style from './Profile.module.css';

import Image from "next/image";
import perfil from '../assets/images/perfil.jpg';
import github from '../assets/icons/github.svg'
import twitter from '../assets/icons/twitter.svg'
import linkedin from '../assets/icons/linkedin.svg'
import youtube from '../assets/icons/youtube.svg'

function Profile(){
    return(
        <div className={style.profile}>
            <figure className={style["profile-img"]}>
                <Image src={perfil} />
            </figure>
            <div className={style["profile-info"]}>
                <h1>Harold Ruddy Quispe Hilari</h1>
                <p>Front-end Junior</p>
                <div className={style["profile-social"]}>
                    <a href="https://github.com/HAjiMe-0" target="_blank">
                        <Image src={github} alt="github" className={style["profile-social-img"]}/>
                    </a>
                    <a href="https://twitter.com/Hajimex13" target="_blank">
                        <Image src={twitter} alt="twitter" className={style["profile-social-img"]}/>
                    </a>
                    <a href="https://linkedin.com" target="_blank">
                        <Image src={linkedin} alt="linkedin" className={style["profile-social-img"]}/>
                    </a>
                    <a href="https://www.youtube.com/@hrqh_402/featured" target="_blank">
                        <Image src={youtube} alt="youtube" className={style["profile-social-img"]}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Profile;