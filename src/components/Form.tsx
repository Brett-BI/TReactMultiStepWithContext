import * as React from 'react';

import { Stepper, StepperContext, StepProps } from './Step';
import { Title } from './Title';
import { Info, UserInfo } from './Info';
import { End } from './End';

interface FormProps {
}

interface FormData {
    "UserInfo": UserInfo
}

export interface UpdateInfoFormData {
    field: keyof UserInfo,
    value: string | number
}

export function Form(props: FormProps) {
    const [isLoading, setIsLoading] = React.useState<Boolean>(false);
    const [userInfo, setUserInfo] = React.useState<UserInfo>({
        firstName: 'DEFAULT FN',
        lastName: 'DEFAULT LN',
        age: 999,
        email: 'DEFAULT@EMAIL.NET'
    })

    function updateUserInfo(userInfo: UserInfo) {
        setUserInfo(userInfo);
        console.log('User info set...');
        console.log(userInfo);
    }

    function handleFormSubmit() {
        console.log('Doing some validation (allegedly)...');
        console.log('Submitting the form, dawg...');
    }

    React.useEffect(() => {
        console.log('InfoFormData in useEffect:');
        console.log(userInfo);
        setUserInfo(userInfo);
    }, [userInfo]);

    return (
        <Stepper>
            <Title step={0} />
            <Info step={1} data={userInfo} setData={updateUserInfo} />
            <End step={2} data={userInfo} handleFormSubmit={handleFormSubmit} />
        </Stepper>
    )
}