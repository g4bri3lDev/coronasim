import React, {useEffect, useState} from 'react'

export default function PersonCircle(props) {
    // let [x, setX] = useState(props.x)
    // let [y, setY] = useState(props.y)
    let [radius, setRadius] = useState(10)
    // let [color, setColor] = useState(props.color)
    //
    // // useEffect(() => {
    // //     setX(props.x)
    // //     setY(props.y)
    // //     setColor(props.color)
    // // }, [props.x, props.y, props.color])

    return (
        <circle cx={props.x} cy={props.y} r={radius} fill={props.color}/>
    )
}