<template>
 <transition name="slide">
  <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
 </transition>
</template>

<script>
  import musicList from 'components/music-list/music-list'
  import { mapGetters } from 'vuex'

  export default {
    name: 'disc',
    computed: {
      title() {
        return this.disc.dissname
      },
      bgImage() {
        return this.disc.imgurl
      },
      ...mapGetters([
        'disc'
      ])
    },
    components: {
      musicList
    }
  }
</script>

<style lang="scss" scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.3s;
  }
  .slide-enter,
  .slide-leave-to {
    transform: translate3d(100%, 0, 0);
  }
</style>
