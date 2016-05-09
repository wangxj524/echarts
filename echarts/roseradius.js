var mychar = document.getElementById("roseradius");
mychar.style.width = "60%";
mychar.style.height = "70%";
var myChart = echarts.init(document.getElementById('roseradius'), 'dark');

var option = {
    title : {
        text: 'Pie Chart',
        subtext: '副标题',
        x:'center' //'left' or 'right'
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
            saveAsImage: {}
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',         //设置成绝对的像素值 center: [400, 300] // 设置成相对的百分比 center: ['50%', '50%']
            center: ['50%', '60%'], //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。
            roseType : 'radius',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1547, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);
