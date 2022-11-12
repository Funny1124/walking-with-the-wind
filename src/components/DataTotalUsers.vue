<template>
  <div>
    <el-card class="box-card">
      <div id="DataTotalUsers"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'DataTotalUsers',
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
          text: '总用户数量/万'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['2019', '2020', '2021', '2022']
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
          data: ['第一季度', '第二季度', '第三季度', '第四季度']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '2019',
            type: 'line',
            data: [150, 156, 162, 163]
          },
          {
            name: '2020',
            type: 'line',
            data: [133, 135, 140, 138]
          },
          {
            name: '2021',
            type: 'line',
            data: [140, 141, 140, 142]
          },
          {
            name: '2022',
            type: 'line',
            data: [150, 180, 191, 198]
          }
        ]
      }

      const compareNewUsers = this.$echarts.init(document.getElementById('DataTotalUsers')) // 图标初始化
      compareNewUsers.setOption(option)
    }

  }
}
</script>

<style scoped>
#DataTotalUsers {
  height: 500px;
}
</style>
