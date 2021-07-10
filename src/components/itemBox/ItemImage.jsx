import React, { Component } from 'react';
import './ItemBoxStyles.css'

class ItemImage extends Component {
    render() {
        return (
            <div>
                <img className="prod-img" src={this.props.image}/>
                
            </div>
        );
    }
}

export default ItemImage;
