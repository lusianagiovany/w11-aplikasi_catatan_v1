import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getNote, handleDeleteNotes } from '../utils/local';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NotesFromFunction from '../components/NotesFromFunction';

function HomePage() {
  const name = "VAN";
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formattedUpdatedDate = `(${year}-${month}-${day})`;

  const navigate = useNavigate();
  const [searchNotes, setSearchNotes] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const data = getNote();
    setNotes(data);
  }, []);

  const addNote = () => {
    navigate('/AddNote'); 
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/'); 
  };

  useEffect(() => {
    setFilteredNotes(
      notes.filter((note) =>
        note.note.toLowerCase().includes(searchNotes.toLowerCase()) ||
        note.title.toLowerCase().includes(searchNotes.toLowerCase())
      )
    );
  }, [searchNotes, notes]);
  
  const onDeleteHandler = (deleteNote) => {
    handleDeleteNotes(deleteNote);
    setNotes(getNote());
  };

  return (
    <div className="App">
      <h1>{name}'s Notes</h1>
      <div className="custom-form-container">
        <Form>
          <Form.Group className="mb-4 custom-form-group" controlId="formSearchFilter">
            <Form.Label as="h3" className="custom-label">
              Search Notes
            </Form.Label>
            <Form.Control
              size="lg"
              type="search"
              placeholder="Search Notes..."
              onChange={(e) => setSearchNotes(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="custom-button" onClick={addNote}>
            Add New Note
          </Button>
        </Form>
      </div>
      <div className="card-container">
        {filteredNotes.map((note, index) => (
          <NotesFromFunction
            key={index}
            createdAt={formattedUpdatedDate}
            title={note.title}
            note={note}
            onDelete={onDeleteHandler}
          />
        ))}
      </div>
      <Button variant="outline-primary" className="button-logout" onClick={handleLogout}>
        Log Out
      </Button>
    </div>
  );
}

export default HomePage;
