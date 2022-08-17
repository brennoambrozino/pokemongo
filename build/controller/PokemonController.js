"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class PokemonController {
    constructor(pokemonBusiness) {
        this.pokemonBusiness = pokemonBusiness;
        this.getByName = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name } = req.params;
            const queryResult = yield this.pokemonBusiness.getByName(name);
            const pokemon = {
                pokedex_number: queryResult.pokedex_number,
                name: queryResult.name,
                type_1: queryResult.type_1,
                type_2: queryResult.type_2,
                atk: queryResult.atk,
                def: queryResult.def,
                sta: queryResult.sta,
                stat_total: queryResult.stat_total
            };
            try {
                res.status(200).send({ pokemon });
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(400).send(error.message);
                }
                res.status(500).send("Erro ao Localizar o Post");
            }
        });
        this.getAllByPage = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { page } = req.params;
            const queryResult = yield this.pokemonBusiness.getAllByPage(page);
            const listPokemons = [];
            for (let pokemon of queryResult) {
                const pokemons = {
                    pokedex_number: pokemon.pokedex_number,
                    name: pokemon.name,
                    type_1: pokemon.type_1,
                    type_2: pokemon.type_2
                };
                listPokemons.push(pokemons);
            }
            try {
                res.status(200).send(listPokemons);
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(400).send(error.message);
                }
                res.status(500).send("Erro ao Localizar o Post");
            }
        });
        this.getLegendary = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { page } = req.params;
            const queryResult = yield this.pokemonBusiness.getLegendary(page);
            const listPokemons = [];
            for (let pokemon of queryResult) {
                const pokemons = {
                    pokedex_number: pokemon.pokedex_number,
                    name: pokemon.name,
                    type_1: pokemon.type_1,
                    type_2: pokemon.type_2
                };
                listPokemons.push(pokemons);
            }
            try {
                res.status(200).send(listPokemons);
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(400).send(error.message);
                }
                res.status(500).send("Erro ao Localizar o Post");
            }
        });
        this.getByType = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { page } = req.params;
            const { type } = req.query;
            const queryResult = yield this.pokemonBusiness.getByType(type, page);
            const listPokemons = [];
            for (let pokemon of queryResult) {
                const pokemons = {
                    pokedex_number: pokemon.pokedex_number,
                    name: pokemon.name,
                    type_1: pokemon.type_1,
                    type_2: pokemon.type_2
                };
                listPokemons.push(pokemons);
            }
            try {
                res.status(200).send(listPokemons);
            }
            catch (error) {
                if (error instanceof Error) {
                    return res.status(400).send(error.message);
                }
                res.status(500).send("Erro ao Localizar o Post");
            }
        });
    }
}
exports.default = PokemonController;
//# sourceMappingURL=PokemonController.js.map