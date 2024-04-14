import React from 'react';
import PropTypes from "prop-types";

function ArraySample(props) {
    const { items } = props;

    return (
        <div>
            <h1>Item List</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}

            </ul>
        </div>
    )
}

ArraySample.prototype = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
}

export default ArraySample