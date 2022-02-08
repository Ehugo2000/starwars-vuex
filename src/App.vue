<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <p>APP-view</p>
    </div>
    <section>
      <ul>
       <Loader v-if="loading"/>

        <li v-else v-for="character in renderCharacterList" :key="character.name"
        @click="currentCharacter = character"
        >
          {{ character.name }}
        </li>
      </ul>
    </section>
    <section class="character-info">
      <article class="character-details" v-if="currentCharacter">
        {{currentCharacter}}
      </article>
      <article class="planet-details"></article>
    </section>
    <button @click="getCharacterList">Fetch</button>
    <span>
    <button>&lt;</button>
    <p>{{currentPage}} / {{maxPages}}</p>
    <button>&gt;</button>
    </span>
    <router-view />
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
export default {
  name: 'CharacterList',
  components: {Loader},
  data(){return{
    loading: true,
    currentCharacter: null,
  }},
  async mounted(){
    await this.$store.dispatch('fetchCharacters')
    this.loading = false
  },
  methods: {
    async getCharacterList() {
      await this.$store.dispatch('fetchCharacters');
    },
  },
  computed: {
    renderCharacterList() {
      return this.$store.state.characterList;
    },
    currentPage(){
      return this.$store.state.currentPage
    },
    maxPages(){
      return this.$store.state.maxPages
    },
  },
};
</script>

<style>
#app{
  display: grid;
  gap: 3rem;
 
}

span{
  display: flex;
}


</style>
