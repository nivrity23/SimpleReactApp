import React from 'react'
import './ListStyle.css'

export default function ListItems({ listItem }) {
    return (
        <ul >
            <li className='listItemStyle'>
                <span>{listItem}</span>
            </li>
        </ul>
    )
}
