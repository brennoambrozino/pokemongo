import { GetAllByPageResponse } from "../types/getAllByPageResponse"
import { GetByNameResponse } from "../types/getByNameResponse"
import { GetByTypeResponse } from "../types/getByTypeResponse"
import { GetLegendaryResponse } from "../types/getLegendaryResponse"
import { BaseDataBase } from "./BaseDataBase"


export default class PokemonData extends BaseDataBase {
    protected TABLE_NAME = "POKEMONS"

    getByName = async (name:string) => {
        try {
            const queryResult: GetByNameResponse = await this
            .connection(this.TABLE_NAME)
            .select("*")
            .where({name})
            return queryResult[0]

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Error do banco !")
            }
        }
    }

    getAllByPage = async (page:number) => {
        try {

            const queryResult: GetAllByPageResponse = await this 
            .connection(this.TABLE_NAME)
            .select("*")
            .orderBy("pokedex_number")
            .limit(20)
            .offset(20 * (page - 1))
            

            return queryResult
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Error do banco !")
            }
        }
    }


    getLegendary = async (page:number) => {
        try {
            const queryResult: GetLegendaryResponse = await this
            .connection(this.TABLE_NAME)
            .select("*")
            .orderBy("pokedex_number")
            .where("legendary", ">", "0" )
            .limit(20)
            .offset(20 * (page - 1))

            return queryResult
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Error do banco !")
            }
        }
    }

    getByType = async (type:string, page:number) => {
        try {
            const querResult: GetByTypeResponse = await this
            .connection(this.TABLE_NAME)
            .select("*")
            .orderBy("pokedex_number")
            .where("type_1", "LIKE", `${type}`)
            .orWhere("type_2", "LIKE", `${type}`)
            .limit(20)
            .offset(20 * (page - 1))

            return querResult
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Error do banco !")
            }
        }
    }
}