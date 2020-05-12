import React from 'react'

const headingStyle = {
    fontSize : '70px',
    color: 'blue'
}

function Inline() {
    return (
        <div>
            <h2 style={headingStyle}>Inline Styles</h2>
        </div>
    )
}

const heading = {
    fontSize : '70px'

}

export default Inline
