import React, {Component} from 'react'
import {MagicMenuIndicator} from "../components"
import {CameraOutline, ChatboxOutline, HomeOutline, PersonOutline, SettingsOutline} from "react-ionicons";
import SyntaxHighlighter from "react-syntax-highlighter"

const code = '<MagicMenuIndicator selected=\{this.state.selected\} items={\n' +
    '                    [\n' +
    '                        [\'Home\', <HomeOutline/>],\n' +
    '                        [\'Profile\', <PersonOutline/>],\n' +
    '                        [\'Message\', <ChatboxOutline/>],\n' +
    '                        [\'Photos\', <CameraOutline/>],\n' +
    '                        [\'Settings\', <SettingsOutline/>]\n' +
    '                    ]\n' +
    '                }\n' +
    '                    onSelectItem=\{this.selectElement\n' +
    '\}/>'

class MagicMenuIndicatorView extends Component {

    constructor() {
        super()
        this.state = {selected: 'Settings'}
        this.selectElement = this.selectElement.bind(this)
    }

    selectElement(index, name) {
        this.setState({selected: name})
    }

    render() {
        return (
            <div>
                    <h1>MagicMenuIndicator</h1>
                    <p>
                        This components creates fancy horizontal menu showing icons and text hint.
                    </p>
                <h2>Example</h2>
                <MagicMenuIndicator selected={this.state.selected} items={
                    [
                        ['Home', <HomeOutline/>],
                        ['Profile', <PersonOutline/>],
                        ['Message', <ChatboxOutline/>],
                        ['Photos', <CameraOutline/>],
                        ['Settings', <SettingsOutline/>]
                    ]
                }
                                    onSelectItem={this.selectElement}/>
                <div style={{color: '#ffffff', margin: '10px'}}>
                    Selected item: {this.state.selected}
                </div>
                <div style={{marginTop: '10px', textAlign: 'left'}}>
                    <h2>Code Example</h2>
                    <SyntaxHighlighter language='javascript'>
                        {code}
                    </SyntaxHighlighter>
                </div>
            </div>
        );
    }
}

export default MagicMenuIndicatorView