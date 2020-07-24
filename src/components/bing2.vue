<template>
	<div class="hello">
		<div id="myChart" :style="{width: '200px', height: '250px'}"></div>
	</div>
</template>

<script>
export default {
	name: 'hello',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	mounted(){
		this.drawLine();
	},
	methods: {
		drawLine() {
			/** 数据映射（只需要改这里） **/
			var param = {};
			param.name = '积压情况'; // 标题
			var textStyle = {fontSize:12,color:'#677994'};
			
			param.legendData = [{
				name:'严重积压',
				textStyle:textStyle
			},{
				name:'重度积压',
				textStyle:textStyle
			},{
				name:'全部积压',
				textStyle:textStyle
			}]
			
			
			param.seriesData2 = [ 
				{value:15, name:'严重积压'},
				{value:5, name:'重度积压'},
				{value:3, name:'全部积压'}
			];		
			param.seriesData1 = [{ 
				value:20,
				name:param.name
			}]
					
					
		
			let myChart = this.$echarts.init(document.getElementById('myChart'))
			myChart.setOption({
				title: {
					text: '积压情况',
					left: 'center', // 居中
					padding: [
						20, // 上
						0, // 右
						0, // 下
						0, // 左
					],
					textStyle: {
						color: '#677994', // 字体颜色
						fontStyle: 'normal' // 字体样式
					}
				},
				tooltip: {},
				color:['#43DCFF', '#C0EF84','yellow','blueviolet'],
                legend: {
					show: true, // 开启
					top: '200',
					orient : 'horizontal',// 布局朝向
					data:param.legendData
                },
				series: [
					{
						name:param.name,
						type:'pie',
						selectedMode: 'single',
						radius: [0, '30%'],
						hoverOffset: 0,
						hoverAnimation: false,
						tooltip:{
							show:false
						},
						itemStyle:{
							opacity: 0
						},
						label: {
							normal: {
								position: 'center',
								formatter: '{per|{c}}{b|个}\n{a|{b}}\n{hr|}',
								rich: {
									per: {
										color: '#0abffd',
										fontSize: 28,
										lineHeight: 28,
										align: 'center'
									},
									a: {
										color: '#999999',
										align: 'center',
										fontSize: 12                                        
									},
									b: {
										color: '#0abffd',
										fontSize: 12,
										lineHeight: 40,
										align: 'center'
									},
									hr: {
										width: '100%',
										height: 0,
										alien:'center'
									}
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data:param.seriesData1
					},
					{
						name:param.name,
						type:'pie',
						radius: ['60%', '50%'],
						avoidLabelOverlap: false,
						color:['red','#43DCFF', '#C0EF84','yellow'],
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: false,
								textStyle: {
									fontSize: '12',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data:param.seriesData2
					}
				]
        });
    }
  }
}
</script>