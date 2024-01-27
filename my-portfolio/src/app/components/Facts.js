"use client"
import style from './facts.module.css'

function Facts(){
    return(
        <div className={style["facts"]}>
            <div className={style["fact-item"]}>
                <h2>2</h2>
                <p>Years of work experience</p>
            </div>
            <div className={style["fact-item"]}>
                <h2>5+</h2>
                <p>Completed projects</p>
            </div>
            <div className={style["fact-item"]}>
                <h2>0+</h2>
                <p>Satisfied customers</p>
            </div>
        </div>
    );
}

export default Facts;