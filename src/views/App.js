import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js'

// A function Return HTML is called JSX (component)
/**
 * 2 components: class component / function component (function, arrow)
 * JSX function that return HTML
 */

// const App = () => {    // Arrow function
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with React.js (Tuan)
        </p>
        <MyComponent />

        {/* <MyComponent></MyComponent> Long declare*/}
      </header>
    </div>
  );
}

export default App;
