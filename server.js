const app = require("./app");
const config = require("./config");

const PORT = config.PORT || 8000;

app.listen(PORT, () =>
  console.log(`Server has started on port localhost:${PORT}`)
);
