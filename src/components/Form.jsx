import React, { useState } from "react";

import "./Form.css";

const Form = ({father, addMessage}) => {
    
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!value) return;

        addMessage(value, father);

        setValue("");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form