import React, { Component } from 'react'; 
import Carousel from './Carousel';
import Content from './Content';
import MiniNav from './MiniNav';
import './home.css';

class Home extends Component {
    render() {
        return(
            <div className='home'>
                <Carousel />
                <MiniNav />
                <Content />

            </div>
        )
    }
}

export default Home; 