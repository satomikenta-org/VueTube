<template>
  <div class="container">

    <div style="display: flex; flex-direction: row; align-items: center; justify-content: center;">
      <b-form>
        <b-form-input
          id="input-1"
          style="width: 60vw; display: inline-block;"
          type="text"
          placeholder="検索"
          autocomplete="none"
        ></b-form-input>
        <b-button style="display: inline-block; border-color: white; background-color: white; height: 35px; text-align: center;">
          <font-awesome-icon icon="search" style="margin: 2px; color: grey;"/>
        </b-button>
      </b-form>

      <div style="margin-top: 3px; margin-left: 30px;">
        <b-button style="display: inline-block; border-color: white; background-color: white; height: 35px; text-align: center;" v-b-popover.hover="'動画を公開しましょう！'">
          <nuxt-link to="/upload"><font-awesome-icon icon="video" style="margin: 2px; color: grey;"/></nuxt-link>
        </b-button>
      </div>
    </div>

    <div class="videos-container" style="width: 90vw; margin-top: 25px;">  
      <h6 style="margin-left: 20px; color: #606060; font-size: 0.9rem;">あなたにおすすめ</h6>
      <div v-for="(item, index) in 22" :key="index">
        <div style="display: flex; justify-content: center; align-items: center; height: 300px;">
          <b-card
            style="max-width: 270px;"
            class="mb-2"
          >
            <div style="display: flex; justify-content: center; align-items: center;">
              <Video videoSrc="https://s3-demo-buckets.s3.us-east-2.amazonaws.com/video/1565265630061.mp4"/>
            </div>
            <b-card-text style="margin-top: 10px;">
              <div style="font-size: 1.1rem;">[公式] レペメンタル</div>
              <div style="display: flex; flex-direction: column; align-items: flex-start;">
                <!--font-awesome-icon icon="thumbs-up" style="margin: 6px; color: grey;"/>
                <font-awesome-icon icon="thumbs-down" style="margin: 6px; color: grey; margin-top: 8px;"/ -->
                <div style="font-size: 0.9rem; color: #606060; margin-left: 3px;">レペゼン地球</div>
                <div style="display: flex; flex-direction: row;">
                  <div style="margin:3px; font-size: 0.9rem; color: #606060;">1.3億回視聴</div>
                  <div style="margin:3px; font-size: 0.9rem; color: #606060;">・3時間前</div>
                </div>
              </div>
            </b-card-text>
          </b-card> 
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Video from '@/components/Video';

export default {
  components: {
    Video,
  },
  data() {
    return {

    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  margin-bottom: 15px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.videos-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 10px;
}

.video-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
