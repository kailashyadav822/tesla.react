import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Axiosdummy() {

    let [items, setItem] = useState([])
    // let [img, setimg] = useState('')

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((Response) => {
                console.log(Response.data.products)
                setItem(Response.data.products)
            })
    }, [])


    return (
        <>
            <h1>Ecommerce</h1>
            <div className='flex'>
            {items.map((name) => {
                return (
                    <>
                    <div className='box'>
                        <h2>{name.title}</h2>
                        <img src={name.thumbnail}></img>
                        <h3>price: ${name.price}</h3>
                    </div>
                        

                    </>
                )

            }
            )}</div>
        </>
    )
}

export default Axiosdummy