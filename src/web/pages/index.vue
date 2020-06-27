<template>
  <div>
    <v-flex d-flex>
      <v-layout wrap>
        <v-flex lg3 v-for="item in hotlist.items" :key="item.id">
          <v-card height="100%" elevation="5">
            <v-img height="80%" :src="`/api/images/${item.imageId}`"></v-img>
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-text>Published: {{ item.yearPublished }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
    <!-- <v-card
        class="d-flex flex-wrap"
        flat
        tile
      >
      <v-card
        v-for="item in hotlistItems"
        :key="item.id"
        class="pa-2"
        min-width="15%"
        max-width="15%"
        min-height="40%"
        max-height="40%"
      >
        <v-card-title>{{ item.name }}</v-card-title>
        <v-card-text>Published: {{ item.yearPublished }}</v-card-text>
      </v-card>
    </v-card> -->
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  async asyncData({ $http }) {
    // const { data } = await this.$http.$get('http://icanhazip.com');
    const hotlist = await $http.$get('/api/games/hot');

    return { hotlist }
  }
}
</script>
