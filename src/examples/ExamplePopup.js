import React from 'react';
import { ReactTypeformEmbed } from '../components';
import './examples.scss';

class ExamplePopup extends React.Component {
  constructor(props) {
    super(props);

    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <div className="ExamplePopup">
        <ReactTypeformEmbed
          popup
          autoOpen={false}
          url={this.props.url}
          hideHeaders
          hideFooter
          buttonText="Go!"
          style={{ top: 100 }}
          ref={tf => {
            this.typeformEmbed = tf;
          }}
        />
        <button
          className="btn btn-route-item"
          onClick={this.openForm}
          style={{ cursor: 'pointer' }}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default ExamplePopup;
