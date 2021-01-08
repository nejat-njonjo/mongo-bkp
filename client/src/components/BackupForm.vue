<template>
  <div class="backup-form">

  </div>
</template>

<script>
export default {
  name: 'BackupForm',

  data: () => ({
    backupForm: {
      host: null,
      port: null,
      database: null,
      directory: null
    }
  }),

  methods: {
    createBackup() {
      console.log(this.backupForm)
    }
  }
}
</script>

<style>

</style>