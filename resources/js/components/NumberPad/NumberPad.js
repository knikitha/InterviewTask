import React from 'react';
import { dialConfig } from '../../reducers/dialpad'
import Number from "./Number/Number";
import './NumberPad.css';

const NumberPad = () => {
    return (
        <ul className={'number-grid-container'}>
            {dialConfig.map((config, index) => {
                return <Number key={index} config={config}/>
            })}
        </ul>
    );
};

export default NumberPad;
