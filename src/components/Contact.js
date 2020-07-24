import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Contact extends React.Component {
    state = {
        pokemons: []
    }
    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
            // console.log(res.data.results)
            this.setState({
                pokemons: res.data.results
            });
        });
    };
    render(){
        console.log(this.props)
        const pokemons = this.state.pokemons;
        let pokemonsListe = pokemons.length ? (
            pokemons.map(pokemon => {
                return(
                     <div className="post card" key={pokemon.id = Math.random()}>
                        <div className="card-content">
                                <span className="card-title">{pokemon.name}</span>
                            <p>{pokemon.url}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <p className="center">Chargement</p>
        )
        return(
        <div className="container">
            <h4 className="center">Contact</h4>
            {pokemonsListe}
        </div>
    );
    }
};
export default Contact;