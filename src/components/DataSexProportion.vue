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
      }, 200)
    },
    initChart () {
      const compareNewUsers = document.getElementById('DataSexProportion')// 图标初始化
      const myChart = this.$echarts.init(compareNewUsers)
      const data1 = [
        {
          name: '男',
          value: 70
        },
        {
          name: '女',
          value: 75
        }
      ]
      const data2 = [
        {
          name: '男',
          value: 75
        },
        {
          name: '女',
          value: 72
        }
      ]
      const data3 = [
        {
          name: '男',
          value: 80
        },
        {
          name: '女',
          value: 73
        }
      ]
      const option = {
        title: [
          {
            text: '用户男女比例变化',
            left: 'center'
          },
          {
            subtext: '2020年',
            left: '16.67%',
            top: '75%',
            textAlign: 'center'
          },
          {
            subtext: '2021年',
            left: '50%',
            top: '75%',
            textAlign: 'center'
          },
          {
            subtext: '202年',
            left: '83.33%',
            top: '75%',
            textAlign: 'center'
          }
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            data: data1,
            label: {
              position: 'outer',
              alignTo: 'none',
              bleedMargin: 5
            },
            left: 0,
            right: '66.6667%',
            top: 0,
            bottom: 0
          },
          {
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            data: data2,
            label: {
              position: 'outer',
              alignTo: 'labelLine',
              bleedMargin: 5
            },
            left: '33.3333%',
            right: '33.3333%',
            top: 0,
            bottom: 0
          },
          {
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            data: data3,
            label: {
              position: 'outer',
              alignTo: 'labelLine',
              bleedMargin: 5
            },
            left: '66.6666%',
            right: 0,
            top: 0,
            bottom: 0
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
  height: 600px;
}
</style>
