import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

function Button(props) {
    const { label = 'Submit', backgroundColor = 'blue', ...rest } = props;
    return (
        <button className={`bg-${backgroundColor}-500 hover:bg-${backgroundColor}-700 text-white font-bold py-2 px-4 rounded flex ${rest} cursor-pointer` } onClick={() => {
            props.onClick(true)
        }}>
            {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;