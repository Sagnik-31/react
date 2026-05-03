function Button(){

   let count = 0
    const handleClick = (e) =>{

        if(count<3){
            count++;
            console.log(`you clicked me ${count} times`)

        }
        else{
            console.log('stop clicking me')
        }
        

    }

    return(<button onClick={(e)=> handleClick(e)}>Click me</button>);


}

export default Button