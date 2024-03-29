import React, { createContext, useState, useEffect } from 'react'
const Context = createContext()

function ContextProvider(props) {
    const [ allPhotos, setAllPhotos ] = useState([])

    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])

    return (
        <Context.Provider value={{allPhotos}}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }
