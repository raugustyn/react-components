import React, {Component} from 'react'
import './ImageWithDescription.css'

class ImageWithDescription extends Component {

    constructor() {
        super();

        this.state = {
            isCollapsed: true
        }
    }

    render() {
        return (
            <div>
            <div className="ImageWithDescription" >
                {
                    this.props.image ?
                        this.props.image
                        :
                        <img src={this.props.src} />
                }
                {
                    this.state.isCollapsed ?
                        <p className="InfoButton" onClick={() => this.setState({isCollapsed: false})}>i</p>
                        :
                        <p className="description" onClick={() => this.setState({isCollapsed: true})}>Description</p>
                }
            </div>
                </div>
        )
    }

}

export default ImageWithDescription