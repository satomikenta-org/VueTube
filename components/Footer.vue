<template>
  <div>
    <hr>
    <div style="margin-left: 10px; display: flex; flex-direction: row; align-items: center; justify-content: flex-start;">
      <div style="margin-right: 40px; margin-bottom: 15px; font-size: 1.1rem; font-weight: bold; letter-spacing: -1px;">
        VueTube
      </div>
      <div style="margin-bottom: 15px;">
        <social-sharing url="https://vuejs.org/" inline-template>
          <div class="social-links">
            <div style="width: 10vw; display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
              <network network="twitter">
                <font-awesome-icon :icon="['fab', 'twitter']" class="fa-3x" style="color: #00aced; height: 20px;" />
              </network>
              <network network="facebook">
                <font-awesome-icon :icon="['fab', 'facebook']" class="fa-3x" style="color: #3b5998; height: 20px;" />
              </network>
              <network network="line">
                <font-awesome-icon :icon="['fab', 'line']" class="fa-3x" style="color: #1dcd00; height: 20px;" />
              </network>
            </div>
            </div>
        </social-sharing>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
}
.social-links {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}
.social-links svg {
    margin: 0.3rem;
    cursor: pointer;
}
</style>
