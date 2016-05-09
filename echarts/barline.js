var mychar = document.getElementById("barline");
mychar.style.width = "60%";
mychar.style.height = "70%";
var myChart = echarts.init(document.getElementById('barline'), 'dark');

var option = {
    title: {
        text: '柱状图+折线图',
        subtext: '副标题'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['蒸发量','降水量','平均温度']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {},
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series : [
        {
            name:'蒸发量',
            type:'bar',
            yAxisIndex: 0,
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[2, 4.9, 7, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20, 6.4, 3.3]
        },
        {
            name:'降水量',
            type:'bar',
            yAxisIndex: 0,
            label: {
                normal: {
                    show: false,
                    position: 'top'
                }
            },
            data:[2.6, 5.9, 9, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6, 2.3]
        },
        {
            name:'平均温度',
            type:'line',
            yAxisIndex: 1,
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[2, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23, 16.5, 12, 6.2]
        }
    ]
};
myChart.setOption(option);
