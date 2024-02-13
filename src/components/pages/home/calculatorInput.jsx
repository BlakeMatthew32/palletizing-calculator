import { useState } from "react"
import useMultiStepForm from "../../hooks/useMultStepForm"
import PositionForm from "../form/positionForm"

const INITITIAL_DATA = {
    positionOne: {
        xPos: 0,
        yPos: 0,
        zPos: 0,
        xRotation: 0,
        yRotation: 0,
        zRotation: 0
    }, 
    positionTwo: {
        xPos: 0,
        yPos: 0,
        zPos: 0,
        xRotation: 0,
        yRotation: 0,
        zRotation: 0
    }, 
    positionThree: {
        xPos: 0,
        yPos: 0,
        zPos: 0,
        xRotation: 0,
        yRotation: 0,
        zRotation: 0
    },
    positionFour: {
        xPos: 0,
        yPos: 0,
        zPos: 0,
        xRotation: 0,
        yRotation: 0,
        zRotation: 0
    }, 
    GridDimentions: {
        columns: 0,
        rows: 0
    }
}

const CalculatorInput = () => {

    const [formData, setFormData] = useState(INITITIAL_DATA)
    const updateForm = (currentForm, position) => {
        setFormData((prev) => {
            return {
                ...prev,
                [position]: {...currentForm}
            }
        })
    }

    const {step, stepIndex, back, next, isFirstStep, isLastStep} = useMultiStepForm([
        <PositionForm position={'positionOne'} key={1} data={formData} updateForm={updateForm} />,
        <PositionForm position={'positionTwo'} key={2} data={formData} updateForm={updateForm} />,
        <PositionForm position={'positionThree'} key={3} data={formData} updateForm={updateForm} />,
        <PositionForm position={'positionFour'} key={4} data={formData} updateForm={updateForm} />,
    ])

    const handleBack = () => {
        if(!isFirstStep) back()
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!isLastStep) next()
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
            <h3>Enter data for Corner {stepIndex + 1}: </h3>
                {step}
                <div className="form__button-wrapper">
                    {!isFirstStep && <button onClick={handleBack} type="button">Back</button>}
                    <button type="submit">Next</button>
                </div>
            </form>
        </>
    )
}

export default CalculatorInput