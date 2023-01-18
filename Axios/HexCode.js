import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './HexCode.css'

function HexCode() {

    let [show, setShow] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((Response) => {
                console.log(Response.data)
                setShow(Response.data)
            })
    }, [])


    return (
        <>
            <h1>Axios</h1>
            <div className='flex'>
            {show.map((name,index)=>{
                if(index<100)
                return (
                <div className='box'>
                <img className='img' src={name.thumbnailUrl}></img>
                <h3 className='h3'>{name.title}</h3>
                </div>
                )
            })}
            </div>

        </>
    )
}

export default HexCode