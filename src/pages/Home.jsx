import React from 'react';
import { NavLink } from 'react-router-dom';
import Form from '../components/Form/Form';

export default function Home() {
    return (
        <>
            <div className='page'>
                <h1 className='title'>HRnet</h1>

                <NavLink to='/employees'>View Current Employees</NavLink>

                <Form />


            </div>

        </>
    )
}
