import React from 'react';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import NamedComponent from './NamedComponent';

const App = () => {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
      <NamedComponent name="Harshit Joshi"/>

    </div>
  );
};

export default App;
