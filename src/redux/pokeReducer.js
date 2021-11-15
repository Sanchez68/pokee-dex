import {pokemonsAPI} from "../API/api";

const SET_POKEMONS = 'SET_POKEMONS'
const SET_NEW_POKEMONS = 'SET_NEW_POKEMONS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_CHOOSED_POKEMON = 'SET_CHOOSED_POKEMON';


let initialState = {
    pokemons: [],
    pageLimit: 12,
    nextPage: `https://pokeapi.co/api/v2/pokemon/?offset=12&limit=12`,
    isFetching: true,
    choosedPoke: {},
}

export const pokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return {
                ...state,
                pokemons: [...action.pokemons]
            }
        case SET_NEW_POKEMONS:
            return {
                ...state,
                pokemons: [...state.pokemons, ...action.newPokemons],
                nextPage: action.next
            }
        case
        TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case
        SET_CHOOSED_POKEMON:
            return {
                ...state, choosedPoke: action.chosedPokemon
            }
        default:
            return state
    }
}

export const setPokemons = (pokemons) => ({
    type: SET_POKEMONS, pokemons
})
export const setNewPokemons = (newPokemons, next) => ({
    type: SET_NEW_POKEMONS, newPokemons, next
})
export const setChoosedPokemon = (chosedPokemon) => ({
    type: SET_CHOOSED_POKEMON, chosedPokemon
})

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
})


export const newPokemonsData = (data) => async (dispatch) => {
    return Promise.all(data.map((p) => {
        return pokemonsAPI.getUrlData(p.url)
    }))
}

export const requestPokemons = (pageLimit) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        const data = await pokemonsAPI.getPokemons(pageLimit)
        const pokeData = await dispatch(newPokemonsData(data.results))
        dispatch(setPokemons(pokeData))
        dispatch(toggleIsFetching(false))
    }
}

export const requestLoadMore = (url) => {
    return async (dispatch) => {
        const data = await pokemonsAPI.getUrlData(url)
        const pokeData = await dispatch(newPokemonsData(data.results))
        dispatch(setNewPokemons(pokeData, data.next))
    }
}

