var mychar = document.getElementById("barchart");
mychar.style.width = "60%";
mychar.style.height = "70%";
var myChart = echarts.init(document.getElementById('barchart'), 'dark');

var option = {
    title: {
        text: 'title',
        subtext: 'subtitle'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['利润','支出','收入']
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
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    series : [
        {
            name:'利润',
            type:'bar',
            stack: 'a',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[200, 170, 240, 244, 200, 220, 210],
        },
        {
            name:'支出',
            type:'bar',
            stack: 'b',
            label: {
                normal: {
                    show: true,
                    position: 'right'
                }
            },
            data:[320, 302, 341, 374, 390, 450, 420],
        },
        {
            name:'收入',
            type:'bar',
            stack: 'b',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            data:[-120, -132, -101, -134, -190, -230, -210],
        },
    ]
};
myChart.setOption(option);
