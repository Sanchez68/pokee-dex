import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://pokeapi.co/api/v2/`,
    headers: {}
})

export const pokemonsAPI = {
    getPokemons(pageLimit = 20) {
        return instance.get(`pokemon/?limit=${pageLimit}`)
            .then(response => {
                return response.data
            })
    },
    getUrlData(url) {
        return axios.get(url)
            .then(response => {
                return response.data
            })
    },
    getNextPokemons(next) {
        return axios.get(next)
            .then(response => {
                debugger
                return response.data
            })
    }

}