import React from 'react'
import useFetch from '../hooks/useFetch'
import './Card.css'

const CardResidents = ({url}) => {

  const resident = useFetch(url);

  return (
    <article className='card'>
        
        <header>
            <img src={resident?.image} alt={`image of ${resident?.name}`} className='card-img'></img>
        </header>
        
        <div className='pm'>

            <h3>{resident?.name} </h3>

            <div className='status'>
                <div className={resident?.status === 'Alive' ? 'circle' : 'circle-dead'}></div>
                <span className='status-info'>{resident?.status}</span>
            </div>
            
            <ul className='data-resident'>
                <li><span>Species:<br></br></span>{resident?.species} </li>
                <li><span>Origin: <br></br></span>{resident?.origin.name} </li>
                <li><span>Episodes where appear: <br></br></span>{resident?.episode.length} </li>
            </ul>
        </div>

    </article>
  )
}

export default CardResidents