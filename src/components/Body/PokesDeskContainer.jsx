import React from 'react'
import {connect} from "react-redux";
import PokesDesk from "./Pokemons/PokesDesk";
import {requestLoadMore, requestPokemons, setChoosedPokemon, setPokemons} from "../../redux/pokeReducer";
import PokeInf from "./PokeInf";
import s from "./PokesDesk.module.css"

class PokesDeskContainer extends React.Component{
    componentDidMount() {
        this.props.requestPokemons(this.props.pageLimit)
    }
    render() {
        return (
            <div className={s.pokemonsContainerWrapper}>
                <div>
                <PokesDesk
                    pageLimit={this.props.pageLimit}
                    pokemons={this.props.pokemons}
                    requestLoadMore={this.props.requestLoadMore}
                    next={this.props.next}
                    setChoosedPokemon={this.props.setChoosedPokemon}
                />
                </div>
                <div className={s.pokeInfWrapper}>
                    {
                        <PokeInf choosedPoke={this.props.choosedPoke}/>
                    }
                </div>
            </div>

        )
    }
    }



let mapStateToProps = (state) =>{
    return{
        pageLimit: state.pokePage.pageLimit,
        currentPage: state.pokePage.currentPage,
        pokemons: state.pokePage.pokemons,
        next: state.pokePage.nextPage,
        choosedPoke: state.pokePage.choosedPoke
    }
}
export default connect(mapStateToProps,{setPokemons, requestPokemons,requestLoadMore,setChoosedPokemon})(PokesDeskContainer)