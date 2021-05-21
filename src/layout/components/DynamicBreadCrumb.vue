<template>
  <div v-if="options && options.length" class="warp">
    <div v-for="(option, index) in options" :key="index" class="warp-item" @click="handleRouter(option.path)">
      <span>{{ option.name }}</span>
      <span class="close-icon" @click="handleClose(index)">X</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: this.$store.state.breadCrumb
    }
  },
  methods: {
    handleClose(index) {
      this.options.splice(index, 1)
      this.$store.commit('updatebreadCrumb', this.options)
    },
    handleRouter(path) {
      if (path === this.$route.path) {
        window.location.reload(location.href)
      } else {
        this.$router.push({ path })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.warp{
  width: 100%;
  padding: 5px 5px 5px 15px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  overflow-x: auto;
  box-shadow: 1px 2px 1px rgb(233, 235, 236);
  &::-webkit-scrollbar{
    width: 5px;
    height: 15px;
  }
  &::-webkit-scrollbar-thumb{
    border-radius: 50%;
    background: rgb(233, 235, 236);
  }
  &::-webkit-scrollbar-track{
    background: #ffffff;
  }
  .warp-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    font-size: 12px;
    background: #f5f7fa;
    cursor: pointer;
    border-radius: 3px;
    .close-icon{
      color: black;
      padding: 0 3px;
      margin-left: 10px;
      font-size: 14px;
    }
  }
  .warp-item + .warp-item{
    margin-left: 5px;
  }
}
</style>
