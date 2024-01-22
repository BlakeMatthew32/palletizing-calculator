/* eslint-disable react/prop-types */


const PositionForm = ({ posNo }) => {

    return <div 
    className="form__field-container" >
        <label htmlFor={`X-${posNo}`}>X: 
            <input id={`X-${posNo}`}  value="" />   
        </label>

        <label htmlFor={`RX-${posNo}`}>RX: 
            <input id={`RX-${posNo}`}  value="" />
        </label>

        <label htmlFor={`Y-${posNo}`}>Y: 
            <input id={`Y-${posNo}`}  value="" />
        </label>

        <label htmlFor={`RY-${posNo}`}>RY: 
            <input id={`RY-${posNo}`}  value="" />
        </label>

        <label htmlFor={`Z-${posNo}`}>Z: 
            <input id={`Z-${posNo}`}  value="" />
        </label>

        <label htmlFor={`RZ-${posNo}`}>RZ: 
            <input id={`RZ-${posNo}`}  value="" />
        </label>
    </div>
}

export default PositionForm