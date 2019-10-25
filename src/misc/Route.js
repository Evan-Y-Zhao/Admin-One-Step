import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Route as ReactRoute } from 'react-router-dom'

export default class Route extends React.Component {

    static propTypes = {
        layout: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.node,
        ]),
        component: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.node,
        ]).isRequired,
    };

    render() {
        const { component, layout, ...rest } = this.props;
        
        let routeComponent = (props) => React.createElement(component, props);

        if (layout) {
            routeComponent = props =>
                React.createElement(layout, props, React.createElement(component, props));
        }

        return <ReactRoute {...rest} render={routeComponent} />;
    }
}