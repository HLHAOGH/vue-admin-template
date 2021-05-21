<template>
  <div class="emojis-container">
    <div class="emojis-wrap" :style="`width: ${width}px;height: ${height}px `">
      <el-tabs v-model="activePane">
        <el-tab-pane v-for="(emoji, ky) in Emojis" :key="ky" :label="emoji.title" :name="emoji.key">
          <div class="emoji-item" :style="`width: ${width}px;height: ${height -30}px `">
            <span v-for="(item, index) in emoji.value" :key="index" class="emoji_icon" :title="item.name" @click="handlePickerEmoji(ky, index)">
              {{ item.emoji }}
            </span>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { Emojis } from './emojis'
export default {
  name: 'MiniEmoji',
  props: {
    width: {
      type: Number,
      default: 180
    },
    height: {
      type: Number,
      default: 150
    }
  },
  data() {
    return {
      activePane: 'smileFace',
      Emojis: Emojis
    }
  },
  methods: {
    handlePickerEmoji(ky, index) {
      this.$emit('picker', this.Emojis[ky].value[index].emoji)
    }
  }
}
</script>

<style lang="scss" scoped>
.emojis-container{
  position: relative;
  .emojis-wrap{
    border-bottom: 1px solid #ebeef5
  }
  .emoji-item{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 0 25px 12px;;
    overflow-y: scroll;
    .emoji_icon{
      width: 24px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      cursor: pointer;
      &:hover{
        background: #ebeef5;
      }
    }
  }
}
</style>

<style>
.el-tabs__item{
  padding: 0 11px;
}
.el-tabs__active-bar{
  width:30px;
  transform: translateX(48px);
}
.el-tabs.el-tabs--top{
  border: 1px solid #ebeef5 !important;
  border-radius: 10px !important;
}
</style>
