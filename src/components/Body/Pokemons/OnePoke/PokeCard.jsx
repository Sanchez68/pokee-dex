import React from 'react';
import {Card, Col} from "antd";
import s from "../../PokesDesk.module.css"
import {setChoosedPokemon} from "../../../../redux/pokeReducer";

const PokeCard = (props) => {
    const { Meta } = Card;

    let p = props.pokemon
    let imgUrl = p.sprites.other.home.front_default
    return (
        <div className={s.pokeCardWrapper} onClick={()=>props.setChoosedPokemon(p)}>
            <Col span={8} key={p.id}>
                <div >
                    <Card
                        hoverable
                        style={{ width: 240}}
                        className={s.antdCardWrapper}
                        cover={<img alt={p.name+" img"} src={imgUrl} />}
                    >
                        <Meta title={(p.id + '.') +
                        (p.name.charAt(0).toUpperCase() + p.name.slice(1))}/>
                       <div className={s.types}>
                           {
                               p.types.map(poke=>{
                                   return <div key={poke.type.name} className={s.type + ' ' + s[poke.type.name]}>
                                       {poke.type.name.charAt(0).toUpperCase() + poke.type.name.slice(1)}
                                   </div>
                               })
                           }
                       </div>
                    </Card>
                </div>
            </Col>
        </div>
    );
};

export default PokeCard;