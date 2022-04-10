import React, {Component} from "react";
import './Pokemon.css'

class Pokemon extends Component {
    render() {
        return (
            <article className="pokemon">
                <section className="poke-info">
                <h4>{this.props.poke.name}</h4>
                <p>{this.props.poke.type}</p>
                <p>average Weight: {this.props.poke.averageWeight.value} {this.props.poke.averageWeight.measurementUnit}</p>
                </section>
                <img className="poke-img" src={this.props.poke.image} alt="Imagem do pokemon"/>
            </article>
        )
    }
}

export default Pokemon;