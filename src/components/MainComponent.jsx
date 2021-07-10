import React, { Component } from 'react';
import ItemBox from './itemBox/ItemBox'
import Iphone12mini from '../images/products/iphon12mini.png'


class MainComponent extends Component {
    render() {
        return (
            <div style={{display:'flex'}}>
                <ItemBox title="Iphone 12 mini" price="99" desc="Apple iPhone 12 Mini was officially released on October 13, 2020. " image={Iphone12mini}/>
                <ItemBox title="Iphone 12 " price="1090" desc="The iPhone 12 and iPhone 12 mini are part of Apple's latest generation of smartphones, offering OLED displays, "/>
                <ItemBox title="Iphone 12 Pro" price="1220" desc="The iPhone 12 Pro is equipped with a new seven-element Wide camera with an f/1.6 aperture, which brings 27 percent improved low-light performance for photos and videos."/>
                <ItemBox title="Iphone 12 ProMax" price="1590" desc="The iPhone 12 Pro Max display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. "/>
                <ItemBox title="IWatch" price="790" desc="Apple Watch is a wearable smartwatch that allows users to accomplish a variety of tasks, including making phone calls, sending text messages and reading email. "/>
            </div>
        );
    }
}

export default MainComponent;
