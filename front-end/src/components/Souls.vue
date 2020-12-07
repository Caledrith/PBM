<template>
<div class="admin">
  <h1>Souls of Bacolod</h1>
    <div class="heading">
        <section class="image-gallery">
        <div class="image" v-for="soul in souls" :key="soul.id">
        <h2>{{soul.name}}</h2>
        <h3>{{soul.description}}</h3>
        <h4>{{soul.missionary}}</h4>
        <img :src="soul.path" />
        </div>
        </section>
    </div>
    <hr class="solid">
    <div class="heading">
      <div class="circle">1</div>
      <h2>Add a Soul</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="name" placeholder="Name">
        <p></p>
        <textarea v-model="description" placeholder="Description" />
        <textarea v-model="missionary" placeholder="Missionary" />
        <input type="file" name="photo" @change="fileChanged">
        <button @click="upload">Upload</button>
      </div>
      <div class="upload" v-if="addSoul">
        <h2>{{addSoul.name}}</h2>
        <img :src="addSoul.path" />
      </div>
    </div>
        <div class="heading">
      <div class="circle">2</div>
      <h2>Edit/Delete a Soul</h2>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findName" placeholder="Search">
        <div class="suggestions" v-if="suggestions.length > 0">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectSoul(s)">{{s.name}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findSoul">
        <input v-model="findSoul.name">
        <p></p>
        <textarea v-model="findSoul.description" />
        <p></p>
        <textarea v-model="findSoul.missionary" />
        <p></p>
        <img :src="findSoul.path" />
      </div>
      <div class="actions" v-if="findSoul">
        <button @click="deleteSoul(findSoul)">Delete</button>
        <button @click="editSoul(findSoul)">Edit</button>
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
  name: 'Souls',
  data() {
    return {
      name: "",
      description: "",
      missionary: "",
      file: null,
      addSoul: null,
      souls: [],
      findName: "",
      findSoul: null,
    }
  },
   computed: {
    suggestions() {
      let souls = this.souls.filter(soul => soul.name.toLowerCase().startsWith(this.findName.toLowerCase()));
      return souls.sort((a, b) => a.name > b.name);
    }
  },
  created() {
    this.getSouls();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/souls', {
          name: this.name,
          path: r1.data.path,
          description: this.description,
          missionary: this.missionary,
        });
        this.addSoul = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getSouls() {
        try {
            let response = await axios.get("/api/souls");
            this.souls = response.data;
            return true;
        } catch (error) {
            console.log(error);
        }
    },
selectSoul(soul) {
      this.findName = "";
      this.findSoul = soul;
    },
     async deleteSoul(soul) {
      try {
        await axios.delete("/api/souls/" + soul._id);
        this.findSoul = null;
        this.getSouls();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editSoul(soul) {
      try {
        await axios.put("/api/souls/" + soul._id, {
          name: this.findSoul.name,
          description: this.findSoul.description,
          missionary: this.findSoul.missionary
        });
        this.findSoul = null;
        this.getSouls();
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