import React from 'react';
import s from "../PokesDesk.module.css"
import {Button, Col, Row} from "antd";
import PokeCard from "./OnePoke/PokeCard";


const PokesDesk = (props) => {
    return (
        <div className={s.pokeDeskWrapper}>
            <div className={s.pokeListInfo}>
                <Row className={s.rowPokeList} gutter={[32, 32]}
                >
                    {props.pokemons.map(p => {

                        return <div key={p.id}><PokeCard pokemon={p}
                        setChoosedPokemon={props.setChoosedPokemon}
                        /></div>
                    })
                    }
                </Row>
            </div>

            <div className={s.butLoadMore}>
                <Button type="primary" size="large" shape="round"
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