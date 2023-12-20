import React, {useState} from "react";
import Context from "./Context";

function ContextProvider({children}) {
    const [data, setData] = useState(null);

    return (
        <Context.Provider value={{data, setData}}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;