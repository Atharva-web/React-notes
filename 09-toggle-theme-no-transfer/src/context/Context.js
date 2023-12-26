import { useContext, createContext } from "react";

const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: function() {},
    lightTheme: function() {}
});

const ThemeProvider = ThemeContext.Provider;

function useTheme() {
    return useContext(ThemeContext);
}

export {
    ThemeContext,
    ThemeProvider,
    useTheme
}