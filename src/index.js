// Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './App';

// Service workers
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('main'));
registerServiceWorker();
