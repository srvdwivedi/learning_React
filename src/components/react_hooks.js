import {React, useState} from 'react';

const Text = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Hello India');
    }
    return (
        <>
            <h1> {title} </h1>
            <button onClick = {clickHandler}> Click Me </button>
        </>
    )
}


export default Text;