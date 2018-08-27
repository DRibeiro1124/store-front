import React, { Component } from 'react';
import movies from '../Data/movies.json'

class Home extends Component {

    componentDidMount () {
        console.log(movies)
    }


    render() {
        return (
            <div>
                <header className="featured-film">
                    <div className="featured-film-img">
                        <img src="https://images.redbox.com/Images/EPC/boxartvertical/6860.jpg" alt="feature" />
                    </div>
                    <div className="featured-film-info">
                        <h1>Featured Movie:</h1>
                        <h1>Titanic</h1>
                        <p>Leonardo DiCaprio and Oscar-nominee Kate Winslet light up the screen as Jack and Rose, the young lovers who find one another on the maiden voyage of the 'unsinkable' R.M.S. Titanic. But when the doomed luxury liner collides with an iceberg in the frigid North Atlantic, their passionate love affair becomes a thrilling race for survival. From acclaimed filmmaker James Cameron comes a tale of forbidden love and courage in the face of disaster that triumphs as a true cinematic masterpiece</p>
                    </div>    
                </header>>
                <div className="movie-container">
                    <div className="movie box1">Movie Selections:</div>
                    <div className="movie box2">Comedy</div>
                    <div className="movie box3">Drama</div>
                    <div className="movie box4">Action</div>
                    <div className="movie box5">Classic</div>
                    <div className="movie box6">Horror</div>
                    <div className="movie box7">Movies on Sale</div>
                    <div className="movie box8">All Movies</div>
                </div>
            </div>
        );
    }
}

export default Home;


