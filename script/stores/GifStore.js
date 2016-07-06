var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var GifConstants = require('../constants/constants');
var Giphy = require('../constants/Giphy');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _state = {
  imageObjects: [{
      images:{
        fixed_height:{url: "https://media4.giphy.com/media/o0vwzuFwCGAFO/200w.gif"}
      }
    }],
    focusImage : null
};

function setResults(input) {
  _state.imageobjects = input;
}

function setFocus(urlString){
  _state.focusImage = urlString;
}


var TodoStore = assign({}, EventEmitter.prototype, {

  // begin object modification

  // end modification

  emitChange: function() {
    console.log("emit method belongs to",this);
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getImageObjects : function(){
    return _state.imageObjects;
  },

  getFocusImage : function(){
    return _state.focusImage;
  },

  makeApiCall : function(){
    var searchTerm = string.split(" ").join("+");
    var url = Giphy.prefix + searchTerm + Giphy.suffix;
    AJAX.get(url,this.onGiphyResponse);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var searched;
  var focusImage;

  if(action.actionType === GifConstants.GIF_SEARCH) {
      searched = action.searched.trim();
      if (searched !== '') {
        setResults(searched);
        GifStore.emitChange();
      }
  }
  else if (action.actionType ===  GifConstants.GIF_FOCUS){
    focusImage = action.focusImage.trim();
    if (focusImage !== '') {
      setFocus(focusImage);
      GifStore.emitChange();
    }
  }
});

module.exports = TodoStore;
