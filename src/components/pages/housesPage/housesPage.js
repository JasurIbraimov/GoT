import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Fields} from '../../itemDetails';
import ErrorMessage from '../../error';
import GotService from '../../../services/requests';
import './housesPage.css'
import RowBlock from '../../rowBlock';

export default class HousesPage extends Component {
    gotService = new GotService();
    state = {
        selectedHouse: 1,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
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
                getData={this.gotService.getAllHouses}
                renderItem={(item) => item.name}
            />
        )
        
        const itemDetails = (
            <ItemDetails
                getData={this.gotService.getHouse} 
                itemId = {this.state.selectedHouse}>
                <Fields field="region" label="Region"/>
                <Fields field="words" label="Words"/>
                <Fields field="titles" label="Titles"/>
                <Fields field="ancestralWeapons" label="Ancestral Weapons"/>
            </ItemDetails>
        )

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
} 
