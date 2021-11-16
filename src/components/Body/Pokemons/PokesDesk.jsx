import React from 'react';
import s from "../PokesDesk.module.css"
import {Button, Row} from "antd";
import PokeCard from "./OnePoke/PokeCard";


const PokesDesk = (props) => {
    let showedPokemons = props.pokemons.filter(p => {
            if (props.currentType === 'all') return true
            let types = p.types.map(pok => {
                return pok.type.name
            })
            return types.some(t => {

                    return t === props.currentType
                }
            )
        }
    )
    return (
        <div className={s.pokeDeskWrapper}>
            <div className={s.pokeListInfo}>
                <Row className={s.rowPokeList} gutter={[32, 32]}
                >
                        {showedPokemons.length > 0
                            ? showedPokemons.map(p => {
                                    return <div className={s.pokeDeskWrapper} key={p.id}><PokeCard
                                        pokemon={p}
                                        setChoosedPokemon={props.setChoosedPokemon}/></div>

                                }
                            )
                            : <></>}
                    <div>{showedPokemons.length <= 0
                        ? <div className={s.noPokemons}>No Pokemon</div>
                        : <></>}
                    </div>
                </Row>
            </div>

            <div className={s.butLoadMore}>
                <Button type="primary" shape="round"
                        onClick={() => {
                            props.requestLoadMore(props.next)
                        }}
                >
                    Load More
                </Button>
            </div>
        </div>

    )
}

export default PokesDesk