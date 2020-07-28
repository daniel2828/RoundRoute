import React from 'react';

// import ExampleWidget from './ExampleWidget';

import ExamplePopup from './ExamplePopup';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MapContainer from '../components/Maps/MapContainer';
class Examples extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
    this.semi_routes = [
      { name: 'Barrio de Vegueta', url: 'https://roundroute.typeform.com/to/JeesrIPD' },
      { name: 'Plaza del pilar nuevo', url: 'https://roundroute.typeform.com/to/Z3EDaaVB' }
    ];
    this.renderRoutes = [];
    this.semi_routes.forEach(element => {
      this.renderRoutes.push(<ExamplePopup name={element.name} url={element.url} />);
    });
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    const mapStyles = {
      width: '80%',
      height: '80%'
    };
    return (
      <div>
        <Header />
        <div className="Examples">
          <div className="container">
            <h2>Primera zona</h2>
            <div className="Examples__popup-section row">{this.renderRoutes}</div>
          </div>
        </div>
        <MapContainer />
        <Footer />
      </div>
    );
  }
}
/*
<br />
<br />
<h2>Widget Mode Example</h2>
<br />
<div className="Examples__widget-section">
  <ExampleWidget />
</div>
<br />
<hr />
<br />
*/
export default Examples;
