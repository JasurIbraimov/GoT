import React, {Component} from 'react';
import ItemDetails, {Fields} from '../../itemDetails';
import GotService from '../../../services/requests';

export default class BooksItem extends Component {
    gotService = new GotService();

    render() {
        return (
                <ItemDetails
                getData={this.gotService.getBook} 
                itemId = {this.props.bookId}>
                <Fields field="numberOfPages" label="Pages"/>
                <Fields field="publisher" label="Publisher"/>
                <Fields field="released" label="Released"/>
            </ItemDetails>
        )
    }
}