import useMultiStepForm from "../../hooks/useMultStepForm"
// import PositionForm from "../form/positionForm"

const CalculatorInput = () => {
    const {step, stepIndex, back, next, isFirstStep, isLastStep} = useMultiStepForm([
        <h1 key={1}>step 1</h1>, 
        <h1 key={2}>step 2</h1>, 
        <h1 key={3}>step 3</h1>
    ])

    const handleBack = (event) => {
        event.preventDefault()
        if(!isFirstStep) back()
    }

    const handleNext = (event) => {
        event.preventDefault()
        if(!isLastStep) next()
    }

    return (
        <>
            <form className="form">
            <h3>Enter data for Corner {stepIndex + 1}: </h3>
                {step}
                <div className="form__button-wrapper">
                    {!isFirstStep && <button onClick={handleBack} type="button">Back</button>}
                    <button onClick={handleNext} type="button">Next</button>
                </div>
            </form>
        </>
    )
}

export default CalculatorInput