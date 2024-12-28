import React, { Component } from 'react';

import './random-villages.css';

export default class RandomVillages extends Component {

  state = {
    population: null,
    country: null
  }

  render() {
    return (
      <div className="random-villages jumbotron rounded">
        <img className="village-image"
             src="https://pm1.aminoapps.com/7570/50800abf1e3361213d038d24ef7f19371d4a34cdr1-1024-576v2_hq.jpg" />
        <div>
          <h4>Konohagakure</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>1400</span>
            </li>
            <li className="list-group-item">
              <span className="term">Country</span>
              <span>Fire</span>
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
