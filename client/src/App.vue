<template>
  <v-app id="app">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style lang="scss">
:root {
  --primary-color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--main-color);
  max-width: 600px;
  margin: 5px auto;
  border: .5px solid var(--primary-color);
  border-radius: 10px;
}
</style>
