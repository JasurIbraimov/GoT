import React, {Component} from 'react';
import ItemList from '../../itemList';
import ErrorMessage from '../../error';
import GotService from '../../../services/requests';
import {withRouter} from 'react-router-dom';
import './booksPage.css'
// import BooksItem from '../booksItem';

class BooksPage extends Component {
    gotService = new GotService();
    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        if(this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <ItemList 
            onItemSelected={(itemId) => {
                this.props.history.push(itemId);
            }}
            getData={this.gotService.getAllBooks}
            renderItem={(item) => item.name}
            />
        )
    }
} 
export default withRouter(BooksPage);