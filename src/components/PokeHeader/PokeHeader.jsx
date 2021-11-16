import React from 'react'
import s from "./PokeHeader.module.css"
import {connect} from "react-redux";
import {setCurrentType} from "../../redux/pokeReducer";
import {Button} from "antd";


const PokeHeader = (props) => {
    return (
        <div>
            <div className={s.headerMain}>

                <div className={s.dropdownWrapper}>
                    <div className={s.dropdown}>
                        <Button type="primary" shape="round" className={s.dropbtn}>
                            {props.currentType.charAt(0).toUpperCase() + props.currentType.slice(1)}</Button>
                        <div className={s.dropdownContent}>
                            <div className={s.all} onClick={() => props.setCurrentType('all')}>All</div>
                            {
                                props.types.map((t) => {
                                    return <div key={t.name} onClick={() => props.setCurrentType(t.name)}
                                                className={s[t.name]}>
                                        {t.name.charAt(0).toUpperCase() + t.name.slice(1)}</div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <p>PokeDex</p>
                </div>
            </div>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        types: state.pokePage.types,
        currentType: state.pokePage.currentType
    }
}
export default connect(mapStateToProps, {setCurrentType})(PokeHeader)