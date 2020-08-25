let notes = getSaveNotes();

const filters = {
  searchText: "",
};

//Check for Existing Data

renderNotes(notes, filters);

document.querySelector("#createNote").addEventListener("click", function (e) {
  notes.push({
    id: uuidv4(),
    title: "",
    body: "",
  });
  savedNotes(notes);
  renderNotes(notes, filters);
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  console.log(e.target.value);
});

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});
