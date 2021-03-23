import { React, useState } from 'react';

const initialFormValues = { name: "", email: "", role: "" };

export default function Form(props) {
    const { members, setMembers } = props;

    const [formValues, setFormValues] = useState(initialFormValues);

    const change = (e) => {
        const { name, value } = e.target;
        // console.log(e.target);
        // console.log(name, value);
        setFormValues({...formValues, [name]: value });
    };
    
    const submit = (e) => {
        e.preventDefault();
        console.log(members);
        const newMember = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            role: formValues.role.trim(),
        }

        setMembers([...members, newMember])
        console.log(members);
    
    };
    console.log(props);
    return (
        <form onSubmit={submit}>
            <input name='name' type='text' value={formValues.name} onChange={change} placeholder='i.e. Tony' required></input>
            <br></br>
            <input name='email' type='text' value={formValues.email} onChange={change} placeholder='i.e. Stark' required></input>
            <br></br>
            <input name='role' type='text' value={formValues.role} onChange={change} placeholder='i.e tonystark@ironman.com' required></input>
            <br></br>
            <button>submit</button>
        </form>
    );
};