import { PokemonBusiness } from "./business/PokemonBusiness";
import { app } from "./controller/app";
import PokemonController from "./controller/PokemonController";
import PokemonData from "./data/PokemonData";


const pokemonBusiness = new PokemonBusiness(
    new PokemonData()
)

const pokemonController = new PokemonController(
    pokemonBusiness
)


app.get("/pokemons/:page", pokemonController.getAllByPage)
app.get("/pokemons/type/:page", pokemonController.getByType)
app.get("/pokemons/details/:name", pokemonController.getByName)
app.get("/pokemons/legendary/:page", pokemonController.getLegendary)