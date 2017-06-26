<template>
 <transition name="slide">
  <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
 </transition>
</template>

<script>
  import musicList from 'components/music-list/music-list'
  import { mapGetters } from 'vuex'
  import { getSongList } from 'api/recommend'
  import { ERR_OK } from 'api/config'

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
    created() {
      this._getSongList()
    },
    methods: {
      _getSongList() {
        getSongList(this.disc.dissid).then(res => {
          if (res.code === ERR_OK) {
            console.log(res.cdlist[0].songlist)
          }
        })
      }
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
