<template>
  <v-app :dark="darkTheme">
    <v-navigation-drawer
      v-model="drawer"
      :expand-on-hover="true"
      :clipped="true"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="true" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-switch v-model="darkToggle">
        <template v-slot:label>
          <v-icon>{{ darkToggle ? "mdi-moon-waxing-crescent" : "mdi-white-balance-sunny" }}</v-icon>
        </template>
      </v-switch>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :fixed="fixedFooter" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      darkToggle: this.$vuetify.theme.dark,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: 'Nuxt.js | Azure Static Web App'
    }
  },
  computed: {
    darkTheme() {
      this.$vuetify.theme.dark = this.darkToggle;
      return (this.$vuetify.theme.dark);
    }
  }
}
</script>
