import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
    constructor( public id: number, public name: string) {} 
    
    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
    
    scream() {
        console.log( `${this.name.toUpperCase()}!!!` );
    }
    
    speak() {
        console.log(`${ this.name }, ${ this.name } `)
    }
    
    async getMoves():Promise<Move[]>{
        // const moves = 10;
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
        console.log( data.moves ) 
        return data.moves;
    }
    
    
}

export const charmander = new Pokemon(2, 'Charmander')
console.log( charmander.getMoves())