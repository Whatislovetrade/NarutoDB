import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';

import './random-villages.css';

export default class RandomVillages extends Component {

  swapiService = new SwapiService()

  state = {
    characters: null,
    nameVillage: null,
    id: null,
  }

  constructor() {
    super()
    this.updateVillages()
  }


  updateVillages() {
    const id = Math.floor(Math.random() * 20 + 2)
    this.swapiService.getVillage(id)
      .then((village) => {
        this.setState({
          id,
          nameVillage: village.name,
          characters: village.characters[2]
        })
    })
  }

  render() {
    const {characters, nameVillage, id} = this.state
    return (
      <div className="random-villages jumbotron rounded">
        <img className="village-image"
             src="https://pm1.aminoapps.com/7570/50800abf1e3361213d038d24ef7f19371d4a34cdr1-1024-576v2_hq.jpg" />
        <div>
          <h4>{nameVillage}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{characters}</span>
            </li>
            <li className="list-group-item">
              <span className="term">ID</span>
              <span>{id}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Tailed beasts</span>
              <span>1</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
