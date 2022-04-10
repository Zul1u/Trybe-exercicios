import React, { Component } from "react";
import Pokemons from './Data'
import Pokemon from './Pokemon';
import './Pokedex.css'
import './Buttons.css'
import Button from "./Button";

class Pokedex extends Component {
    constructor() {
        super()

        this.nextPokemon = this.nextPokemon.bind(this);
        this.filterPokemon = this.filterPokemon.bind(this);
        this.typeFilter = this.typeFilter.bind(this);
        this.allTypes = this.allTypes.bind(this);

        this.state = {
            pokeIdex: 0,
            filter: 'All',
        }
    }

    filterPokemon() {
        const { filter } = this.state
        return (filter === 'All' ? Pokemons : Pokemons.filter(poke => poke.type === filter))
    }

    allTypes() {
        const types = Pokemons.map(pokemon => pokemon.type);
        return types.filter((type, index) => types.indexOf(type) === index);
    }

    nextPokemon() {
        const filter = this.filterPokemon();
        const { pokeIdex } = this.state
        pokeIdex < filter.length - 1 ?
            this.setState((previousState) => ({
                pokeIdex: previousState.pokeIdex + 1
            })) :
            this.setState(({
                pokeIdex: 0
            }))
    }

    typeFilter(event) {
        this.setState(({
            pokeIdex: 0,
            filter: event.target.value
        }))
    }

    render() {

        const { pokeIdex } = this.state;
        const types = this.allTypes();


        return (
            <div className="pokedex">
                <h1 className="title">Pokedex</h1>
                <Pokemon poke={this.filterPokemon()[pokeIdex]} />
                <div className="div_buttons">
                    <button onClick={this.typeFilter} className="bnt all" value="All">All</button>
                    <button onClick={this.nextPokemon} className="bnt next">Proximo Pokemon</button>
                {types.map(item => <Button click={this.typeFilter} type={ item } key={item} />)}
                </div>
            </div>

        )
    }
}

export default Pokedex