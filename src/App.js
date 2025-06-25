import { Outlet } from "react-router";
import Header from "./components/Templates/Header";
import ThemeProvider from "./providers/ThemeProvider";

function App() {


  return (
    <div>
        <ThemeProvider>
          <Header />

          <Outlet />
        </ThemeProvider>
    </div>
  );
}

export default App;


