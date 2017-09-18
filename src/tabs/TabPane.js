import React from 'react'
import PropTypes from 'prop-types'

export default class TabPane extends React.Component {

    static propTypes = {
        tab: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ])
    }

    render() {
        const {key, props: {tab}} = this
        return (
            <div key={key} tab={tab}>
                {this.props.children}
            </div>
        )
    }
}
