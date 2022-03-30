import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error === "Add name, please" ? s.error : s.someClass // need to fix with (?:)

    return (
        <div className={s.main}>
            <div className={s.container}>
                <SuperInputText value={name} onChange={setNameCallback} className={inputClass}/>
                <span className={s.errorMessage}>{error}</span>
                <SuperButton onClick={addUser} className={s.button}>Add</SuperButton>
                <span className={s.counter}>{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting
