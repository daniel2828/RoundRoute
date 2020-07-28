import React from 'react';
import './Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <h1>Round Route</h1>
      </header>
    );
  }
}
export default Header;
