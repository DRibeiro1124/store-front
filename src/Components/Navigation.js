import React, { Component } from 'react';


class Navigation extends Component {
    render() {
    
        return (
            <div>
                <div className="nav-container">
                    <div className="nav nav1">Home</div>
                    <div className="nav nav2">Comedy</div>
                    <div className="nav nav3">Drama</div>
                    <div className="nav nav4">Action</div>
                    <div className="nav nav5">Classic</div>
                    <div className="nav nav6">Horror</div>
                    <div className="nav nav7">Movies on Sale</div>
                    <div className="nav nav8">All Movies</div>
                </div>
            </div>
        );
    }
}

export default Navigation;
