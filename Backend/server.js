const express = require("express");
 const mongoose = require("mongoose");
 const cors = require("cors");
 require("dotenv").config();
 const app = express();
app.use(cors()); app.use(express.json());
const authRoutes = require("./routes/authRoutes");
 const bookingRoutes = require("./routes/bookingRoutes");
 const bookRoutes = require("./routes/bookRoutes");
 const statusRoutes = require("./routes/statusRoutes");
 const adminRoutes = require("./routes/adminRoutes");
 const userRoutes = require("./routes/userRoutes");
 app.use("/api/auth", authRoutes);
 app.use("/api/booking", bookingRoutes);
 app.use("/api/books", bookRoutes);
 app.use("/api/status", statusRoutes);
 app.use("/api/admin", adminRoutes);
 app.use("/api/user", userRoutes);
mongoose.connect(process.env.MONGO_URI, {
useNewUrlParser: true,
 useUnifiedTopology: true,
})
.then(() => console.log(" MongoDB connected"))
.catch((err) => console.error("+ MongoDB connecƟon error:", err));
const PORT = process.env.PORT || 5050;
 app.listen(PORT, () => {

console.log(`'.¸•˙7s Server running on port ${PORT}`);
}); 
