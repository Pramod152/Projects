const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

const saveNotes = () => {
  const notes = document.querySelectorAll(".note textarea");
  console.log(notes);
  const data = [];
  notes.forEach((note) => {
    data.push(note.value);
  });
  console.log(data);
};

const addNote = () => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
  <div class="tool">
          <i class="save ri-save-fill"></i>
          <i class="trash ri-delete-bin-fill"></i>
        </div>
        <textarea></textarea>
  `;

  note.querySelector(".trash").addEventListener("click", () => {
    note.remove();
  });

  main.appendChild(note);
  note.querySelector(".save").addEventListener("click", saveNotes);
};

addBtn.addEventListener("click", addNote);
