import React, {Component} from 'react';
import {ImageWithDescription} from "../lib";
import './View.css'

class ImageWithDescriptionView extends Component {
    render() {
        return (
            <div>
                <h1>Image with description</h1>

                <h2>Example</h2>
                <ImageWithDescription src="./img/SampleImage.png" />
            </div>
        )
    }
}

export default ImageWithDescriptionView;