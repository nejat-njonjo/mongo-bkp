<template>
  <div class="home-page">
    <BackupForm />
    <v-list
      subheader
      two-line
    >
      <v-subheader inset>Databases</v-subheader>

      <v-list-item
        v-for="database in databases"
        :key="database.name"
      >
        <v-list-item-avatar>
          <v-icon
            class="grey lighten-1"
            dark
          >
            mdi-database
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="database.name"></v-list-item-title>
          <v-list-item-subtitle v-text="'Size: ' + formatBytes(database.sizeOnDisk)"></v-list-item-subtitle>
          <v-list-item-subtitle v-text="database.empty ? 'Empty: YES': 'Empty: NO'"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon title="Backup" @click="toggleBackup(database.name)">
            <v-icon color="grey lighten-1">mdi-backup-restore</v-icon>
          </v-btn>

          <BackupForm :database="database.name" v-if="activeDatabase === database.name"/>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import BackupForm from './BackupForm'
import DBService from '../services/db-service'

export default {
  name: 'HomeComponent',
  components: {
    BackupForm
  },

  data: () => ({
    databases: [],
    activeDatabase: null
  }),

  async mounted() {
    this.databases = await this.loadDatabases()
  },

  methods: {
    async loadDatabases() {
      const response = await DBService.getDatabases()
      return response.databases
    },

    formatBytes(bytes, decimals = 2) {
      if (bytes === 0) return '0 Bytes';

      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

      const i = Math.floor(Math.log(bytes) / Math.log(k));

      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    },

    toggleBackup(dbname) {
      this.activeDatabase = this.activeDatabase !== dbname ? dbname : null
    }
  }
}
</script>

<style>

</style>