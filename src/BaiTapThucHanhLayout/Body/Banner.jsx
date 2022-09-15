import React, { Component } from 'react'
import '../../assests/style.css'

export default class Banner extends Component {
    render() {
        return (
            <div className='banner'>
                <div className="container">
                    <div className="banner__content">
                        <h1>A warm welcome!</h1>
                        <p>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                        <a href="">Call to action</a>
                    </div>
                </div>
            </div>
        )
    }
}
