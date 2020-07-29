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
    let i = 0;
    this.enableDisableOption = this.enableDisableOption.bind(this);
    this.childReferences = [];
    let reference;
    this.semi_routes.forEach(element => {
      reference = React.createRef();
      this.childReferences.push(reference);
      this.renderRoutes.push(
        <ExamplePopup
          id={i}
          name={element.name}
          url={element.url}
          enableCall={this.enableDisableOption}
          key={i}
          ref={reference}
        />
      );
      i++;
    });
  }
  componentDidMount() {
    this.childReferences[0].current.enableOption();
  }
  openForm() {
    this.typeformEmbed.typeform.open();
  }
  enableDisableOption(keyElement) {
    // Enable next option
    console.log(this.childReferences.length);
    if (keyElement < this.childReferences.length) {
      this.childReferences[keyElement].current.enableOption();
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="Examples">
          <div className="container">
            <h2>Primera zona</h2>
            <div className="Examples__popup-section">{this.renderRoutes}</div>
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
