import React from 'react';
import GifForm from './gifform.jsx';
import GifDisplay from './gifdisplay.jsx';

export default React.createClass({
  render : ()=>{
    return (
      <div>
        <GifForm />
        <GifDisplay />
      </div>
    );
  }
});
