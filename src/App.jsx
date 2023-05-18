import { Route, Router } from 'react-router-dom';
import { Counter } from './counter';

function App() {
  return (
    <Router>
      <Route path="/" component={Counter} />
    </Router>
  );
}

export default App;
