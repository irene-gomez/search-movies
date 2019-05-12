import React from 'react';
import MovieItem from './components/MovieItem';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txt: '',
            search: []
        };
        this.updateSearch = this.updateSearch.bind(this);
        this.getData = this.getData.bind(this);
    }
    updateSearch(e) {
        this.setState({ txt: e.target.value });
    }
    getData() {
        const { txt } = this.state;
        let newText = '';
        
        if(txt === '') {
            console.log('El campo de búsqueda está vacío');
            this.setState({ txt: 'El campo de búsqueda está vacío' });
            
        } else if(txt.includes(' ')){
            newText = txt.replace(' ', '+');
            
        } else {
            newText = txt;
        }

        const url = `https://www.omdbapi.com/?s=${newText}&apikey=a24c6d7a`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ search: data.Search });
                // console.log('search',this.state.search);
            })
            .catch(error => console.log(`Te has equivocado por aquí ${error}`));
    }
    render() {
        const { search } = this.state;

        return (
            <div className="App">
                <label htmlFor="movie" className="movie-label">
                    Busca una película
                </label>
                <input
                    type="text"
                    name="movie"
                    id="movie"
                    onChange={this.updateSearch}
                />
                <button onClick={this.getData}>Buscar</button>

                <p className="serie">Has buscado: {this.state.txt}</p>

                <ul className="movie-list">
                    {search.map(movie => {
                        return (
                            <MovieItem data={movie}/>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default App;
