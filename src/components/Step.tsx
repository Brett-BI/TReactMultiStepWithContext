import * as React from 'react';

import Loading from './Loading';

interface IStepperContext {
    currentStep: number;
    incStep: Function;
    decStep: Function;
    isLoading: Boolean;
}

export const StepperContext = React.createContext<IStepperContext | null>(null);
  
interface StepperProps {children: React.ReactNode}

export const Stepper = ({children}: StepperProps) => {
  const [currentStep, setCurrentStep] = React.useState<number>(0);
  const [isLoading, setIsLoading] = React.useState<Boolean>(false);

  function sleep(ms: number) {
    return new Promise(resolveFunc => setTimeout(resolveFunc, ms));
  }
  
  async function sleepingFunc() {
    for (let i = 0; i < 5; ++i) {
      await sleep(500);
    }
  }
  

  async function incStep() {
    setIsLoading(true);
    let c = currentStep;
    let childCount = React.Children.count(children);
    if (c + 1 <= childCount - 1) {
      console.log(`Setting current step to ${c + 1}`);
      setCurrentStep(c + 1);
      await sleepingFunc();
      setIsLoading(false);
    }
  }

  async function decStep() {
      setIsLoading(true)
    let c = currentStep;
    if (c - 1 >= 0) {
      console.log(`Setting current step to ${c - 1}`);
      setCurrentStep(c - 1);
      await sleepingFunc();
      setIsLoading(false);
    }
  }

  return (
    <StepperContext.Provider value={{currentStep: currentStep, incStep: incStep, decStep: decStep, isLoading: isLoading}}>
        { isLoading ? <Loading /> : null }
      {children}
    </StepperContext.Provider>
  )
}

export interface StepProps {
    step: number;
}