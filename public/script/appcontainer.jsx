import React from 'react';
import GifForm from './gifform.jsx';
import GifDisplay from './gifdisplay.jsx';

export default React.createClass({
  getInitialState: function() {
    return {images: ["https://media.giphy.com/media/3oEjHERZtBVgoMV5C0/giphy.gif"]};
  },
  render : function(){
    return (
      <div>
        <GifForm />
        <GifDisplay images={this.state.images}/>
      </div>
    );
  }
});
