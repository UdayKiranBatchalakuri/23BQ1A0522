const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Import Routes
const notificationRoutes = require("./src/routes/notificationRoutes");

// Home Route
app.get("/", (req, res) => {
    res.send("Backend Running");
});

// Notification Routes
app.use("/notifications", notificationRoutes);

// Start Server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});