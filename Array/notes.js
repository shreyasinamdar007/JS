const notes = [
  {
    title: "Reading",
    body: "Read for atleast one hour",
  },
  {
    title: "Exercise",
    body: "Exercise Daily with",
  },
];

const notesSort = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

// const findNote = function (notes, noteTitle) {
//   return notes.find(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
// };

// const findNotes = function (notes, query) {
//   return notes.filter(function (note, index) {
//     const isTitle = note.title.toLowerCase().includes(query.toLowerCase());
//     const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
//     return isTitle || isBodyMatch;
//   });
// };

// console.log(findNotes(notes, "Read"));

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index];
// };

// const note = findNote(notes, "Exercise");
// console.log(note);

notesSort(notes);
console.log(notes);
