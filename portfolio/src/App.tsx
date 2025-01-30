import React from "react"
import Header from "./components/Header"
import Nav from "./components/Nav"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import "./App.css"

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
