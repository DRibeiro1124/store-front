import React, { Component } from 'react';
import movies from '../Data/movies.json'

class Movies extends Component {

componentDidMount () {
    console.log({ data: movies, keys: Object.keys(movies) })
}

    render() {
        return (
            <div>
                {Object.keys(movies).map(( movieKey, i ) => {
                    return <section key={i}>
                        <header>
                            <h1>Key</h1>
                            <h3>Intro</h3>
                        </header>
                        <section>
                            <h2>title of movie</h2>
                            <h3>plot of movie</h3>
                            <h4>price</h4>
                            <img src="" alt="" />
                            <h3>cast</h3>
                        </section>
                    </section>
                })}
            </div>
        );
    }
}

export default Movies;

