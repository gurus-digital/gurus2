import React from "react"
import {
    TransitionGroup,
    Transition as ReactTransition,
} from "react-transition-group"

const timeout = 250
const getTransitionStyles = {
    entering: {
        position: 'absolute',
        opacity: 0,
        transform: 'scale(.9)',
    },
    entered: {
        transition: `opacity ${timeout}ms ease-in-out`,
        opacity: 1,
        transform: 'scale(1)',
    },
    exiting: {
        transition: `all ${timeout}ms ease-in-out`,
        opacity: 0,
        transform: 'scale(.9)',
    },
}

class Transition extends React.PureComponent {
    render() {
        const { children, location } = this.props

        return (
            <TransitionGroup>
                <ReactTransition
                    key={location.pathname}
                    timeout={{
                        enter: timeout,
                        exit: timeout,
                    }}
                >
                    {status => (
                        <div id="main"
                            style={{
                                ...getTransitionStyles[status],
                            }}
                        >
                            {children}
                        </div>
                    )}
                </ReactTransition>
            </TransitionGroup>
        )
    }
}

export default Transition
