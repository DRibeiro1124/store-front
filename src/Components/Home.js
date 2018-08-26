import React, { Component } from 'react';
import movies from '../Data/movies.json'

class Home extends Component {

    componentDidMount () {
        console.log(movies)
    }


    render() {
        return (
            <div>
                <section className="top-container">
                    <table className="top-table">
                        <tr className="genre">
                            <th>Comedy</th>
                            <th>Drama</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td><img src="https://images.redbox.com/Images/EPC/boxartvertical/6131.jpg" alt="movie" /></td>
                            <td><img src="https://images.redbox.com/Images/EPC/boxartvertical/204841.jpg" alt="movie" /></td>
                            <td><img src="https://images.redbox.com/Images/EPC/boxartvertical/203219.jpg" alt="movie" /></td>
                        </tr>
                         <tr>
                            <td className="movie-title">Anchorman: The Legend of Ron Burgundy</td>
                            <td className="movie-title">The Yellow Birds</td>
                            <td className="movie-title">Avengers: Infinity War</td>
                        </tr>
                    </table>
                </section>
                <section className="bottom-container">
                    <table className="bottom-table">
                        <tr className="genre">
                            <th>Classic</th>
                            <th>Horror</th>
                            <th>Movies on Sale</th>
                        </tr>
                        <tr>
                            <td><img src="https://images.redbox.com/Images/EPC/boxartvertical/6324.jpg" alt="movie" /></td>
                            <td><img src="https://images.redbox.com/Images/EPC/boxartvertical/205526.jpg" alt="movie" /></td>
                            <td><img src="https://images.redbox.com/Images/EPC/boxartvertical/1328.jpg" alt="movie" /></td>
                        </tr>
                        <tr>
                            <td className="movie-title">Forrest Gump</td>
                            <td className="movie-title">Gehenna: Where Death Lives</td>
                            <td className="movie-title">Rocky</td>
                        </tr>
                    </table>
                </section>  
            </div>
        );
    }
}

export default Home;
