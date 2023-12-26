import { useState } from "react";
import Context from "./Context";

function ContextProvider({children}) {
    const [toggle, setToggle] = useState("light");

  return (
    <Context.Provider value={{toggle, setToggle}}>
        {children}
    </Context.Provider>
  );
}

export default ContextProvider;