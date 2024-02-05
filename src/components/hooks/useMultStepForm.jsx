import { useEffect, useState } from "react"

const useMultiStepForm = (steps) => {
    const [step, setStep] = useState()
    const [stepIndex, setStepIndex] = useState(0)

    const next = () => {
        setStepIndex(prev => prev + 1)
    }

    const back = () => {
        setStepIndex(prev => prev - 1)
    }

    useEffect(() => {
        setStep(steps[stepIndex])
    }, [stepIndex])
    

    return {
        step, 
        stepIndex, 
        next, 
        back, 
        isLastStep: stepIndex === steps.length - 1, 
        isFirstStep: stepIndex === 0,
    }
}

export default useMultiStepForm