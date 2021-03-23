import { React, useState } from 'react';

const initialFormValues = { name: "", email: "", role: "" };


export default function Form(props) {
    
    const [formValues, setFormValues] = useState(initialFormValues);

    console.log(props);
    return (
        <form>
            <input name='name' type='text' placeholder='i.e. Tony' required></input>
            <br></br>
            <input name='email' type='text' placeholder='i.e. Stark' required></input>
            <br></br>
            <input name='role' type='text' placeholder='i.e tonystark@ironman.com' required></input>
            <br></br>
            <button>submit</button>
        </form>
    );
};