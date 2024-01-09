import { useEffect, useState } from 'react'
import './Image.styles.scss'

const Image = (props) => {

    return (
        <>
            <img src={props.imgSrc} className='gallery-item'></img>
        </>
    )
}

export default Image
