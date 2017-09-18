import React from 'react'
import className from 'classnames'
import PropTypes from 'prop-types'
import TabPane from './TabPane'


export default class Tabs extends React.Component {

    static TabPane = TabPane

    static propTypes = {
        activeKey: PropTypes.string,
        onChange: PropTypes.func
    }

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(activeKey) {
        this.props.onChange && this.props.onChange(activeKey)
    }

    buildTab() {
        const {activeKey} = this.props
        return React.Children.map(this.props.children, child => {
            const {key, props: {tab} } = child
            let className = 'nav-link'

            if (key === activeKey) {
                className = `${className} active`
            } else {
                className = `${className} text-primary`
            }

            return (
                <li key={key} className="nav-item" onClick={e => this.handleClick(key)}>
                    <span className={className}>{tab}</span>
                </li>
            )
        })
    }

    buildContent() {
        const {activeKey} = this.props
        return React.Children.map(this.props.children, child => {
            const {key, props: {children} } = child
            return key === activeKey ? (
                <div style={{marginTop: 10}}>
                    {children}
                </div>
            ): null
        })
    }

    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    {this.buildTab()}
                </ul>
                {this.buildContent()}
            </div>
        )
    }
}
