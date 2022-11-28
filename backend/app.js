const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });


// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
const corsOptions = {origin: "http://localhost:4200"}
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());


app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// Routes
app.use('/api', router);

app.use(router);

app.use("/libro", require("./routes/libro.routes"));
app.use("/estudiante", require("./routes/estudiante.routes"));
app.use("/prestamo", require("./routes/prestamo.routes"));
app.use("/autor", require("./routes/autor.routes"));
app.use("/editorial", require("./routes/editorial.routes"));
app.use("/usuario", require("./routes/usuario.routes"));
app.use("/", require("./routes/auth.routes"));


module.exports = app;