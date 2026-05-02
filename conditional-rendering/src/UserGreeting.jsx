
// checking some sort of conditions based on the condition if it is 
// true or false we can show hide or change components

export function UserGreeting(props){

    const welcomeMessage = <h2>Welcome {props.username}</h2>
    const loginprompt = <h2>Please Login to Continue</h2>

    return(props.IsLoggedin ? welcomeMessage: loginprompt);

}