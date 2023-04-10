import React from 'react';
import {connect} from 'react-redux';
import {removeLastCharDialValue} from '../../actions/dialpad';
import './NumberDisplay.css';
import deleteSvg from '../../assets/icons/delete.svg';



const NumberDisplay = ({
        dialValue,
        removeLastCharDialValue
    }) => {

    let showBackspace = null;

    if (dialValue.length) {
        showBackspace = (
            <a className={'backspace'}
               onClick={ (e) => {
                   e.preventDefault();
                   removeLastCharDialValue();
               }}>
                <img src={deleteSvg}  alt=""/>
            </a>);
    }

    return (
        <div className={'number-display'}>
            {showBackspace}
            <p>{dialValue}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        dialValue: state.dialpad
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeLastCharDialValue: () => dispatch(removeLastCharDialValue())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberDisplay);


