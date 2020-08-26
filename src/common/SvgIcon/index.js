import React from 'react';
import { ReactSVG } from 'react-svg';

const SvgIcon = (props) =>
    props.src.split('.')[1] !== 'svg' ? (
        <img alt='phone' src={`/img/svg/${props.src}`} />
    ) : (
        <ReactSVG {...props} src={`/img/svg/${props.src}`} />
    );

export default SvgIcon;
