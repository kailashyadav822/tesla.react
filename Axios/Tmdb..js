import React, { useState } from 'react'
import axios from 'axios'
import './Tmdb.css'


function Tmdb() {

    let [query, setQuery] = useState('')
    let [movie, setMovie] = useState([])

    
    let API = '3335fdc275d0590c2e9ec1539185ef40'
   


    function getPosterURL(poster){
        return(
            `https://www.themoviedb.org/t/p/original${poster}`
        )
    }
    function handleChange(e) {

        setQuery(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=' + API + '&language=en-US&query=' + query + '&page=1&include_adult=false')
            .then((responce) => {
                setMovie(responce.data.results)
                console.log(responce.data.results)
                console.log(query)
                // console.log(movie)
                // setQuery(e.target.value)
            })
    }

    return (
        <div className='main-container'>
            <h2 className='logo'>Movie<span>Api</span></h2>
            <form onSubmit={handleSubmit}>
                <input type='text' value={query} placeholder='Enter Movie Name...' onChange={handleChange}></input>
                <button type='submit'>Search</button>

            </form>
            <div className='movies'>{
                movie.map((mov) => {
                    return (
                        <div className='movie' key={mov.id}>
                            <img src={getPosterURL(mov.backdrop_path)} alt=' image not showing'/>
                            <h3 className='title'>{mov.title}</h3>
                            <h3>Release date:{mov.release_date}</h3>
                            <h3>Rating:{mov.popularity}</h3>
                            {/* <p>{mov.overview}</p> */}

                        </div>

                    )

                }

                )}

            </div>

        </div>
    )
}

export default Tmdb