const db = require("../db");

exports.getbuahan_shop = (req, res) => {
  console.log("GET /api/buahan_shop called");
  const sql = "SELECT * FROM buahan_shop";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ error: "Database query failed" });
    }
    res.status(200).json(results);
  });
};
