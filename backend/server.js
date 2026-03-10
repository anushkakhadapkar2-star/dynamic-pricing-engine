const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const ruleRoutes = require("./routes/ruleRoutes");
const priceRoutes = require("./routes/priceRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/rules", ruleRoutes);
app.use("/api", priceRoutes);

app.get("/", (req,res)=>{
    res.send("Dynamic Pricing Engine API Running");
});

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});