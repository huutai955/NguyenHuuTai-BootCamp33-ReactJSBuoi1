import React, { Component } from 'react'
import '../../assests/style.css'

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Start Bootstrap</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fa-solid fa-bars"></i>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className='header__ul d-flex'>
                                    <li className='header__li active'><a href="">Home</a></li>
                                    <li className='header__li'><a href="">About</a></li>
                                    <li className='header__li'><a href="">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        )
    }
}
