import React from 'react';
import styles from "./PokesDesk.module.css"


const PokesDesk = (props) => {
    return (


        <div>


            <div>
                {
                    props.pokemons.map(p => <div key={p.id}>
                            <div>
                                <div>{p.id+'.'} {p.name}</div>

                                {/*<div>{p.types[0].type.name}</div>*/}
                            </div>
                        </div>
                    )

                }

            </div>
            <div>
                <button onClick={()=> {
                    props.requestLoadMore(props.next)
                }}>
                    Load More
                </button>
            </div>
            <div>
            </div>
        </div>

    )
}

export default PokesDesk