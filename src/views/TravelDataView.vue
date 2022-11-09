<template>
  <div>
    <h2>travel view</h2>
    <div class="data-map">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>订单统计</span>
            </div>
            <div id="one"></div>
          </el-card>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TravelDataView',
  data () {
    return {}
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      setTimeout(() => {
        this.initCharOne()
      }, 500)
    },
    // 两个图标的生成函数
    initCharOne () {
      const option = {
        dataset: [
          {
            dimensions: ['name', 'age', 'profession', 'score', 'date'],
            source: [
              ['Hannah Krause', 41, 'Engineer', 314, '2011-02-12'],
              ['Zhao Qian', 20, 'Teacher', 351, '2011-03-01'],
              ['Jasmin Krause ', 52, 'Musician', 287, '2011-02-14'],
              ['Li Lei', 37, 'Teacher', 219, '2011-02-18'],
              ['Karle Neumann', 25, 'Engineer', 253, '2011-04-02'],
              ['Adrian Groß', 19, 'Teacher', '-', '2011-01-16'],
              ['Mia Neumann', 71, 'Engineer', 165, '2011-03-19'],
              ['Böhm Fuchs', 36, 'Musician', 318, '2011-02-24'],
              ['Han Meimei', 67, 'Engineer', 366, '2011-03-12']
            ]
          },
          {
            transform: {
              type: 'sort',
              config: {
                dimension: 'score',
                order: 'desc'
              }
            }
          }
        ],
        xAxis: {
          type: 'category',
          axisLabel: {
            interval: 0,
            rotate: 30
          }
        },
        yAxis: {},
        series: {
          type: 'bar',
          encode: {
            x: 'name',
            y: 'score'
          },
          datasetIndex: 1
        }
      }
      var myChart = this.$echarts.init(document.getElementById('one')) // 图标初始化
      myChart.setOption(option)
      window.onresize = function () {
        myChart.resize()
      }
    }
  }
}
</script>

<style scoped>
.data-map #one {
  height: 500px;
}
</style>
