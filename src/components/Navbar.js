import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../One-Piece-logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                <img src={logo} alt="Your SVG" width={160} />
               </Link> 
               <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                      <h4>Products</h4> 
                       <FontAwesomeIcon icon="fas fa-shopping-cart" style={{color: "#1862e2",}} />
                    </Link>
                 </li>
               </ul>
               <Link to="/cart" className="ml-auto">
                  <ButtonContainer>
                      <i className="fas fa-shopping-cart">  Cart</i>
                  </ButtonContainer>
               </Link>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3 rem;
    text-transform:capitalize;
}
`;
