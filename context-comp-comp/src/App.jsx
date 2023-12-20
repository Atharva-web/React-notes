import ContextProvider from "./context/ContextProvider";
import Sender from "./components/Sender";
import Receiver from "./components/Receiver";

function App() {
  return (
    <ContextProvider>
      <Sender />
      <Receiver />
    </ContextProvider>
  )
}

export default App;