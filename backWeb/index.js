const express = require("express");
const mysql = require("mysql2");
const fetch = require('node-fetch');
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require('axios');

const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

const contextChunks = [
  "Ofrecemos servicios veterinarios para perros, gatos y animales exóticos.",
  "Contamos con atención de urgencias 24/7, vacunas, desparasitación y cirugía menor.",
  "Estamos ubicados en Av. Circunvalación #80, Zona Norte. Horario: Lunes a sábado de 8:00 a 20:00.",
  "Disponemos de peluquería canina y felina con personal especializado.",
  "Brindamos asesoramiento nutricional y planes de vacunación personalizados.",
  "Un contacto adicional puedes ir a la pestaña de contactos y dejar tus datos, como nombre, correo,pais,mensaje y telefono"
];
function getRelevantContext(question) {
  return contextChunks.filter(chunk =>
    question.toLowerCase().split(" ").some(word =>
      chunk.toLowerCase().includes(word)
    )
  ).join("\n\n");
}
// Middleware para analizar noel cuerpo de las peticiones JSON
app.use(bodyParser.json());
// Middleware para habilitar CORS (permite peticiones desde diferentes dominios)
app.use(cors());

// Configuración de la conexión a la base de datos MySQL
const dbConfig = {
  host: "localhost", // Cambia esto si tu base de datos está en otro servidor
  user: "root", // Reemplaza con tu nombre de usuario de MySQL
  password: "", // Reemplaza con tu contraseña de MySQL
  database: "dbventas", // Reemplaza con el nombre de tu base de datos
  port: "3306",
};

const dbConnection = mysql.createConnection(dbConfig);

// Conectar a la base de datos
dbConnection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conexión a la base de datos MySQL establecida");
});

//Implememtamos un servicio
app.post("/api/registro", (req, res) => {
  const { name, email,pais, message, telefono } = req.body;
  console.log("Registro");
  console.log("Datos recibidos en el servidor como JSON:", req.body);

  if (!name || !email) {
    return res
      .status(400)
      .json({ error: "Nombre, email son campos requeridos." });
  }

  const query =
    "INSERT INTO contactos (nombre, email,pais,mensaje,telefono) VALUES (?, ?, ?, ?, ?)";
  dbConnection.query(query, [name, email, pais, message, telefono], (error, results) => {
    if (error) {
      console.error("Error al insertar datos en la tabla:", error);
      return res
        .status(500)
        .json({ error: "Error al guardar los datos en la base de datos." });
    }

    res.status(201).json({
      message: "Datos guardados correctamente.",
      id: results.insertId,
    });
  });
});

app.post("/api/save", (req, res) => {
  const { nombre, correo,pais, mensaje ,telefono } = req.body;
  console.log("Registro");
  console.log("Datos recibidos en el servidor como JSON:", req.body);

  if (!nombre || !correo) {
    return res
      .status(400)
      .json({ error: "Nombre, email son campos requeridos." });
  }
  console.log("Datos recibidos:", req.nombre, req.correo,req.pais, req.mensaje, req.telefono);

  const query =
    "INSERT INTO contactos (nombre, email,pais,  mensaje, telefono) VALUES (?, ?, ?, ?, ?)";
  dbConnection.query(query, [nombre, correo, pais, mensaje, telefono], (error, results) => {
    if (error) {
      console.error("Error al insertar datos en la tabla:", error);
      return res
        .status(500)
        .json({ error: "Error al guardar los datos en la base de datos." });
    }

    res.status(201).json({
      message: "Datos guardados correctamente.",
      id: results.insertId,
    });
  });
});
//Crear un servicio para obtener todos los registros de la tabla productos
app.get("/api/productos", (req, res) => {
  const query = "SELECT * FROM productos";
  dbConnection.query(query, (error, results) => {
    if (error) {
      console.error("Error al obtener datos de la tabla:", error);
      return res
        .status(500)
        .json({ error: "Error al obtener los datos de la base de datos." });
    }

    res.status(200).json(results);
  });
});

app.post("/ollama-prompt", async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({ error: "Se requiere una pregunta" });
    }

    const context = getRelevantContext(question);

    const finalPrompt = `
Eres un asistente para una clínica veterinaria llamada Mundo Animal. Responde solo con base en el siguiente contexto.
Si la información no está en el contexto, responde: "Lo siento, no tengo información sobre eso."

Contexto:
${context}

Pregunta: ${question}
`;

    // Llamada a Ollama como ya la tienes
    const ollamaResponse = await axios.post(
      "http://127.0.0.1:11434/api/generate",
      {
        model: "llama3",
        prompt: finalPrompt,
        stream: true,
      },
      { responseType: "stream" }
    );

    let result = "";
    ollamaResponse.data.on("data", (chunk) => {
      const lines = chunk.toString().split("\n").filter(Boolean);
      for (const line of lines) {
        try {
          const json = JSON.parse(line);
          if (json.response) result += json.response;
        } catch (e) {
          // ignorar líneas mal formateadas
        }
      }
    });

    ollamaResponse.data.on("end", () => {
      res.json({ response: result.trim() });
    });

    ollamaResponse.data.on("error", (err) => {
      res.status(500).json({ error: err.message });
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.get("/", (req, res) => {
  res.send("¡Hola desde mi backend con Express!");
});

app.get("/servicio", (req, res) => {
  res.send("¡Hola desde mi backend con Express! Servicio");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});
