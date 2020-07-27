import React from 'react';
import { ReactTypeformEmbed } from '../components';

const ExampleWidget = () => {
  return (
    <div className="ExampleWidget">
      <ReactTypeformEmbed popup={false} url="https://roundroute.typeform.com/to/JeesrIPD" />
    </div>
  );
};

export default ExampleWidget;
