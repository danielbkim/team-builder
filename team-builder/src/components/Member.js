import React from 'react';

export default function Member(props) {
    // console.log(firstName, lastName, email);
    // console.log(props.firstName)
    const { member } = props;

    return (
        <div className='member-container'>
            <h3>{ member.name }</h3>
            <p>{ member.email }</p>
            <p>{ member.role }</p>
        </div>
        
    );
};