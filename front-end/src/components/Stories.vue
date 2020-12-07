<template>
<div class="admin">
  <h1>Stories of Bacolod</h1>
    <div class="heading">
        <div class="circle">1</div>
        <h2>Select an Author to Read a Story</h2>
        <div class="suggestions" v-if="suggestions.length > 0">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectDisplay(s)">{{s.author}}
          </div>
        </div>
        <div class="upload" v-if="displayStory">
        {{displayStory.author}}
        <p></p>
        {{displayStory.story}}
      </div>
    </div>
    <hr class="solid">
    <div class="heading">
      <div class="circle">2</div>
      <h2>Add a Story</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="author" placeholder="Author">
        <p></p>
        <textarea v-model="story" placeholder="Story" />
        <button @click="upload">Upload</button>
      </div>
      <div class="upload" v-if="addStory">
        <h2>{{addStory.author}}</h2>
        <img :src="addStory.path" />
      </div>
    </div>
        <div class="heading">
      <div class="circle">3</div>
      <h2>Edit/Delete a Story</h2>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findAuthor" placeholder="Search">
        <div class="suggestions" v-if="suggestions.length > 0">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectStory(s)">{{s.author}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findStory">
        <input v-model="findStory.author">
        <p></p>
        <textarea v-model="findStory.story" />
        <p></p>
      </div>
      <div class="actions" v-if="findStory">
        <button @click="deleteStory(findStory)">Delete</button>
        <button @click="editStory(findStory)">Edit</button>
      </div>
    </div>
    <br>
      <br>
      <br>
      <p></p>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Stories',
  data() {
    return {
      author: "",
      story: "",
      addStory: null,
      stories: [],
      findAuthor: "",
      findStory: null,
      displayAuthor: "",
      displayStory: null,
    }
  },
   computed: {
    suggestions() {
      let stories = this.stories.filter(story => story.author.toLowerCase().startsWith(this.findAuthor.toLowerCase()));
      return stories.sort((a, b) => a.author > b.author);
    }
  },
  created() {
    this.getStories();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
      try {
        let r2 = await axios.post('/api/stories', {
          author: this.author,
          story: this.story
        });
        this.addStory = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getStories() {
        try {
            let response = await axios.get("/api/stories");
            this.stories = response.data;
            return true;
        } catch (error) {
            console.log(error);
        }
    },
    selectDisplay(story) {
      this.displayAuthor = "";
      this.displayStory = story;
    },
    selectStory(story) {
      this.findAuthor = "";
      this.findStory = story;
    },
     async deleteStory(story) {
      try {
        await axios.delete("/api/stories/" + story._id);
        this.findStory = null;
        this.getStories();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editStory(story) {
      try {
        await axios.put("/api/stories/" + story._id, {
          author: this.findStory.author,
          story: this.findStory.story,
        });
        this.findStory = null;
        this.getStories();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}

.suggestions {
  width: 200px;
  margin-left: 20px;
  margin-right: 30px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}
.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.image img {
  width: 100%;
}
.image-gallery {
  column-gap: 1.5em;
  display: flex;
  flex-direction: row;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
/* Solid border */
hr.solid {
  border-top: 3px solid #bbb;
}
</style>