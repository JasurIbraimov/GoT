import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../error';
import CharacterPage from '../pages/characterPage';
import BooksPage from '../pages/booksPage';
import HousesPage from '../pages/housesPage';
import BooksItem from '../pages/booksItem';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './app.css';


export default class App extends Component {


    state = {
        showRandomChar: true,
        error: false
    }
    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        const char = this.state.showRandomChar ? <RandomChar/> : null;
        return (
            <Router>
                <div className="app">
                    <Container>
                        <Header/>
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {char}
                                <button 
                                    className="toggle-btn"
                                    onClick={this.toggleRandomChar}>Toggle random character</button>
                            </Col>
                        </Row>
                       <Switch>
                           <Route path="/characters/">
                                <CharacterPage/>
                           </Route>
                           <Route exact path="/books/">
                                <BooksPage/>
                           </Route>
                           <Route path="/houses/">
                                <HousesPage/>
                           </Route>
                           <Route path="/books/:id" render={
                               ({match}) => {
                                   const {id} = match.params;
                                   return <BooksItem bookId={id}/>
                               }
                           } />
                        </Switch>
                    </Container>
                </div>
            </Router>
        );
    }
}