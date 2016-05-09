var mychar = document.getElementById("boxplot");
mychar.style.width = "60%";
mychar.style.height = "70%";
var myChart = echarts.init(document.getElementById('boxplot'), 'dark');

var data = echarts.dataTool.prepareBoxplotData([
    [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
    [960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880, 830, 800, 790, 760, 800],
    [880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840, 840, 850, 840, 840, 840],
    [890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880, 720, 840, 850, 850, 780],
    [890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810, 940, 950, 800, 810, 870]
]);

var option = {
    title : [
        {
            text: 'Box Plot',
            subtext: '普通boxplot',
            left:'center'
        },
        {
            text: 'annotation',
            textStyle: {
                fontSize: 15
            },
            right: '10%',
            top: '95%'
        }
    ],
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    tooltip : {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '10%',
        right: '15%',
        bottom: '10%'
    },
    legend: {
        data: ['line', 'line2', 'line3']
    },
    xAxis: {
        type: 'category',
        name: 'xaxis name',
        nameLocation: 'middle',
        data: data.axisData,
        boundaryGap: true,
        nameGap: 30,
        splitArea: {
            show: false
        },
        axisLabel: {
            formatter: function (index) {
                var xxx = ['a','b','c','d','e'];
                return xxx[index];
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        name: 'yaxis name',
        nameLocation: 'middle',
        nameGap: 35,
        min: 500,
        splitArea: {
            show: true
        }
    },
    series: [
        {
            name: 'boxplot',
            type: 'boxplot',
            data: data.boxData,
            tooltip: {
                formatter: function (param) {
                    return [
                        'Experiment ' + param.name + ': ',
                        'upper: ' + param.data[0],
                        'Q1: ' + param.data[1],
                        'median: ' + param.data[2],
                        'Q3: ' + param.data[3],
                        'lower: ' + param.data[4]
                    ].join('<br/>')
                }
            }
        },
        {
            name: 'outlier',
            type: 'scatter',
            data: data.outliers
        }
    ]
};
myChart.setOption(option);
