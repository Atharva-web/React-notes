import { useContext, useEffect, useState } from "react";
import Context from "../context/Context";

function Sender() {
    const {setData} = useContext(Context);

    const [inputData, setInputData] = useState("");

    function handleSubmit() {
        setData(inputData);
    }
    
    return (
        <>
            <span>At sender </span>
            <input
                type="text"
                onChange={(e) => setInputData(e.target.value)}
                placeholder="Enter data"
            />
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}

export default Sender;