import { playMode } from 'common/js/config'
import { loadSearch } from 'common/js/cache'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [], // 顺序播放时排序一致
  sequenceList: [], // 随机播放时列表
  mode: playMode.sequence,
  currentIndex: -1, // 当前播放位置
  disc: {},
  topList: {},
  searchHistory: loadSearch()
}

export default state
