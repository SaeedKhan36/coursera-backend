
const express = require("express");
const mongoose = require("mongoose");
const { userRouters } = require("./routes/user");
const { courseRouters } = require("./routes/course");
const { adminRouters } = require("./routes/admin");

const app = express();

app.use(express.json());
app.use("/api/v1/users", userRouters);
app.use("/api/v1/course", courseRouters);
app.use('/api/v1/admin', adminRouters);

async function main() {

  await mongoose.connect ("mongodb+srv://saeed:saeedkhan364@cluster0.ohovt4x.mongodb.net/coursera-app")
  app.listen(3000, () => {
  console.log("Server running on port 3000");
});
}

main();

