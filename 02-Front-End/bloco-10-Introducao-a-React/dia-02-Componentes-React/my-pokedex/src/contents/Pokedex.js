import React, {Component} from "react";
import Data from './Data'
import Pokemon from './Pokemon';
import './Pokedex.css'

class Pokedex extends Component {
    render() {
        return (
            <div className="pokedex">
                <h1 className="title">Pokedex</h1>
            {Data.map((item) => {
                return <Pokemon poke={item} key={item.id} />
            })}
            </div>

        )
    }
}

export default Pokedex