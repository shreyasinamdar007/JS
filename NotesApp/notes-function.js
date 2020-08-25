//Read Existing data


const getSaveNotes = function () {
  const notesJSON = localStorage.getItem("notes");

  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

//Save the notes
const savedNotes = function (notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
};

//Generate the DOM structure
const generateNoteDOM = function (note) {
  const noteEl = document.createElement("div");
  const textEl = document.createElement("span");
  const button = document.createElement("button");

  //setup the remove note
  button.textContent = "x";
  noteEl.appendChild(button);

  //Setup the title
  if (note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = "Unnamed note";
  }
  noteEl.appendChild(textEl);

  return noteEl;
};

//Render Application Notes
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector("#notes").innerHTML = "";

  filteredNotes.forEach(function (note) {
    const noteEl = generateNoteDOM(note);
    document.querySelector("#notes").appendChild(noteEl);
  });
};
