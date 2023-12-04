import React from 'react';
import { NavLink } from 'react-router-dom';
import Tableau from '../components/Tableau/Tableau';
import { useUsers } from '../hook/UsersContext';


export default function CurrentEmployee() {
    return (
        <>
            <div className='page'>
                <h1 className='title'>Current Employees</h1>
                <Tableau />
                <NavLink to='/'>Home</NavLink>
            </div>
        </>
    )
}
