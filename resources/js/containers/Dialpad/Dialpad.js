import React, {Component} from 'react';
import NumberPad from "../../components/NumberPad/NumberPad";
import './Dialpad.css';
import NumberDisplay from "../../components/NumberDisplay/NumberDisplay";
import Popup from 'reactjs-popup';
import dialpad from '../../reducers/dialpad';
class Dialpad extends Component {

    handleClick = () => {
    debugger
      }
    render() {
        return (
            <div className={'top-panel'}>
                <h1>Dailpad</h1>
                <NumberDisplay/>
                <NumberPad/>
                {/* <button onClick={this.handleClick}>click</button> */}
                <Popup trigger={<button className="button"><span onClick={this.handleClick}>call</span> </button>} modal>
                    <span className={'call-modal'}> Calling ..  </span>
                </Popup>
                
            </div>
        );
    }
}

export default Dialpad;
