import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="nav-bar">
                    <span>Home</span>
                    <span>Comedy</span>
                    <span>Drama</span>
                    <span>Action</span>
                    <span>Classic</span>
                    <span>Horror</span>
                    <span>Movies on Sale</span>
                    <span>Whole Catalog</span>
                </nav>
            </div>
        );
    }
}

export default Navigation;
