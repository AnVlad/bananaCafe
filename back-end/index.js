const PORT = 4000;
const app = require('./app');

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} port`);
});
