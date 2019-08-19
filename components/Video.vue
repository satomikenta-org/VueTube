<template>
  <video id='my-video' class='video-js' controls preload='auto' width='200' height='150' style="margin-top: 15px; border-radius: 5px;">
      <source :src='videoSrc' type='video/mp4'>
      <p class='vjs-no-js'>
        To view this video please enable JavaScript, and consider upgrading to a web browser that
        <a href='https://videojs.com/html5-video-support/' target='_blank'>supports HTML5 video</a>
      </p>
  </video>
</template>

<script>
export default {
  props: [
    'videoSrc'
  ],
  mounted() {
    console.log(this.videoSrc);
  }
}
</script>

<style>

</style>

// <Video <video id='my-video' class='video-js' controls preload='auto' width='640' height='264'>
      <source src='@/assets/videos/sample.mp4' type='video/mp4'>
      <p class='vjs-no-js'>
        To view this video please enable JavaScript, and consider upgrading to a web browser that
        <a href='https://videojs.com/html5-video-support/' target='_blank'>supports HTML5 video</a>
      </p>
    </video>/>