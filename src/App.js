import "../src/style/EstilosGenerales.css"
import "../src/style/Responsive.css"
import Header from '../src/components/Header'
import Main from '../src/components/Main'
import StayProductive from "./components/StayProductive"
import AccessToday from "./components/AccessToday"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <StayProductive />
        <AccessToday />
        <Footer />
    </div>
  );
}

export default App;
