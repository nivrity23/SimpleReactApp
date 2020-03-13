/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import ListItems from './ListItems'

export default function Header({ listData }) {
    const [expandedView, setExpandedView] = useState(false)

    const expandedIcon = expandedView ? '-' : '+'

    const headerButtonColor = expandedView ? 'white' : '#0f4666';
    const headerTextColor = expandedView ? 'white' : 'black';
    const headerBackgroundColor = expandedView ? '#0f4666' : 'lightgrey';

    const listItems = (
        <div className='listBorderStyle'>
            <div>
                <ul>
                    <li className='listCategoryStyle'><span>{listData.category}</span></li>
                </ul>
                <span>{listData.data.map((list, index) => (
                    <ListItems listItem={list} key={index} />
                ))}</span>
            </div>
            <img src={listData.imageSrc} alt='image' />
        </div>
    )

    return (
        <React.Fragment>
            <div className='headerStyle' style={{ backgroundColor: headerBackgroundColor }}>
                <h2 style={{ color: headerTextColor }}> {listData.level}</h2>
                <p onClick={() => setExpandedView(!expandedView)} style={{ color: headerButtonColor }}>{expandedIcon}</p>
            </div>

            {expandedView ? listItems : <hr />}


        </React.Fragment>
    )
}

