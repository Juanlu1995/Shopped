import React from 'react';
import { render } from 'react-dom';
import App from './App';
import {NODE_ENV} from './constants'

console.log(NODE_ENV);

const renderApp = () => render(<App />,document.getElementById('root'));

if (NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./App', renderApp)
}

renderApp();
