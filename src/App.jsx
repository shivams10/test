import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css"
import {useThemeHook} from "./contexts/ThemeContext.jsx"

function App() {

  const theme = useThemeHook();

  return (
      <main className={theme? 'theme-black': 'theme-light'}>
        hello
      </main>
  )
}

export default App;