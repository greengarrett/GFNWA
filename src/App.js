import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to red.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* Insert these scripts at the bottom of the HTML, but before you use any Firebase services */}

      {/* Firebase App (the core Firebase SDK) is always required and must be listed first  */}
      <script src="/__/firebase/8.2.2/firebase-app.js"></script>

      {/* If you enabled Analytics in your project, add the Firebase SDK for Analytics */}
      <script src="/__/firebase/8.2.2/firebase-analytics.js"></script>

      {/* Add Firebase products that you want to use */}
      <script src="/__/firebase/8.2.2/firebase-auth.js"></script>
      <script src="/__/firebase/8.2.2/firebase-firestore.js"></script>

      {/* Initialize Firebase */}
      <script src="/__/firebase/init.js"></script>
    </div>
  );
}

export default App;
