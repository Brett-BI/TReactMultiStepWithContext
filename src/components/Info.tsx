import * as React from 'react';

import { StepProps, StepperContext } from './Step';

export interface UserInfo {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
}

interface Props extends StepProps {
    data: UserInfo;
    setData: (updatedUserInfo: UserInfo) => void;
}

export function Info(props: Props) {
    const ctx = React.useContext(StepperContext);
    
    // each input element gets its own state prop...
    const [firstName, setFirstName] = React.useState(props.data.firstName);
    const [lastName, setLastName] = React.useState(props.data.lastName);
    const [age, setAge] = React.useState(props.data.age);
    const [email, setEmail] = React.useState(props.data.email);

    function handleFormSubmit(e: React.FormEvent): void {
        const userInfo = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email
        };

        console.log('Setting form info...')
        console.log(userInfo);

        props.setData(userInfo);
        ctx?.incStep();
    }

    if (props.step === ctx?.currentStep) {
        return (
            <div>
                <p>Info Component.</p>
                <form>
                    <label htmlFor="firstName">FN</label>
                    <input name="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <label htmlFor="lastName">LN</label>
                    <input name="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <label htmlFor="age">Age</label>
                    <input name="age" type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </form>
                <div>
                    <button onClick={(e) => ctx?.decStep()}>Previous</button><button onClick={handleFormSubmit}>Next</button>
                </div>
            </div>
        )
    }

    return null;
}