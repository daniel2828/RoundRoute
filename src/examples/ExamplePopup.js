import React from 'react';
import { ReactTypeformEmbed } from '../components';
import './examples.scss';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import '../bootstrap.min.css';
class ExamplePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconColor: 'disabled',
      isDisabled: false
    };
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }
  closeForm() {
    this.setState({
      iconColor: 'primary',
      isDisabled: true
    });
  }

  render() {
    return (
      <div className="ExamplePopup col-12 ">
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
          onSubmit={this.closeForm}
        />
        <button
          className="btn btn-route-item"
          onClick={this.openForm}
          style={{ cursor: 'pointer' }}
          disabled={this.state.isDisabled}
        >
          {this.props.name}
        </button>
        <CheckCircleIcon
          className="CheckCircleIcon"
          fontSize="large"
          color={this.state.iconColor}
        />
      </div>
    );
  }
}

export default ExamplePopup;
