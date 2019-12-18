import React, {Suspense} from 'react';
import './App.scss';
import configureStore from './configureStore';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Provider} from "react-redux";

import DefaultLayout from "./containers/DefaultLayout";

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const store = configureStore();


const App = (props) => {
    return (
        <Provider store={store}>
            <Router>
                <main className={'main-body'}>
                    <Suspense fallback={loading()}>
                        <Switch>
                            <Route path={'/'} component={DefaultLayout}/>
                        </Switch>
                    </Suspense>
                </main>
            </Router>
        </Provider>
    );
};

export default App;
