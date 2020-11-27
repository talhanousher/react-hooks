import './App.css';

import UseStateEquivalent from './class-component/UseStateEquivalent';
import UseState from './functional-component-using-hooks/UseState';

import UseEffectEquivalent from './class-component/UseEffectEquivalent';
import UseEffect from './functional-component-using-hooks/UseEffect';

function App() {
  return (
    <div className="container">
      <div className="use-state">
        <UseStateEquivalent />
        <UseState />
      </div>
      <div className="use-effect">
        <UseEffectEquivalent />
        <UseEffect />
      </div>
    </div>
  );
}

export default App;
