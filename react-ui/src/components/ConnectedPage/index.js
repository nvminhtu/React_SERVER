import React, { Component } from 'react';
//import fetch from 'cross-fetch';

class ConnectedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
  }
  componentDidMount() {
     fetch('/api/locations').then(res => res.json())
       .then(locations => this.setState({ locations }));
  }

   render() {
    return (
      <div className="home-page-container">
        {
          this.state.locations.map(location =>
            <li key={location.id}>
              <img src={location.image} alt={location.name} />
              {location.name}
            </li>)
        }
      </div>
    );
  }
  
}

export default ConnectedPage;