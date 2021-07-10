import React, { Component } from 'react';
import './ItemBoxStyles.css'
import ItemImage from './ItemImage';

class itemBox extends Component {
    render() {
        return (
            <div className='box' align='center'>
                <h1>{this.props.title}</h1>
                <ItemImage image={this.props.image}/>
                <h3 style={{color:'red',fontStyle:'bold'}}>{`$USD${this.props.price}`}</h3>
                <p>{this.props.desc}</p>
                
            </div>
        );
    }
}

export default itemBox;
