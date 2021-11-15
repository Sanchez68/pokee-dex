import React from 'react'
import preloader from '../../../assets/images/preloader.gif'
import s from "./preloader.module.css"
import "../../../App.css"
const Preloader = (props) => {

    return <div className={s.preloaderWrapper}>
        <img className={s.preloader} src={preloader} alt={'Data loading...'}/>
    </div>
}

export default Preloader