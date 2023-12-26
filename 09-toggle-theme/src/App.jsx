import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <ContextProvider>
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </ContextProvider>
        </div>
      </div>

    </>
  );
}

export default App;