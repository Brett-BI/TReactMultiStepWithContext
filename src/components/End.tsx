import * as React from 'react';

import { StepProps, StepperContext } from './Step';
import { UserInfo } from './Info';

interface Props extends StepProps {
    data: UserInfo;
    handleFormSubmit: () => void;
}

export function End(props: Props) {
    const ctx = React.useContext(StepperContext);

    if (props.step === ctx?.currentStep) {
        return (
            <div>
                <p>End Component.</p>
                <div>
                    <p><em>This is your data... Review it before submitting.</em></p>
                    <p><strong>First Name: </strong>{props.data.firstName}</p>
                    <p><strong>Last Name: </strong>{props.data.lastName}</p>
                    <p><strong>Age: </strong>{props.data.age}</p>
                    <p><strong>Email: </strong>{props.data.email}</p>
                </div>                
                <div>
                    <button onClick={(e) => ctx?.decStep()}>Previous</button>
                    <button onClick={(e) => props.handleFormSubmit()}>Submit</button>
                </div>
            </div>
        )
    }

    return null;

}