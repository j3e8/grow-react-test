import React from 'react';
import ReactDOM from 'react-dom';

import FindMyRepApp from './components/FindMyRepApp/FindMyRepApp.js';

window.addEventListener('load', function(e) {
  ReactDOM.render(<FindMyRepApp />, document.getElementById('react-app'));
});
