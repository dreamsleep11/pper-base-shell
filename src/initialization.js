import kernal from 'pper-vue-kernal/index'
import pperBaseBox from '../../pper-base-box'
export default {
  init() {
    /**
     * 注册模块链路
     */
    this.makeWormhole()
    /**
     *装载核心
     */
    kernal.load(this.options)
    console.info(kernal)
  },
  options: {
    indexName: pperBaseBox.entrance.home.tag, // 初始加载路由名称
    boxs: [{ box: pperBaseBox, layout: undefined }], // 注册模块
    /**
     * 网络请求拦截器
     */
    interceptors: {
      network: {
        response: response => {
          console.info(response)
          return response
        },
        request: config => {
          config.dddd = 'ddd'
        }
      },
      router: {
        before: function (to, from, next) {
          console.info('before')
          next()
        },
        after: function (to) {
          console.info('after')
        }
      }
    }
  },
  /**
   * 注册模块链路
   */
  makeWormhole() {
    kernal.makeWormhole(pperBaseBox.outter.test, pperBaseBox.entrance.about)
  }
}
