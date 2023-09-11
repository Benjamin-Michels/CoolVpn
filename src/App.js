import Navbar from './components/navbar'
import Main from './components/main'
import Info from './components/info'
import Reviews from './components/reviews'

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Oswald:wght@200;400;700&display=swap" rel="stylesheet"/>
      <Navbar/>
      <Main/>
      <Info/>
      <Reviews/>
    </div>
  );
}

export default App;
