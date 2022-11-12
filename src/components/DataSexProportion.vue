<template>
  <div>
    <el-card class="box-card">
      <div id="DataSexProportion"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'DataSexProportion',
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
      const compareNewUsers = document.getElementById('DataSexProportion')// 图标初始化
      const myChart = this.$echarts.init(compareNewUsers)
      const option = {
        legend: {},
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        dataset: {
          source: [
            ['product', '2019', '2020', '2021', '2022'],
            ['男', 56.5, 82.1, 88.7, 70.1],
            ['女', 51.1, 51.4, 55.1, 53.3]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '55%' },
        series: [
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            emphasis: {
              focus: 'self'
            },
            label: {
              formatter: '{b}: {@2012} ({d}%)'
            },
            encode: {
              itemName: 'product',
              value: '2012',
              tooltip: '2012'
            }
          }
        ]
      }
      myChart.on('updateAxisPointer', function (event) {
        const xAxisInfo = event.axesInfo[0]
        if (xAxisInfo) {
          const dimension = xAxisInfo.value + 1
          myChart.setOption({
            series: {
              id: 'pie',
              label: {
                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
              },
              encode: {
                value: dimension,
                tooltip: dimension
              }
            }
          })
        }
      })
      myChart.setOption(option)

      compareNewUsers.setOption(option)
    }

  }
}
</script>

<style scoped>
#DataSexProportion {
  height: 500px;
}
</style>
