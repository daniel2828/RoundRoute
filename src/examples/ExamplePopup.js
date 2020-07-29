import React from 'react';
import { ReactTypeformEmbed } from '../components';
import './examples.scss';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RoomIcon from '@material-ui/icons/Room';
import '../bootstrap.min.css';
class ExamplePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconColor: 'disabled',
      mapColor: 'disabled',
      isDisabled: true
    };
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }
  enableOption() {
    this.setState({ isDisabled: false, mapColor: 'active' });
    console.log('Enable');
  }
  closeForm() {
    this.setState({
      iconColor: 'primary',
      isDisabled: true
    });
    this.props.enableCall(this.props.id + 1);
  }

  render() {
    return (
      <div className="full-item ">
        <h2 className="title-item ">{this.props.name}</h2>
        <div className="ExamplePopup row" disabled={this.state.isDisabled}>
          <div className="col-3">
            <RoomIcon className="map-icon" fontSize="large" color={this.state.mapColor} />
          </div>

          <div className="col-5 ">
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
              Comenzar
            </button>
          </div>
          <div className="col-4">
            <CheckCircleIcon
              className="CheckCircleIcon"
              fontSize="large"
              color={this.state.iconColor}
            />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    );
  }
}

export default ExamplePopup;
