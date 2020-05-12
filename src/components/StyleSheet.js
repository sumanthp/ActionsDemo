import React from 'react'
import './mystyles.css'

function StyleSheet(props) {
    let className = props.primary? 'primary' : ''
    return (
        <div className={`{className} font-xl`}>
            <h2>Styles</h2>
        </div>
    )
}

export default StyleSheet
