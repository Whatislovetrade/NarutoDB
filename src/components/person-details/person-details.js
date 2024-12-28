import React, { Component } from 'react';

import './person-details.css';

export default class PersonDetails extends Component {

  render() {
    return (
      <div className="person-details card">
        <img className="person-image"
          src="https://i0.wp.com/www.toonsmag.com/wp-content/uploads/2023/09/naruto-1249229.jpg?fit=758%2C397&ssl=1" />

        <div className="card-body">
          <h4>Naruto Uzumaki</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Birthday</span>
              <span>October 10</span>
            </li>
            <li className="list-group-item">
              <span className="term">Clan</span>
              <span>Uzumaki</span>
            </li>
            <li className="list-group-item">
              <span className="term">Affiliation</span>
              <span>Konohagakure</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
