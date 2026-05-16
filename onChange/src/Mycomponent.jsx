import React, {useState} from 'react';
// onChange = triggers a function everytime a value of input changes.
// used within form elements

function Mycomponent(){
    
    const [name, setName] = useState("Random")
    const [number, setNum] = useState(0)
    const [pay, setPay] = useState()

    const changename = (e) => {
        setName(e.target.value)
    }

    const displaynum = (e) => {
        setNum(e.target.value)

    }
    
    const Payment = (e) => {
        setPay(e.target.value)
    }

    return(<div>
    <input type="text" value={name} onChange={changename}/>
    <p>Name: {name}</p>

    <input type="number" value={number} onChange={displaynum}></input>
    <p>Quantity: {number}</p>

    <select value={pay} onChange={Payment}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="GiftCard">GiftCard</option>
    </select>
    <p>Payment: {pay}</p>


    </div>);



}

export default Mycomponent
