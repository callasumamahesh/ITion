import React from 'react'
import { useLocation } from 'react-router-dom'

function SingleMovie() {
  const location = useLocation()
  const SingleMovie = location.state;
  return (
    <div className='singlepagemaindiv'>
      <div className='imgtag'>
        <img src={SingleMovie.moviemainphotos[0]} alt="" />
      </div>
      <div className='totalmovie'>
        <p className='movietitle'>Movie Title : {SingleMovie.movietitle}</p>
        <div className='countries'>
          <span> Genres : </span>
          {SingleMovie.moviegenres.map((item) => {
            return (
              <div className='mapdiv' key={item}>
                <p>{item} </p>
              </div>
            )
          })}
        </div>
        <div className='countries'>
          <span>Languages : </span>
          {SingleMovie.movielanguages.map((item) => {
            return (
              <div className='mapdiv' key={item}>
                <p>{item}</p>
              </div>
            )
          })}
        </div>
        <div className='countries'>
          <span>Countries : </span>{SingleMovie.moviecountries.map((item) => {
            return (
              <div className='mapdiv' key={item}>
                <p>{item}</p>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default SingleMovie