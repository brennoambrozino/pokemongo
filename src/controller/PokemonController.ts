import { Request, Response } from "express"
import { PokemonBusiness } from "../business/PokemonBusiness"
import { getAllByPageDTO } from "../types/getAllByPageDTO"
import { getByNameDTO } from "../types/getByNameDTO"


export default class PokemonController {
    constructor(
        private pokemonBusiness: PokemonBusiness
    ){}

    getByName = async(req:Request, res: Response) => {
        const { name } = req.params

        const queryResult: any = await this.pokemonBusiness.getByName(name)

        const pokemon: getByNameDTO = {
            pokedex_number: queryResult.pokedex_number,
            name: queryResult.name,
            type_1: queryResult.type_1,
            type_2: queryResult.type_2,
            atk: queryResult.atk,
            def: queryResult.def,
            sta: queryResult.sta,
            stat_total: queryResult.stat_total
        }

        try {
            res.status(200).send({ pokemon })
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro ao Localizar o Post")
        }

    }

    getAllByPage = async(req:Request, res:Response) => {

        const {page} = req.params
        const queryResult: any = await this.pokemonBusiness.getAllByPage(page)

        const listPokemons = []

        for (let pokemon of queryResult) {

            const pokemons: getAllByPageDTO = {
                pokedex_number: pokemon.pokedex_number,
                name: pokemon.name,
                type_1: pokemon.type_1,
                type_2: pokemon.type_2
            }

            listPokemons.push(pokemons)
        }

        try {
            res.status(200).send(listPokemons)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro ao Localizar o Post")
        }
    }

    getLegendary = async(req:Request, res:Response) => {

        const {page} = req.params
        const queryResult: any = await this.pokemonBusiness.getLegendary(page)

        const listPokemons = []

        for (let pokemon of queryResult) {

            const pokemons: getAllByPageDTO = {
                pokedex_number: pokemon.pokedex_number,
                name: pokemon.name,
                type_1: pokemon.type_1,
                type_2: pokemon.type_2
            }

            listPokemons.push(pokemons)
        }

        try {
            res.status(200).send(listPokemons)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro ao Localizar o Post")
        }
    }

    getByType = async(req:Request, res:Response) => {
        const {page} = req.params
        const {type}:any = req.query

        const queryResult: any = await this.pokemonBusiness.getByType(type, page)

        const listPokemons = []

        for (let pokemon of queryResult) {

            const pokemons: getAllByPageDTO = {
                pokedex_number: pokemon.pokedex_number,
                name: pokemon.name,
                type_1: pokemon.type_1,
                type_2: pokemon.type_2
            }

            listPokemons.push(pokemons)
        }

        try {
            res.status(200).send(listPokemons)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro ao Localizar o Post")
        }
    }
}