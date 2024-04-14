import React from 'react'
import PropTypes from "prop-types";

const Student = (props) => {
    return (
        <div className='student'>
            <table>
                <tr>
                    <th>Name</th>
                    <td>{props.name}</td>
                </tr>

                <tr>
                    <th>Age</th>
                    <td>{props.age}</td>
                </tr>

                <tr>
                    <th>isMarried</th>
                    <td>{props.isMarried ? "Yes" : "No"}</td>
                </tr>
            </table>
        </div>
    )
}


Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isMarried: PropTypes.bool
};

export default Student;
