import PokemonData from "../data/PokemonData"

export class PokemonBusiness {

    constructor(
        private pokemonData: PokemonData
    ){}

    getByName = async(name:string) => {

        const lowerName = name.toLowerCase()

        const nameModified = lowerName[0].toUpperCase() + lowerName.substring(1) 

        const pokemon = await this.pokemonData.getByName(nameModified)

        if(!pokemon) {
            throw new Error("Erro ao encontrar o pokemon")
        }

        return pokemon
    }

    getAllByPage = async(page:string) => {

        let pokemons = []

        if(Number(page) < 1) {
            pokemons = await this.pokemonData.getAllByPage(1)
        } else {
            pokemons = await this.pokemonData.getAllByPage(Number(page))
        }


        if(!pokemons) {
            throw new Error("Erro ao encontrar pokemons")
        }

        return pokemons

    }

    getLegendary = async(page:string) => {
        let pokemons = []
        
        if(Number(page) < 1) {
            pokemons = await this.pokemonData.getLegendary(1)
        } else {
            pokemons = await this.pokemonData.getLegendary(Number(page))
        }

        if(!pokemons) {
            throw new Error("Erro ao encontrar pokemons")
        }

        return pokemons
    }

    getByType = async(type:string, page:string) => {

        let pokemons = []
        
        if(Number(page) < 1) {
            pokemons = await this.pokemonData.getByType(type , 1)
        } else {
            pokemons = await this.pokemonData.getByType(type , Number(page))
        }

        if(!pokemons) {
            throw new Error("Erro ao encontrar pokemons")
        }

        return pokemons
    }
}