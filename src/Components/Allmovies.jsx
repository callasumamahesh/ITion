import React, { useState } from 'react'
import MoviesObject from '../Movies.js'
import '../App.css'
import { useNavigate } from 'react-router-dom'
function Allmovies() {
    const navigate = useNavigate()
    const [movies,setMovies] = useState(MoviesObject)
    const [selectedLanguage,setSelectedLanguage] = useState([])
    const [selectedcountry,setSelectedCountry] = useState([])
    const [language, setLanguage] = useState([{ language: 'Hindi', ischecked: false },
    { language: 'Malayalam', ischecked: false },
    { language: 'Kannada', ischecked: false },
    { language: 'Tamil', ischecked: false },
    { language: 'English', ischecked: false },
    { language: 'Japanese', ischecked: false },
    { language: 'Chinese', ischecked: false },
    { language: 'Spanish', ischecked: false },
    { language: 'Korean', ischecked: false },
    { language: 'Telugu', ischecked: false }
    ])
    const [country, setCountry] = useState([
        { country: 'Austrial', ischecked: false },
        { country: 'Canada', ischecked: false },
        { country: 'Germany', ischecked: false },
        { country: 'France', ischecked: false },
        { country: 'United Kingdom', ischecked: false },
        { country: 'Ireland', ischecked: false },
        { country: 'India', ischecked: false },
        { country: 'Norway', ischecked: false },
        { country: 'Kuwait', ischecked: false },
        { country: 'Singapore', ischecked: false },
        { country: 'United States', ischecked: false }
    ])
    
    const handleCheckbox = (e) => {
        const clickedLanguage = e.target.value;
        if(clickedLanguage!== undefined){
            const filtered = MoviesObject.filter((item) => item.movielanguages.includes(clickedLanguage))
            if(selectedLanguage.includes(clickedLanguage)){
                const removefilter = filtered.filter((item) => item.movielanguages.includes(clickedLanguage))
                setMovies(removefilter)
            }
            else{
                setMovies(filtered)
            }
        }
        setSelectedLanguage((prev) => [...prev,clickedLanguage])
    }
    const handleCountry = (e) => {
        const clickedCountry = e.target.value;
        if(clickedCountry!==undefined){
            const filtered = MoviesObject.filter((item) => item.moviecountries.includes(clickedCountry))
            if(selectedcountry.includes(clickedCountry)){
                const removefilter = filtered.filter((item) => item.moviecountries !== clickedCountry)
                setMovies(removefilter)
            }
            else{
                setMovies(filtered)
            }
            setSelectedCountry((prev) => [...prev,clickedCountry])
        }
    }

    return (
        <div>
            <h1 className='head'>Watch Your Favourite Movie</h1>
            <h1 className='head'>Based on Language</h1>
            <section className="languages">
                {language.map((item) => {
                    return (
                        <div key={item.language} onClick={(e) => handleCheckbox(e)}>
                            <input type="checkbox" name={item.language} value={item.language} id={item.language} />
                            <label htmlFor={item.language}>{item.language}</label>
                        </div>
                    )
                })}
            </section>
            <h1 className='head'>Based on Country</h1>
            <section className='languages'>
                {country.map((item) => {
                    return (
                        <div key={item.country} onClick={(e) => handleCountry(e)}>
                            <input type="checkbox" id={item.country} value={item.country}/>
                            <label htmlFor={item.country}>{item.country}</label>
                        </div>
                    )
                })}
            </section>
            <div className='allmoviesdiv'>
                {movies.map((item) => {
                    return (
                        <div key={item.imdbmovieid} className='singlemoviediv' 
                            onClick={() => navigate((`/${item.imdbmovieid}`),{state:item})}>
                            <img src={item.moviemainphotos[0]} alt={item.movietitle} />
                            <p>{item.movietitle}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Allmovies