<template>
  <v-container>
    <HomeComponent />
  </v-container>
</template>

<script>
// @ is an alias to /src
import HomeComponent from '@/components/HomeComponent'

export default {
  name: 'Home',
  components: {
    HomeComponent
  }
}
</script>
