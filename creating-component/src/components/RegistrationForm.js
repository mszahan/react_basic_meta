import { useState } from "react";

function RegistrationForm(){

    const [form, setForm] = useState({
        firstName:'John',
        lastName:'Doe',
        email:'email@example.com'
    })

    return (
        <div className="register-form">
            <h3>Using useState hook for Registration form</h3>
            <hr/>
            <label>
                First name:
                <input value={form.firstName} 
                onChange={ e => {setForm({...form, firstName: e.target.value})}}
                />
            </label>

            <label>
                Last name:
                <input value={form.lastName}
                onChange={e => {setForm({...form, lastName: e.target.value})}}/>
            </label>

            <label>
                Email:
                <input value={form.email}
                onChange={e=> {setForm({...form, email:e.target.value})}}/>
            </label>
            <hr/>
            <p>Hi, dear, <strong> {form.firstName} {' '} {form.lastName} </strong></p>
            <p>We got your email its <strong>{form.email} </strong></p>

        </div>
    )


}

export default RegistrationForm;