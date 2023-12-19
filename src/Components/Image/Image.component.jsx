import { useEffect, useState } from 'react'
import './Image.styles.scss'

const Image = (props) => {
    useEffect(() => {
        console.log(props.imgSrc);
    }, []);
    return (
        <>
            <img src={props.imgSrc}></img>
        </>
    )
}

export default Image
