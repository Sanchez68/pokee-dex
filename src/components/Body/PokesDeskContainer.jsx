import React from 'react'
import {connect} from "react-redux";
import PokesDesk from "./PokesDesk";
import {requestLoadMore, requestPokemons, setPokemons} from "../../redux/pokeReducer";

class PokesDeskContainer extends React.Component{
    componentDidMount() {
        this.props.requestPokemons(this.props.pageLimit)
    }
    render() {
        return (
            <div>
                <PokesDesk
                    pageLimit={this.props.pageLimit}
                    pokemons={this.props.pokemons}
                    requestLoadMore={this.props.requestLoadMore}
                    next={this.props.next}
                />
            </div>
        )
    }
    }



let mapStateToProps = (state) =>{
    return{
        pageLimit: state.pokePage.pageLimit,
        currentPage: state.pokePage.currentPage,
        pokemons: state.pokePage.pokemons,
        next: state.pokePage.nextPage
    }
}
export default connect(mapStateToProps,{setPokemons, requestPokemons,requestLoadMore})(PokesDeskContainer)