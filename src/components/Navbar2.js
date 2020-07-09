import React from 'react';
import { Link } from 'react-router-dom';

class Navbar2 extends React.Component {
    render(){
        return(
            <div>
                <nav className="nav-wrapper red darken-3">
                    <div className="container">
                        {/* <a className="brand-logo">Poke'Times</a> */}
                        <ul className="right">
                            <li><Link to='/'>Accueil</Link></li>
                            <li><Link to='/propos'>A props</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    };
};

export default Navbar2;