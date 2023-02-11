import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";

import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from "./components/Pages/Contact";
import Nav from './components/Nav'
import Users from "./components/users"

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
  }

  function cancelModal() {
    setShowModal(false);
  }

  function confirmModal() {
    setShowModal(false);
  }

  useEffect(() => {
    console.log('ONLY on mount')
  }, [])

  useEffect(() => {
    console.log(`on mount and on ${showModal} change`)
  }, [showModal])

  useEffect(() => {
    console.log('EVERY render')
  })

  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Add Todo
        </button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
        <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
        <Todo onTodoDelete={onTodoDelete} title="land a $100K Job" />
      </div>
      {showModal && (
        <Modal
          cancelModal={cancelModal}
          confirmModal={confirmModal}
          modal__title="Are you sure you want to delete?"
        />
      )}

      {/* Below is how to route to Pages */}
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/:username" element={<Users />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
