const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Notes is Opening");
});

// Temporary notes storage
let notes = [
    {
        id: 1,
        title: "React",
        content: "Learning React"
    }
];

// GET - Get all notes
app.get("/notes", (req, res) => {
    res.json(notes);
});

// POST - Add a new note
app.post("/notes", (req, res) => {

    const newNote = {
        id: notes.length + 1,
        title: req.body.title,
        content: req.body.content
    };

    notes.push(newNote);

    res.json(newNote);
});
//delete
app.delete("/notes/:id", (req, res) => {
    const id = Number(req.params.id);

    notes = notes.filter((note) => note.id !== id);

    res.json({
        message: "Note deleted successfully"
    });
});
//Edit 
app.put("/notes/:id", (req, res) => {
    const id = Number(req.params.id);

    notes = notes.map((note) =>
        note.id === id
            ? {
                ...note,
                title: req.body.title,
                content: req.body.content
              }
            : note
    );

    res.json({
        message: "Note updated successfully"
    });
});
// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});