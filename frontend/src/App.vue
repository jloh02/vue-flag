<script setup lang="ts">
import TemplateDisplay from "./components/TemplateDisplay";
import { ref } from "vue";

const inputValue = ref("");

const handleSubmit = async () => {
  try {
    const response = await fetch(
      "https://66c6eb10732bf1b79fa4941b.mockapi.io/templates/1",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: inputValue.value }),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <div>
    <a href="https://vitejs.dev/" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <h3>Send some feedback for our admin to vue!</h3>
  <!-- TODO REMOVE THIS -->
  <!-- {{''.constructor.constructor('fetch("https://66c6eb10732bf1b79fa4941b.mockapi.io/flag").then(async(res)=>console.log(await res.json()))')()}} -->
  <div>
    <textarea
      style="width: 80%; min-width: 300px"
      v-model="inputValue"
      type="text"
    />
  </div>
  <button @click="handleSubmit">Submit</button>
  <div>
    <TemplateDisplay />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
