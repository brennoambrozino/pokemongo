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
exports.PokemonBusiness = void 0;
class PokemonBusiness {
    constructor(pokemonData) {
        this.pokemonData = pokemonData;
        this.getByName = (name) => __awaiter(this, void 0, void 0, function* () {
            const lowerName = name.toLowerCase();
            const nameModified = lowerName[0].toUpperCase() + lowerName.substring(1);
            const pokemon = yield this.pokemonData.getByName(nameModified);
            if (!pokemon) {
                throw new Error("Erro ao encontrar o pokemon");
            }
            return pokemon;
        });
        this.getAllByPage = (page) => __awaiter(this, void 0, void 0, function* () {
            let pokemons = [];
            if (Number(page) < 1) {
                pokemons = yield this.pokemonData.getAllByPage(1);
            }
            else {
                pokemons = yield this.pokemonData.getAllByPage(Number(page));
            }
            if (!pokemons) {
                throw new Error("Erro ao encontrar pokemons");
            }
            return pokemons;
        });
        this.getLegendary = (page) => __awaiter(this, void 0, void 0, function* () {
            let pokemons = [];
            if (Number(page) < 1) {
                pokemons = yield this.pokemonData.getLegendary(1);
            }
            else {
                pokemons = yield this.pokemonData.getLegendary(Number(page));
            }
            if (!pokemons) {
                throw new Error("Erro ao encontrar pokemons");
            }
            return pokemons;
        });
        this.getByType = (type, page) => __awaiter(this, void 0, void 0, function* () {
            let pokemons = [];
            if (Number(page) < 1) {
                pokemons = yield this.pokemonData.getByType(type, 1);
            }
            else {
                pokemons = yield this.pokemonData.getByType(type, Number(page));
            }
            if (!pokemons) {
                throw new Error("Erro ao encontrar pokemons");
            }
            return pokemons;
        });
    }
}
exports.PokemonBusiness = PokemonBusiness;
//# sourceMappingURL=PokemonBusiness.js.map