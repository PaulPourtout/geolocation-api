import React from 'react';

const Icon = ({icon}) => (
    <img src={icon} alt={`icon ${icon}`} style={{maxHeight: '105px'}} />
)

export default Icon;
