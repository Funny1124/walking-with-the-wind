<template>
  <div>
    <el-card class="box-card">
      <div id="DataNewUsers"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'DataNewUsers',
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
          text: '新增用户数量/个'
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
            data: [1200, 1320, 1010, 1340]
          },
          {
            name: '2020',
            type: 'line',
            data: [3200, 3320, 3010, 3340]
          },
          {
            name: '2021',
            type: 'line',
            data: [1500, 2320, 2010, 1540]
          },
          {
            name: '2022',
            type: 'line',
            data: [2200, 1820, 1910, 2340]
          }
        ]
      }

      const compareNewUsers = this.$echarts.init(document.getElementById('DataNewUsers')) // 图标初始化
      compareNewUsers.setOption(option)
    }

  }
}
</script>

<style scoped>
#DataNewUsers {
  height: 500px;
}
</style>
