import React from 'react';

export default function Form(props) {

    return (
        <form>
            <input type='text' placeholder='i.e. Tony' required></input>
            <br></br>
            <input type='text' placeholder='i.e. Stark' required></input>
            <br></br>
            <input type='text' placeholder='i.e tonystark@ironman.com' required></input>
            <br></br>
            <button>submit</button>
        </form>
    );
};