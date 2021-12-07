import React, {Component} from 'react'
import './MagicMenuIndicator.css'

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
        return (
            <div className="navigation">
                {this.props.items ?
                    (
                        <ul>{
                            this.props.items.map((item, index) => (
                                <li key={index} className={item[0] === this.state.selected ? 'list active' : 'list'}
                                    onClick={() => this.selectElement(index, item[0])}>
                                    <a href="#">
                    <span className="icon">
                        {item[1]}
                    </span>
                                        <span className="texta">{item[0]}</span>
                                    </a>
                                </li>

                            ))
                        }
                            <div className="indicator"></div>
                        </ul>
                    )
                    : null

                }

            </div>
        );
    }
}

export default MagicMenuIndicator
