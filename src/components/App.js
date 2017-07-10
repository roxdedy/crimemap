import React, { Component } from 'react';
import axios from 'axios';
import CrimeMap from './map/CrimeMap';
import Header from './shared/Header';
import _ from 'lodash';
import styles from '../styles/app-styles.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Police Crime Map",
            crimes: []
        };
    }

    componentDidMount() {
        axios.get('https://data.police.uk/api/crimes-street/all-crime?poly=51.5178828,-0.1402102:51.5148666,-0.1370781:51.5159914,-0.1452190:51.5169734,-0.1460359:51.5178828,-0.1402102&date=2017-01')
            .then((resp) => {
                const crimes = resp.data.map((obj) => {
                    return ({
                        category: obj.category,
                        location: {
                            lat: parseFloat(obj.location.latitude),
                            lng: parseFloat(obj.location.longitude)
                        }
                    })
                });
                this.setState({ crimes });
            });
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <CrimeMap
                    containerElement={<div className="map__container" />}
                    mapElement={<div style={{ height: 100 + '%' }} />}
                    crimes={this.state.crimes}
                />
            </div>
        );
    }
}

export default App;