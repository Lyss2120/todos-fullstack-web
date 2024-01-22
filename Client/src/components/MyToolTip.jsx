import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';



const MyToolTip = ({ id, children, title }) => {
    return (
        <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
            <small>{children}</small>
        </OverlayTrigger>
    )
}

export default MyToolTip