const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

// connect to the database
mongoose.connect('mongodb://localhost:27017/pbm', {
  useNewUrlParser: true,
});

// Create a scheme for items in the museum: a title and a path to an image.
const soulSchema = new mongoose.Schema({
  name: String,
  path: String,
  description: String,
  missionary: String,
});

const storySchema = new mongoose.Schema({
  author: String,
  story: String
});

const Soul = mongoose.model('Soul', soulSchema);
const Story = mongoose.model('Story', storySchema);

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

app.post('/api/souls', async (req, res) => {
  const soul = new Soul({
    name: req.body.name,
    path: req.body.path,
    description: req.body.description,
    missionary: req.body.missionary
  });
  try {
    await soul.save();
    res.send(soul);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/stories', async (req, res) => {
  const story = new Story({
    author: req.body.author,
    story: req.body.story,
  });
  try {
    await story.save();
    res.send(story);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/souls', async (req, res) => {
  try {
    let souls = await Soul.find();
    res.send(souls);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/stories', async (req, res) => {
  try {
    let stories = await Story.find();
    res.send(stories);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/souls/:id', async (req, res) => {
  try {
    await Soul.deleteOne({ _id: req.params.id });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/stories/:id', async (req, res) => {
  try {
    await Story.deleteOne({ _id: req.params.id });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/souls/:id', async (req, res) => {
  try {
    let soul = await Soul.findOne({ _id: req.params.id });
    soul.name = req.body.name;
    soul.description = req.body.description;
    soul.missionary = req.body.missionary;
    await soul.save();
    res.send(soul);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/stories/:id', async (req, res) => {
  try {
    let story = await Story.findOne({ _id: req.params.id });
    story.author = req.body.author;
    story.story = req.body.story;
    await story.save();
    res.send(story);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
