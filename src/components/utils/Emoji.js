import React from 'react'
import { Fade } from 'react-reveal'

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ''}
        aria-hidden={props.label ? 'false' : 'true'}
        style={{ display: 'inline-flex', overflow: 'hidden' }}
    >
        <Fade up>
        {props.symbol}
        </Fade>
    </span>
)
export default Emoji
