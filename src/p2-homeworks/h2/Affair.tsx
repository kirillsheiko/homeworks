import React from 'react'
import {AffairPriorityType, AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div>
            {props.affair.name}
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
