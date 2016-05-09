var mychar = document.getElementById("nestpiechart");
mychar.style.width = "60%";
mychar.style.height = "70%";
var myChart = echarts.init(document.getElementById('nestpiechart'), 'dark');

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
        data: ['直达','营销广告','搜索引擎','直达2','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : ['0', '30%'],  //设置成绝对的像素值 center: [400, 300] // 设置成相对的百分比 center: ['50%', '50%']
            center: ['50%', '50%'], //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。
            label: {
                normal: {
                    show: true,
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直达'},
                {value:679, name:'营销广告'},
                {value:1548, name:'搜索引擎'}
            ],
        },
        {
            name: '访问来源',
            type: 'pie',
            radius : ['40%', '55%'],  //设置成绝对的像素值 center: [400, 300] // 设置成相对的百分比 center: ['50%', '50%']
            center: ['50%', '50%'], //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度。
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:335, name:'直达2'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ],
        },
    ]
};
myChart.setOption(option);
