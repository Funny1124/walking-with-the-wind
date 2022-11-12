<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>用户数对比</span>
      </div>
      <div id="two"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'CompareNewUsers',
  data () {
    return {}
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      setTimeout(() => {
        this.initChart()
      }, 500)
    },
    initChart () {
      const option = {
        title: {
          text: 'Stacked Line'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }

      const compareNewUsers = this.$echarts.init(document.getElementById('two')) // 图标初始化
      compareNewUsers.setOption(option)
      window.onresize = function () {
        compareNewUsers.resize()
      }
    }

  }
}
</script>

<style scoped>
#two {
  height: 500px;
}
</style>
