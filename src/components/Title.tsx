import * as React from 'react';

import { StepProps, StepperContext } from './Step';

interface Props extends StepProps {
    
}

export function Title(props: Props) {
    const ctx = React.useContext(StepperContext);

    if (props.step === ctx?.currentStep) {
        return (
            <div>
                <h1>Petitioned App</h1>
                <button onClick={(e) => ctx?.incStep()}>Begin</button>            
            </div>
        )
    }

    return null;
}
