const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>🚀 Deploy Sprint App — Scenario 1</h1><p>Pipeline is healthy.</p>');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/team', (req, res) => {
  res.send('<h1>Team Route</h1><p>Deployed via CI/CD pipeline 🚀</p>');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));