import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Fields} from '../../itemDetails';
import ErrorMessage from '../../error';
import GotService from '../../../services/requests';
import './characterPage.css'
import RowBlock from '../../rowBlock';

export default class CharacterPage extends Component {

    gotService = new GotService();
    state = {
        selectedChar: 130,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
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
        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={(item) => item.name}
            />
        )
        
        const itemDetails = (
            <ItemDetails 
                getData={this.gotService.getCharacter}
                itemId = {this.state.selectedChar}>
                <Fields field="gender" label="Gender"/>
                <Fields field="born" label="Born"/>
                <Fields field="died" label="Died"/>
                <Fields field="culture" label="Culture"/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}