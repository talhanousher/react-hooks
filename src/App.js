import './App.css';

import UseStateEquivalent from './class-component/UseStateEquivalent';
import UseState from './functional-component-using-hooks/UseState';

function App() {
  return (
    <div className="container">
      <div className="use-state">
        <UseStateEquivalent />
        <UseState />
      </div>
    </div>
  );
}

export default App;
