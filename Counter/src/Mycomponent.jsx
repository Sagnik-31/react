import React, {useState} from 'react'

function Mycomponent(){

    const [name, setName] = useState("None")
    const [age, setAge] = useState(0)

    const triggerAge = () =>{
        setAge(age+1)
    }

    const triggername = () => {

        setName("Sagnik")
    }

    return(<div>

        <p>{name}</p>
        <button onClick={triggername}>Set Name</button>

        <p>{age}</p>
        <button onClick={triggerAge}>Set Age</button>

    </div>);

}

export default Mycomponent