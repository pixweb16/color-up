// click event, onClick, state, props,
import React, {Component} from "react";
import './Colorup.css';

class Colorup extends Component {
    constructor(props) {
        super();
        this.state = { clickN:0, color: 'green' };

    }

    animate = (event) => {
        let color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        let clickN = this.state.clickN + 1;
        this.setState( {clickN: clickN, color: color} );
    }
    colorSpanClicked = () => {
        navigator.clipboard.writeText(this.state.color);
        alert(`Color copied !  ${this.state.color}`);
    }
    
    render() {
        console.log(this.state.color);
        console.log(this.state.num);

        // Render:
        return (            
            <div className="Colorup"> 
                <p style={{color: this.state.color}}>Clicks counter :  {this.state.clickN} </p>
                <p className="colorDetail">Current counter color: 
                    <span onClick={this.colorSpanClicked}>
                        {this.state.color}
                    </span>
                </p>
                <div className="btnDiv">
                    <button className="btnCss" onClick={this.animate}  >Change color</button>
                </div>
            </div>
        )
    }
}

export default Colorup;