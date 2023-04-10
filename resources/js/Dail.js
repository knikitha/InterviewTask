import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {createStore} from "redux";
import Dialpad from "./containers/Dialpad/Dialpad";
import DeleteIcon from "./assets/icons/delete.svg";

const store = createStore(rootReducer);

class Dail extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className={'app-container'}>
                <Dialpad/>
            </div>
        </Provider>
    )
    ;
  }
}
export default Dail;

if (document.getElementById('app')) {
    ReactDOM.render(<Dail />, document.getElementById('app'));
}
