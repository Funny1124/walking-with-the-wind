import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_info: {
      login: false,
      type: '',
      avatar: require('@/assets/img/avatar.png')
    },
    recommend_item: [
      {
        type: '游记',
        region: '希腊',
        image: require('../assets/img/xila.png'),
        description: '远古的风，蓝色的梦 ---希腊山海20天'
      },
      {
        type: '游记',
        region: '新疆',
        image: require('../assets/img/xjcm.png'),
        description: '策马入新疆 三万里秋色自驾行(额济纳 大海道 喀纳斯 独库 喀什 帕米尔 塔克拉玛干 楼兰 俄博梁）'
      },
      {
        type: '游记',
        region: '福建',
        image: require('../assets/img/fjtl.png'),
        description: '人生海海，有福相见：福建土楼东山岛5天4夜自驾之旅（已完结）'
      },
      {
        type: '游记',
        region: '大理',
        image: require('../assets/img/dleh.png'),
        description: '洱海到泸沽湖，大理往卡瓦格博，一段圆梦，一段朝圣——云南自驾之行'
      },
      {
        type: '游记',
        region: '长沙 ',
        image: require('../assets/img/hncs.png'),
        description: '相信我，没有人能拒绝长沙小吃！'
      },
      {
        type: '游记',
        region: '东北',
        image: require('../assets/img/dbcb.png'),
        description: '去长白山就顺路去延吉假装出国吧'
      }
    ],
    shop_item: [
      {
        type: '定制游',
        region: '云南',
        image: require('../assets/img/city.jpg'),
        description: '全国往返云南丽江大理5日自由行（邂逅丽江古城+登顶玉龙雪山+洱海骑行+可调整天数/航班/高铁+全国出发）',
        price: '￥1998'
      },
      {
        type: '定制游',
        region: '山西',
        image: require('../assets/img/city.jpg'),
        description: '全国往返山西5天4晚自由行（五台山+菩萨顶+广化寺+殊像寺+五爷庙+悬空寺+应县木塔+云冈石窟+太原+乔家大院+平遥古城+明清一条街）',
        price: '￥2198'
      },
      {
        type: '定制游',
        region: '新疆',
        image: require('../assets/img/city.jpg'),
        description: '全国往返新疆8日自由行（东方瑞士喀纳斯+网红打卡五彩滩+安集海大峡谷+可调整天数/航班+全国出发）',
        price: '￥2398'
      },
      {
        type: '定制游',
        region: '桂林',
        image: require('../assets/img/city.jpg'),
        description: '全国往返龙脊游江线4日自由行（龙脊梯田+黄洛瑶寨+漓江风光+兴坪古镇+十里画廊+遇龙河漂流+阳朔西街+银子岩+象鼻山）',
        price: '￥2498'
      },
      {
        type: '定制游',
        region: '河北',
        image: require('../assets/img/city.jpg'),
        description: '全国往返凤凰张家界5天4晚半自由行（芙蓉镇+凤凰古城+湘西苗寨+天门山+玻璃栈道+黄龙洞+杨家界+袁家界+魅力湘西+金鞭溪+土司城）',
        price: '￥2598'
      },
      {
        type: '定制游',
        region: '桂林',
        image: require('../assets/img/city.jpg'),
        description: '全国往返桂林4日自由行（龙脊梯田+漓江皮划艇+热气球体验+阳朔骑行+可调整天数/航班/高铁+全国出发）',
        price: '￥2480'
      }
    ],
    dest_item: [
      {
        city: '桂林',
        image: require('../assets/img/city.jpg'),
        description: '桂林，简称“桂”，广西壮族自治区辖地级市、省域副中心城市'
      },
      {
        city: '南宁',
        image: require('../assets/img/river.jpg'),
        description: '南宁，简称“邕”，别称绿城、邕城，是广西壮族自治区辖地级市'
      },
      {
        city: '深圳',
        image: require('../assets/img/river.jpg'),
        description: '深圳，简称“深”，别称鹏城，广东省辖地级市，是广东省副省级市'
      },
      {
        city: '广州',
        image: require('../assets/img/city.jpg'),
        description: '广州，简称“穗”，别称羊城、花城，是广东省辖地级市'
      },
      {
        city: '东莞',
        image: require('../assets/img/river.jpg'),
        description: '东莞，广东省辖地级市，国务院确定的珠江三角洲东岸中心城市。'
      },
      {
        city: '梧州',
        image: require('../assets/img/city.jpg'),
        description: '梧州，广西壮族自治区辖地级市。位于广西东部，地处西江黄金水道'
      }
    ]

  },
  getters: {},
  mutations: {
    adminLogin (state) {
      // 增加一个带参数的mutations方法
      state.login_info.login = true
      state.login_info.type = 'admin'
    },
    userLogin (state) {
      // 增加一个带参数的mutations方法
      state.login_info.login = true
      state.login_info.type = 'user'
    },
    delete_shop_item (state, index) {
      // 增加一个带参数的mutations方法
      state.shop_item.splice(index, 1)
    },
    edit_shop_item (state, [index, item]) {
      // state.shop_item[index] = item //直接赋值，数据更新但是视图不更新
      Vue.set(state.shop_item[index], 'type', item.type)
      Vue.set(state.shop_item[index], 'region', item.region)
      Vue.set(state.shop_item[index], 'image', item.image)
      Vue.set(state.shop_item[index], 'description', item.description)
      Vue.set(state.shop_item[index], 'price', item.price)
    },
    add_shop_item (state, item) {
      // 增加一个带参数的mutations方法
      state.shop_item.push(item)
    }
  },
  actions: {},
  modules: {}
})
