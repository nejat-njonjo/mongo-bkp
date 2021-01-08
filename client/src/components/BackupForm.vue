<template>
  <v-form class="backup-form" @submit.prevent="">
    <v-container>
      <v-row v-if="!progress">
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="backupForm.host"
            label="Host (optional)"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="backupForm.port"
            label="Port (optional)"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="backupForm.directory"
            label="Directory (optional)"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="backupForm.database"
            label="Database Name"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="footer" v-if="!progress">
        <v-btn
          depressed
          elevation="0"
          outlined
          @click="close()"
        >
          Close
        </v-btn>

        <v-btn
          depressed
          elevation="2"
          outlined
          @click="createBackup()"
        >
          Backup
        </v-btn>
      </v-row>

      <v-row class="text-center" v-if="progress">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-row>

      <v-snackbar
        v-model="snackbar"
      >
        {{ message }}

        <template v-slot:action="{ attrs }">
          <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </v-form>
</template>

<script>
import BackupService from '../services/backup-service'

export default {
  name: 'BackupForm',

  props: ['database'],

  data: () => ({
    progress: false,
    message: null,
    snackbar: false,
    backupForm: {
      host: null,
      port: null,
      database: null,
      directory: null
    }
  }),

  mounted() {
    this.backupForm.database = this.database
  },

  methods: {
    async createBackup() {
      this.progress = true
      const response = await BackupService.createBackup(this.backupForm)
      console.log(response)
      if (response.success) {
        this.message = response.message
        this.progress = false
        this.snackbar = true
      }
    },
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.backup-form {
  position: absolute;
  background: #fff;
  z-index: 10;
  border-radius: 10px;
  -webkit-box-shadow: 0px 4px 12px rgba(0,0,0,.3);
  -moz-box-shadow: 0px 4px 12px rgba(0,0,0,.3);
  box-shadow: 0px 4px 12px rgba(0,0,0,.3);
}
.footer, .text-center {
  padding: 10px;
  text-align: center;
}
.text-center {
  display: flex;
  justify-content: center;
}
</style>