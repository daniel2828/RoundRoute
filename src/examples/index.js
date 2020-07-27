import React from 'react';

// import ExampleWidget from './ExampleWidget';

import ExamplePopup from './ExamplePopup';

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
    return (
      <div className="Examples">
        <div className="container">
          <h1>RoundRoute</h1>
          <p>Ruta de prueba</p>

          <h2>Primera zona</h2>
          <div className="row">
            <div className="Examples__popup-section col-6">{this.renderRoutes}</div>
          </div>
        </div>
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
