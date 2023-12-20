import { useContext } from "react";
import Context from "../context/Context";

function Receiver() {
    const {data} = useContext(Context);
    if(!data) {
        return <div>Data has not been entered</div>
    }
    return (
        <div>Receiver got {data}</div>
    );
}

export default Receiver;