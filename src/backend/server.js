import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Load notes from JSON file
const NOTES_FILE = "notes.json";

const getNotes = () => {
  try {
    const data = fs.readFileSync(NOTES_FILE, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
};

// Get all notes
app.get("/quotes", (req, res) => {
  res.json(getNotes());
});

// Add a new note
app.post("/quotes", (req, res) => {
  const { username, message } = req.body;
  const notes = getNotes();
  const newNote = { username, message };
  notes.unshift(newNote);
  fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2));
  res.json(newNote);
});

// Delete a note
app.delete("/quotes/:index", (req, res) => {
  const index = parseInt(req.params.index);
  let notes = getNotes();
  notes = notes.filter((_, i) => i !== index);
  fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2));
  res.json({ message: "Note deleted" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
