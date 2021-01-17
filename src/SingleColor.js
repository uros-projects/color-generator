import React, { useState, useEffect } from 'react';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false)

    const bgColor = rgb.join(',')
    // console.log(bgColor); <<< [255, 255, 255]
    const hexValue = `#${hexColor}`;

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 2400)

        return () => clearTimeout(timeout)
    }, [alert])

    const handleClick = () => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
    }

    return (
        <article
            onClick={handleClick}
            className={`color ${index > 10 && 'color-light'}`}
            style={{ backgroundColor: `rgb(${bgColor})`}}   
        >
            <p className='percent-value'>{weight}%</p>            
            <p className='color-value'>{hexValue}</p>

            {alert && <p className='alert'>copied to clipboard</p>}         
        </article>
    )
}

export default SingleColor
