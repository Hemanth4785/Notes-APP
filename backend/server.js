const express = require("express");
const cors = require("cors");
const pool =require("./db");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get("/db-test", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM notes");
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Database connection failed"
        });
    }
});

// GET - Get all notes
app.get("/notes", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM notes ORDER BY id"
        );

        res.json(result.rows);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to get notes"
        });
    }
});
// POST - Add a new note
app.post("/notes", async (req, res) => {
    try {
        const { title, content } = req.body;

        const result = await pool.query(
            "INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *",
            [title, content]
        );

        res.json(result.rows[0]);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to add note"
        });
    }
});//delete
app.delete("/notes/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);

        const result = await pool.query(
            "DELETE FROM notes WHERE id = $1 RETURNING *",
            [id]
        );

        res.json(result.rows[0]);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to delete note"
        });
    }
});//Edit 
app.put("/notes/:id", async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { title, content } = req.body;

        const result = await pool.query(
            `UPDATE notes
             SET title = $1, content = $2
             WHERE id = $3
             RETURNING *`,
            [title, content, id]
        );

        res.json(result.rows[0]);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to update note"
        });
    }
});// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});