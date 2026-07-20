
'use client'

import { useState } from "react";
import  styles  from './userForm.module.css';

type FormState = {
    name:string,
    email:string
}

const UserForm = () => {
    const [formState, setFormState] = useState<FormState>({
        name: '',
        email: ''
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {name , value} = e.target;

        setFormState((prev)=>({
            ...prev,
            [name]:value
        }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('form state... handlsubmit', formState);
    }


    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="enter your name" className={styles.nameemailInput} value={formState.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="enter your email" className={styles.nameemailInput} value={formState.email} onChange={handleChange} />
            <button className={styles.subtBtn}>Submit</button>
        </form>
    )
}

export default UserForm;