import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Welcome to React App</h1>
        <p>Deployment of React App using Jenkins 🚀</p>
      </header>

      <section className="courses">
        <h2>Tools in use!</h2>
        <ul>
          <li>Git</li>
          <li>Maven</li>
          <li>Docker</li>
          <li>K8S</li>
        </ul>
      </section>

      <footer className="footer">
        <p>
          Visit Github at <a href="https://github.com/Ankush-9">Ankush-9</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
