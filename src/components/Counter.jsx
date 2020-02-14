import React from 'react';
import { AppContext } from '../context/AppContext';
class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.inc = this.inc.bind(this);
        //  this.dec = this.dec.bind(this);
        // this.state = {
        //     count : 10
        // }
        this.inputRef = null;

    }


    // inputRef;
    state = {
        count: 10
    }

    change = (evt) => {
        let count = Number(evt.target.value);
        this.setState({ count: count });

    }

    inc() {
        let count = this.state.count + 1;
        this.setState({ count: count });
        console.log("state count :" + this.state.count);
    }

    dec = () => {
        let count = this.state.count - 1;
        this.setState({ count: count });
    }

    update = () => {
        const count = this.inputRef.value ? Number(this.inputRef.value) : this.inputRef.value;
        this.setState({ count: count });
    }

    render() {

        return (
            //return the JSX;
            <div>
                <p>Counter : {this.props.title} -- {this.state.count}</p>
                <p>This is a react class component</p>
                <div>
                    <p>App name : {this.context.appName}</p>
                    <p>User name : {this.context.userName}</p>
                </div>
                <button id="inc" onClick={this.inc}>Increment</button> &nbsp;
        <button onClick={this.dec}> Decrement</button>
                <div>
                    count: <input type="number" onChange={this.change} value={this.state.count} />
                    <div>
                        count: <input type="number" ref={r => this.inputRef = r} /> &nbsp;
          <button onClick={this.update}>Update</button>
                    </div>
                </div>
            </div>

        );
    }

}
Counter.contextType = AppContext;
export default Counter;
