<template>
  <div class="container" style="margin-top: 10px;">
    <div class="upload-container">
      <h5 style="letter-spacing: -1px; color: grey;">アップロードするFileを選択</h5>
      <b-form-file
        v-model="file"
        style="margin-top: 10px; width: 40vw;"
        :state="Boolean(file)"
        accept="video/*"
        browse-text="Choose File"
      ></b-form-file>
      
      <!--div class="mt-3" style="margin-bottom: 30px; color: grey;">Selected file: {{ file ? file.name : '' }}</div-->
      
      <b-button @click="handleUpload" :disabled="!file || loading" block variant="danger" size="lg" style="width: 40vw; height: 7vh; margin-top: 80px;">
        <div v-if="!loading">
          <font-awesome-icon icon="cloud-upload-alt" style="margin-right: 10px; color: white;"/>
          Upload
        </div>
        <div v-else>Uploading...</div>
      </b-button>
      
      <div style="margin-top: 40px; text-align: center;">
        <!--b-progress v-if="loading" :value="value" :max="max" show-progress animated style="width: 40vw;"></b-progress-->
        <b-spinner v-if="loading" variant="danger" type="grow" label="Spinning"></b-spinner>
      </div>

    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      file: null,
      max: 100,
      value: 100, 
      loading: false
    }
  },
  methods: {
    async handleUpload() { 
      this.loading = true;
      const formData = new FormData();
      formData.append('file', this.file);
      const res = await this.$axios.post('/api/upload', formData);
      console.log(res);
      this.file = null;
      this.loading = false;
    },
  }
}
</script>

<style>

.upload-container {
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
