let array_notes = [
  {
    createdAt: new Date(),
    title: "Tugas Sekolah",
    note: "Tugas Fisika dan Biologi",
  },
  {
    createdAt: new Date(),
    title: "Tugas Rumah",
    note: "Menyapu",
  },
  {
    createdAt: new Date(),
    title: "Tugas Sehari-Hari",
    note: "Membereskan kamar",
  },
];

function addNote(note) {
  array_notes = [...array_notes, note];
}

function getNote() {
  return array_notes;
}

function handleDeleteNotes(deleteNote) {
  array_notes = array_notes.filter(note => note !== deleteNote);
}

export { getNote, handleDeleteNotes, addNote };
