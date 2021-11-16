import React, {useEffect} from 'react';
import {connect} from "react-redux";
import s from "./PokesDesk.module.css"
import {toZeroedNumber} from "../../utils/auxiliary-functions";

const PokeInf = (props) => {
    const p = props.choosedPoke
    const stats = new Map()
    if (Object.keys(props.choosedPoke).length !== 0) {
        p.stats.forEach(st => {
            stats.set(st.stat.name, st.base_stat)
        })
    }
        if (Object.keys(props.choosedPoke).length === 0) {
            return <></>;
        }
        return (
            <div className={s.pokemonInfoCard}>
                <div>
                    <img src={p.sprites.other.home.front_default} alt={p.name}/>
                    <div className={s.pokemonNameInfo}>
                        {p.name.charAt(0).toUpperCase() + p.name.slice(1) + ' #' + toZeroedNumber(p.id,3)}
                    </div>
                </div>
                <table>
                    <tbody>
                    <tr>
                        <td>Type</td>
                        <td>
                            {p.types.map(pok => {
                                return <div key={pok.type.name} className={pok.type.name}>{(pok.type.name)}</div>
                            })}
                        </td>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td>{stats.get('attack')}</td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td>{stats.get('defense')}</td>
                    </tr>
                    <tr>
                        <td>HP</td>
                        <td>{stats.get('hp')}</td>
                    </tr>
                    <tr>
                        <td>SP Attack</td>
                        <td>{stats.get('special-attack')}</td>
                    </tr>
                    <tr>
                        <td>SP Defense</td>
                        <td>{stats.get('special-defense')}</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>{stats.get('speed')}</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>{p.weight}</td>
                    </tr>
                    <tr>
                        <td>Total moves</td>
                        <td>{p.moves.length}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )

}

export default PokeInf
