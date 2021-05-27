import React from 'react'
import { useParams } from 'react-router-dom'

export default function Article(props) {
    //Hooks -  ESTADOS

    const route = useParams()
    const { slug } = route
    //FUNCIONES

    //Encontrar dentro de todos los articulos, mi articulo.
    const singlePost = props.todosLosArticulos.filter((e => {
        return e.slug === slug
    }))

    const { title, description, imageUrl, photoAuthor } = singlePost[0]

    return (
        <div>
            <p>{title}</p>
            <p>{description}</p>
            <img src={imageUrl} alt='fotografia'/>
            <p>{photoAuthor}</p>
        </div>
    )
}
