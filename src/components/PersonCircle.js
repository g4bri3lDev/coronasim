import React, {useMemo} from 'react'

const PersonCircle = React.memo((props)=> {
    // let [x, setX] = useState(props.x)
    // let [y, setY] = useState(props.y)
    // let [radius, setRadius] = useState(8)
    // let [color, setColor] = useState(props.color)
    //
    // // useEffect(() => {
    // //     setX(props.x)
    // //     setY(props.y)
    // //     setColor(props.color)
    // // }, [props.x, props.y, props.color])

    return (
        <circle cx={props.x} cy={props.y} r={props.radius} fill={props.color}/>
    )
})
export default PersonCircle