// import useMultiStepForm from "../../hooks/useMultStepForm"
import PositionForm from "../form/positionForm"

const CalculatorInput = () => {
    // const [step, stepIndex] = useMultiStepForm([])

    return (
        <>
            <h2>Enter Data for Position 2: </h2>
            <form className="form">
                <PositionForm />
            </form>
        </>
    )
}

export default CalculatorInput