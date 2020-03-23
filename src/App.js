import React, {useEffect, useState} from 'react';
import Titlebar from "./components/Titlebar";
import PersonCircle from "./components/PersonCircle";
import './app.css'

function App() {
    let [dataset, setData] = useState(generateData())
    useEffect(() =>{
        setColor(1,"red")
    },[])

    function generateData() {
        let tmpdata = []
        for (let i = 0; i < 300; i++) {
            tmpdata.push(
                {
                    id:i,
                    x: Math.floor(Math.random()* document.documentElement.clientWidth-16),
                    y: Math.floor(Math.random()*(document.documentElement.clientHeight-100)+20),
                    color: "gray"
                }
                )
        }
        return tmpdata
    }

    function setColor(id, color) {

        setData( prevState =>{
            let tmp = [...prevState]
            tmp[id].color=color
            return tmp
        })
    }

  return (
    <div className="App">
        <Titlebar reset={generateData()} />
        <svg height={document.documentElement.clientHeight-80} width={document.documentElement.clientWidth-16}>
        {dataset.map(function (data, index)  {
            return <PersonCircle key={index} x={data.x} y={data.y} color={data.color}/>
        })}
        </svg>
    </div>
  )
}

export default App;
