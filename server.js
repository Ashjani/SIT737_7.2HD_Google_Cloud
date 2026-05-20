const express = require('express');
const os      = require('os');

const app    = express();
const PORT   = process.env.PORT || 3000;
const STARTED = Date.now();

const messages = [
  "Containerised with Docker, orchestrated with Kubernetes, Ash Alijani, SIT737.",
  "CI/CD pipeline automated via Google Cloud Build, Ash Alijani, Deakin University.",
  "Running live on Google Kubernetes,SIT737 Cloud Native Application 7.2HD.",
  "Ash Alijani, Stage 1 of 3.",
  "Docker Hub registry, GKE deployment, Cloud Build."
];

app.get('/', (req, res) => {
  res.json({
    project:    "SIT737 Cloud Native Capstone — Stage 2",
    author:     "Ash Alijani",
    university: "Deakin University",
    unit:       "SIT737 Cloud Native Application Development",
    version:    "2.0.0"
  });
});

app.get('/api/message', (req, res) => {
  const pick = messages[Math.floor(Math.random() * messages.length)];
  res.json({ message: pick });
});

app.get('/api/system', (req, res) => {
  const uptimeSecs = Math.floor((Date.now() - STARTED) / 1000);
  res.json({
    status:      "running",
    hostname:    os.hostname(),
    uptime:      `${uptimeSecs}s`,
    nodeVersion: process.version,
    port:        PORT,
    timestamp:   new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Ash Alijani, SIT737 7.2HDAPI running on port ${PORT}`);
});