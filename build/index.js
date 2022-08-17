"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PokemonBusiness_1 = require("./business/PokemonBusiness");
const app_1 = require("./controller/app");
const PokemonController_1 = __importDefault(require("./controller/PokemonController"));
const PokemonData_1 = __importDefault(require("./data/PokemonData"));
const pokemonBusiness = new PokemonBusiness_1.PokemonBusiness(new PokemonData_1.default());
const pokemonController = new PokemonController_1.default(pokemonBusiness);
app_1.app.get("/pokemons/:page", pokemonController.getAllByPage);
app_1.app.get("/pokemons/type/:page", pokemonController.getByType);
app_1.app.get("/pokemons/details/:name", pokemonController.getByName);
app_1.app.get("/pokemons/legendary/:page", pokemonController.getLegendary);
//# sourceMappingURL=index.js.map