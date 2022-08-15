import {useState, useEffect} from 'react'
import './Location.css'

const Location = ({location}) => {

  return (
    <div>   
        <div className='location-bar'>
            <h2 className='title-location'>{location?.name}</h2>
            <ul className='data-location'>
                <li><span>Type: </span>{location?.type}</li>
                <li><span>Dimension: </span>{location?.dimension}</li>
                <li><span>Population: </span>{location?.residents.length}</li>
            </ul>
        </div>
    </div>
  )
}

export default Location