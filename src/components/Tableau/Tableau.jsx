import React, { useEffect, useRef, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useUsers } from '../../hook/UsersContext';
import { FormatUserData } from '../../data/FormatUserData';

const columns = [
    {
        name: 'Prénom',
        selector: row => row.firstname,
        sortable: true,
    },
    {
        name: 'Nom',
        selector: row => row.lastname,
        sortable: true,
    },
    {
        name: 'Date de naissance',
        selector: row => row.birthdateString,
        sortable: true,
    },
    {
        name: "Date d'entrée",
        selector: row => row.startdateString,
        sortable: true,
    },
    {
        name: 'Adresse',
        selector: row => row.street,
        sortable: true,
    },
    {
        name: 'Ville',
        selector: row => row.city,
        sortable: true,
    },
    {
        name: 'Etat',
        selector: row => row.state,
        sortable: true,
    },
    {
        name: 'Code Zip',
        selector: row => row.zipcode,
        sortable: true,
    },
    {
        name: 'Departement',
        selector: row => row.departement,
        sortable: true,
    },
];


export default function Tableau() {
    const users = useUsers();
    const { data } = new FormatUserData(users);
    const [filtered, setFiltered] = useState(data)

    const handleSearch = (e) => {
        setFiltered(data.filter(user => {
            let res = false
            for (const prop in user) {
                if (typeof user[prop] == 'string' && user[prop].includes(e.target.value)) res = true
                if (typeof user[prop] == 'number' && user[prop] == e.target.value) res = true

            }
            return res;
        }))
    }

    return (
        <>
            <label htmlFor="search">Search :
                <input type="text" id="search" onChange={handleSearch} />
            </label>
            <DataTable
                columns={columns}
                data={filtered}
                pagination
            />
        </>
    );
}
