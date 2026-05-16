import React, {useState} from 'react'

function MyComponent(){

    const [car, setCar] = useState({year: 2025,
                                    make: "Ford", 
                                    model: "Mustang"})

    function handleMakeChange(e){
        setCar(c => ({...car, make: e.target.value}))
    }

    function handleYearChange(e){
        setCar(c => ({...car, year: e.target.value}))
    }

    function handleModelChange(e){
        setCar(c => ({...car, model: e.target.value}))
    }

    return(<div>
        <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

        <input type="text" value={car.make} onChange={handleMakeChange} ></input>
        <input type="number" value={car.year} onChange={handleYearChange}></input>
        <input type="text" value={car.model} onChange={handleModelChange}></input>

    </div>
    
    )

}

export default MyComponent