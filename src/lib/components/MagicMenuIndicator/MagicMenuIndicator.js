import React, {Component} from 'react'
import './MagicMenuIndicator.css'
import styled from "styled-components"

// see https://egghead.io/lessons/react-style-pseudo-selectors-and-classes-in-styled-components
const Indicator = styled.div`
  position: absolute;
    top: -50%;
    width: 70px;
    height: 70px;
    background: ${props => props.indicatorColor || '#29fd53'};
    border-radius: 50%;
    border: 6px solid ${props => props.maskColor || 'black'};
    transition: 0.5s;

    ::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -22px;
      width: 20px;
      height: 20px;
      background: transparent;
      border-top-right-radius: 20px;
      box-shadow: 0px -10px 0 0 ${props => props.maskColor || 'black' };      
    }

    :after {
    content: '';
    position: absolute;
    top: 50%;
    right: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-left-radius: 20px;
    box-shadow: 0px -10px 0 0 ${props => props.maskColor || 'black' };
}
`

class MagicMenuIndicator extends Component {

    constructor(props) {
        super()

        const selected = props.selected || props.items ? props.selected || props.items[0][0] : ''
        this.state = {selected}
        this.selectElement = this.selectElement.bind(this)
    }

    selectElement(index, name) {
        if (this.props.onSelectItem) {
            this.props.onSelectItem(index, name)
        }
        this.setState({
            selected: name
        })
    }

    render() {
        const extractProperty = (name, defaultValue) => { return this.props[name] ? this.props[name] : defaultValue }
        const width = this.props.items ? 50 + 70 * this.props.items.length + 'px' : 400
        const color = extractProperty('color', '#222327')
        return (
            <div className="navigation" style={{ width, background : extractProperty('backgroundColor', '#fff') }}>
                {this.props.items ?
                    (
                        <ul style={{width: 70 * this.props.items.length + 'px'}}>
                            {
                                this.props.items.map((item, index) => (
                                    <li key={index} className={item[0] === this.state.selected ? 'list active' : 'list'}
                                        onClick={() => this.selectElement(index, item[0])}>
                                        <a href="#">
                                            <span className="icon" style={{ color }}>
                                                {item[1]}
                                            </span>
                                            <span className="texta" style={{ color }}>{item[0]}</span>
                                        </a>
                                    </li>
                                ))
                            }
                            <Indicator className="indicator"
                                maskColor={extractProperty('maskColor', '#222327')}
                                indicatorColor={extractProperty('indicatorColor', '#29fd53')}
                                />
                        </ul>
                    )
                    : null

                }

            </div>
        );
    }
}

export default MagicMenuIndicator
