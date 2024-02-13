/* eslint-disable react/prop-types */


const PositionForm = ({position, data, updateForm}) => {

    updateForm()

    return <div 
    className="form__field-container" >
        <p>{position}</p>
        <label htmlFor={`X-${position}`}>X: 
            <input id={`X-${position}`} value={data[position].x} onChange={(event) => updateForm(data[position].x = event.target.value, position)}/>   
        </label>

        <label htmlFor={`RX-${position}`}>RX: 
            <input id={`RX-${position}`} />
        </label>

        <label htmlFor={`Y-${position}`}>Y: 
            <input id={`Y-${position}`} />
        </label>

        <label htmlFor={`RY-${position}`}>RY: 
            <input id={`RY-${position}`} />
        </label>

        <label htmlFor={`Z-${position}`}>Z: 
            <input id={`Z-${position}`} />
        </label>

        <label htmlFor={`RZ-${position}`}>RZ: 
            <input id={`RZ-${position}`} />
        </label>
    </div>
}

export default PositionForm