import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


class Afficher extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                   <Route exact path="/" component={Home} />
                   <Route path='/about' component={About} />
                   <Route path='/contact' component={Contact} />
                </div>
            </BrowserRouter>
        );
    };
};

export default Afficher;