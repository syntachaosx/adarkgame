// 大地图模式，设定一个地块面积为 2km * 2km，在营地视图下，地块最小单位为 4m * 4m
// 坐标始终以篝火为中心，x，y 正负250，x 轴向东，y 轴向北
// 以地块坐标'x,k'为key，存储地块信息

export class HomeModule  {
  name = 'home'
  constructor () {
    this.blockStatus = {}
    this.buildings = []
    this.overview = {
      territorial_radius: 0
    }
  }

  dispatch (modules, action) {

  }

  get () {
    return {
      buildings: this.buildings,
      overview: this.overview,
    }
  }

  init ({ home = {}}) {
    Object.assign(this, home)
  }

  save () {
    return this.get()
  }
}
