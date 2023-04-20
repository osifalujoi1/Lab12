const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const fictionfamilies = [
    {id: 1, title: 'The Incredibles'},
    {id: 2, title: 'Fantastic Four'},
    {id: 3, title: 'Summers/Grey'},
    {id: 4, title: 'Hulks'},
    {id: 5, title: 'Pym/Ultron'}
  ];
  res.json(fictionfamilies);
});
app.post('/', (req, res) => {
  const newfictionfamily = {
    id: 6, title: req.body.title
  };
  res.json(newfictionfamily);
});
app.put('/user', (req, res) => {
  const editfictionfamily = {
    id: req.body.id, title: req.body.title
  };
  res.json(editfictionfamily)
});
app.delete('/user', (req, res) => {
  const erasefictionfamily = {
    id: req.body.id, title: req.body.title
  };
  res.json(erasefictionfamily)
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('API server listening on port ${port}')
});
