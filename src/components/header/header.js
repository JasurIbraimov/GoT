import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #fff;
    padding: 20px;
    margin-bottom: 20px
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
    &:hover {
        transition: .25s all
        color: rgb(68, 181, 216)
    }
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
        border-right: 1px solid #fff;
        padding: 0 20px 0 0;
        &:nth-child(3) {
            border-right: none
        }
        &:hover {
            transition: .25s all
            color: rgb(68, 181, 216)
        }
    }
`;

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <Link to="/">
                Game of Thrones DB
                </Link>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    <Link to="/characters/">Characters</Link>
                </li>
                <li>
                    <Link to="/houses/">Houses</Link>
                </li>
                <li>
                    <Link to="/books/">Books</Link>   
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;