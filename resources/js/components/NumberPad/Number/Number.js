import React from 'react';
import {connect } from 'react-redux';
import { appendDialValue } from '../../../actions/dialpad';
import './Number.css';

const Number = (
    {
        config,
        dispatch
    }
) => {
    return (
        <li className={'num-el'} onClick={() => {dispatch(appendDialValue(config[0]));}}>
            <span className={'num'}>{config[0]}</span>
            <span className={'letters'}>{config[1]}</span>
        </li>
    );
};

export default connect()(Number);
