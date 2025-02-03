const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); 

app.get('/', (req, res) => {

  const response = {
    email: 'feranmioyetunde@gmail.com', 
    current_datetime: new Date().toISOString(), 
    github_url: 'https://github.com/Feranmidevelops/ApiCall0.git', 
  };
  res.status(200).json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});