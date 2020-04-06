import React, {useCallback, useEffect, useState} from 'react';
import Titlebar from "./components/Titlebar";
import PersonCircle from "./components/PersonCircle";
import {useInterval} from "./UseInterval"
import './app.css'

function App() {
    const width = document.documentElement.clientWidth - 16
    const height = document.documentElement.clientHeight - 80
    const circleRadius = 8

    let [people, setPeople] = useState(100)
    let [dataset, setData] = useState(generateData())
    let [running, setRunning] = useState(false)

    function generateData() {

        let tmpdata = []
        for (let i = 0; i < people; i++) {
            tmpdata.push(
                {
                    id: i,
                    x: Math.floor(Math.random() * (width - 20) + 10),
                    y: Math.floor(Math.random() * (height - 20) + 10),
                    xVelocity: Math.random() * 2 - 1,
                    yVelocity: Math.random() * 2 - 1,
                    color: i === 0 ? "red" : "gray",
                    age: Math.floor(Math.random() * 99 + 1)
                }
            )
        }
        return tmpdata
    }

    function setColor(id, color) {

        setData(prevState => {

            let tmp = [...prevState]
            tmp[id].color = color
            return tmp
        })
    }

    const moveCircle = ((circle) => {
        if (circle.x - circleRadius <= 0 || circle.x + circleRadius >= width) {
            circle.xVelocity = -circle.xVelocity
            circle.x = circle.x + circle.xVelocity
            circle.y = circle.y + circle.yVelocity
        } else if (circle.y + circleRadius <= 0 || circle.y + circleRadius >= height) {
            circle.yVelocity = -circle.yVelocity
            circle.x = circle.x + circle.xVelocity
            circle.y = circle.y + circle.yVelocity
        } else {
            circle.x = circle.x + circle.xVelocity
            circle.y = circle.y + circle.yVelocity
        }
        return circle
    })
    const loop = (() => {
        for (let i = 0; i < people; i++) {
            setData(prevState => {
                let tmp = [...prevState]
                tmp[i] = moveCircle(tmp[i])
                return tmp
            })
        }
    })


    useInterval(() => {
        loop()
    }, running ? 10 : null)

    return (
        <div className="App">
            <Titlebar reset={generateData()} toggle={() => {
                setRunning(!running)
            }}/>
            <svg height={height} width={width}>
                <rect width={width} height={height} strokeWidth={2} fill="white" stroke="black"/>
                {dataset.map(function (data, index) {
                    return <PersonCircle key={index} x={data.x} y={data.y} color={data.color} radius={circleRadius}/>
                })}
            </svg>
        </div>
    )
}

export default App;
