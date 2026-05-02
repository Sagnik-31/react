
// props are read-only properties that are shared
// between components. A parent component can send data to a child component.
// < Component key=value />

export function Student(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>IsStudent: {props.IsStudent}</p>

        </div>
    );
}