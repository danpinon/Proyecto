import React from 'react'
import {
    Link
} from 'react-router-dom'

export default function Articles(props) {
    return (
        <div>
            articles
            {
                props.todosLosArticulos.map(e => {
                    return (
                        <>
                        <Link to={`/${e.slug}`}>
                            <p>{e.title}</p>
                        </Link>
                        <p>{e.title}</p>
                        <p>{e.date}</p>
                        <img src={e.imageUrl}/>
                        </>
                    )
                })
            }
        </div>
    )
}
