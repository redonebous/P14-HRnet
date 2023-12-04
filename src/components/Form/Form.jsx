import React, { useRef, useState } from 'react';
import style from './Form.module.css';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { states, departement } from '../../data/select';
import { useUsersDispatch } from '../../hook/UsersContext';
import Modal from '../Modal/Modal';

export default function Form() {
    const [selectedState, setSelectedState] = useState(null);
    const [selectedDepartement, setSelectedDepartement] = useState(null);
    const [birthDate, setBirthDate] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [isSubmit, setIsSubmit] = useState(false);
    const form = useRef();
    const dispatch = useUsersDispatch();
    const test = <span>Ceci est un test</span>;

    const handleForm = async (e) => {
        e.preventDefault();

        const postData = {
            firstname: form.current[0].value,
            lastname: form.current[1].value,
            birthdate: birthDate, //birthDate?.getDate() + '/' + birthDate?.getMonth() + '/' + birthDate?.getFullYear(),
            startdate: startDate, // startDate?.getDate() + '/' + startDate?.getMonth() + '/' + startDate?.getFullYear(),
            street: form.current[4].value,
            city: form.current[5].value,
            state: selectedState?.value,
            zipcode: form.current[7].value,
            departement: selectedDepartement?.value
        }

        dispatch({ type: 'USER_ADD', payload: postData });
        form.current.reset();
        setSelectedState({ label: "Select State...", value: null });
        setSelectedDepartement({ label: "Select Departement...", value: null });
        setBirthDate(null);
        setStartDate(null);
        setIsSubmit(true);
    }

    return (
        <>
            <h2>Create Employee</h2>
            <form className={style.form} ref={form} onSubmit={(e) => handleForm(e)}>
                <div className={style.input}>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id='firstname' />
                </div>
                <div className={style.input}>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id='lastname' />
                </div>
                <div className={style.input}>
                    <label htmlFor="birthdate">Date of Birth</label>
                    <DatePicker selected={birthDate} onChange={(date) => setBirthDate(date)} />
                </div>
                <div className={style.input}>
                    <label htmlFor="startdate">Start Date</label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>

                <div className={style.address}>
                    <span className={style.addresstitle}>Address</span>

                    <div className={style.input}>
                        <label htmlFor="street">Street</label>
                        <input type="text" id='street' />
                    </div>
                    <div className={style.input}>
                        <label htmlFor="city">City</label>
                        <input type="text" id='city' />
                    </div>
                    <div className={style.input}>
                        <label htmlFor="state">State</label>
                        <Select
                            value={selectedState}
                            defaultValue={{ label: "Select State...", value: null }}
                            onChange={setSelectedState}
                            options={states}
                        />
                    </div>
                    <div className={style.input}>
                        <label htmlFor="zipcode">Zip Code</label>
                        <input type="number" id='zipcode' />
                    </div>

                </div>

                <div className={style.input}>
                    <label htmlFor="departement">Departement</label>
                    <Select
                        value={selectedDepartement}
                        defaultValue={{ label: "Select Departement...", value: null }}
                        onChange={setSelectedDepartement}
                        options={departement}
                    />

                </div>

                <input type="submit" value='save' className={style.submit} />

            </form>
            {/* <Modal isActive={isSubmit} setIsActive={setIsSubmit} message="L'employé a bien été ajouté !" /> */}
            <Modal isActive={isSubmit} setIsActive={setIsSubmit}>
                {test}
            </Modal>
        </>
    )
}
