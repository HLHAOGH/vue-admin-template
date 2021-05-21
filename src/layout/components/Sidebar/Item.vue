<template>
  <div slot="title">
    <icon :name="icon" :class="`menu-icon ${icon === 'dot' ? 'menu-icon-dot' : ''}`" :style="left || (!left && !isCollapse) ? 'margin-left: 18px' : 'margin-left: 0px'" />
    <span style="margin-left: 18px">{{ title }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Item',
  props: {
    icon: {
      type: String,
      default: 'dot'
    },
    title: {
      type: String,
      required: true
    },
    left: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-icon {
  font-size: 18px;
}
.menu-icon-dot {
  font-size: 10px;
}
</style>
