import React, { Component } from 'react';
import { ReactTypeformEmbed } from '../components';
import './examples.scss';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RoomIcon from '@material-ui/icons/Room';
import Modal from 'react-bootstrap/Modal';
import '../bootstrap.min.css';
import Card from 'react-bootstrap/Card';

import MapContainer from '../components/Maps/MapContainer';
class ExamplePopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconColor: 'disabled',
      mapColor: 'disabled',
      isDisabled: true,
      setIsOpen: false
    };
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    //Modal open and close
    this.showModal = () => {
      this.setState({ setIsOpen: true });
    };

    this.hideModal = () => {
      this.setState({ setIsOpen: false });
    };
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
        <Card>
          <Card.Body>
            <Card.Title>
              <h2 className="title-item ">{this.props.name}</h2>
            </Card.Title>
            <Card.Text>
              <div className="ExamplePopup row" disabled={this.state.isDisabled}>
                <div className="col-3">
                  <RoomIcon
                    className="map-icon"
                    fontSize="large"
                    color={this.state.mapColor}
                    onClick={this.showModal}
                  />
                  <Modal className="map-modal" show={this.state.setIsOpen} onHide={this.hideModal}>
                    <Modal.Body>
                      <MapContainer />
                    </Modal.Body>
                    <Modal.Footer>
                      <button onClick={this.hideModal}>Aceptar</button>
                    </Modal.Footer>
                  </Modal>
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
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ExamplePopup;
