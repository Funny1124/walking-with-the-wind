<template>
  <div>
    <el-card class="box-card">
      <div id="DataAgeDistribution"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'DataAgeDistribution',
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
          text: '年龄段占比'
        },
        legend: {
          top: 'bottom'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: {
              show: true,
              readOnly: false
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              {
                value: 40,
                name: '20-29'
              },
              {
                value: 38,
                name: '40-49'
              },
              {
                value: 32,
                name: '30-39'
              },
              {
                value: 30,
                name: '小于20'
              },
              {
                value: 28,
                name: '50-59'
              },
              {
                value: 26,
                name: '大于60'
              }
            ]
          }
        ]
      }
      const compareNewUsers = this.$echarts.init(document.getElementById('DataAgeDistribution')) // 图标初始化
      compareNewUsers.setOption(option)
    }

  }
}
</script>

<style scoped>
#DataAgeDistribution {
  height: 600px;
}
</style>
