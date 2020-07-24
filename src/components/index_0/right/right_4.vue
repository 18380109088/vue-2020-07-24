<template>
	<div>
		<a-table 
			:columns="columns" 
			:data-source="data" 
			:pagination="false"
			:bordered="true"
			style="height:114px"
			size="small">
		</a-table>
		
		<div class="hello">
			<div id="myChart0"  :style="{width: '200px', height: '250px'}" style="float:left"></div>
			<div id="myChart1" :style="{width: '200px', height: '250px'}" style="float:left"></div>
			<div id="myChart2" :style="{width: '200px', height: '250px'}" style="float:left"></div>
		</div>
	</div>
</template>
<script>
const columns = [
	{
		title: '作业系统',
		dataIndex: 'name',
		key: 'name',
		width:25
	},
	{
		title: '总量任务',
		dataIndex: 'age',
		key: 'age',
		width:25
	},
	{
		title: '待分配',
		dataIndex: 'address',
		key: 'address',
		width:25
	},
	{
		title: '未处理',
		key: 'tags',
		dataIndex: 'tags',
		width:25
	},
	{
		title: '已完成',
		key: 'key1',
		dataIndex: 'tags',
		width:25
	},
	{
		title: '已退回',
		key: 'key2',
		dataIndex: 'tags',
		width:25
	}
];

const data = [
	{
		key: '1',
		name: '总计',
		age: '37',
		address: '13',
		tags: '12',
		key1: '7',
		key2: '5',
	},
	{
		key: '1',
		name: 'COS_T',
		age: '37',
		address: '13',
		tags: '12',
		key1: '7',
		key2: '5',
	}
];

export default {
	data() {
		return {
			data,
			columns,
		};
	},
	mounted(){
		this.drawLine();
	},
	methods: {
		drawLine() {
			var list = new Array();
		
			/** 数据映射（只需要改这里） **/
			var param = {};
			param.name = '分配超时'; // 标题
			var textStyle = {fontSize:12,color:'#677994'};
		
			param.legendData = [{
				name:'COST',
				textStyle:textStyle
			},{
				name:'远程集中授权',
				textStyle:textStyle
			}]
			
			param.seriesData2 = [ 
				{value:5, name:'COST'},
				{value:15, name:'远程集中授权'}
			];		
			param.seriesData1 = [{ 
				value:20,
				name:param.name
			}]
			list.push(param);
			
			
			/** 数据映射（只需要改这里） **/
			var param = {};
			param.name = '处理超时'; // 标题
			var textStyle = {fontSize:12,color:'#677994'};
			
			param.legendData = [{
				name:'COST',
				textStyle:textStyle
			},{
				name:'远程集中授权',
				textStyle:textStyle
			}]
			
			
			param.seriesData2 = [ 
				{value:15, name:'COST'},
				{value:5, name:'远程集中授权'}
			];		
			param.seriesData1 = [{ 
				value:20,
				name:param.name
			}]
			list.push(param);
			
						
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
				{value:12, name:'严重积压'},
				{value:5, name:'重度积压'},
				{value:3, name:'全部积压'}
			];		
			param.seriesData1 = [{ 
				value:20,
				name:param.name
			}]
			list.push(param);
			
			/** 该处映射处理数据 **/
			for (var i = 0; i < 3; i++) {
				let myChart = this.$echarts.init(document.getElementById('myChart'+i))
				this.setOption(myChart, list[i]);
			}
		},
		/** 设置Option内容 **/
		setOption: function(myChart, param) {
			myChart.setOption({
				title: {
					text: param.name,
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
};
</script>

<style>


</style>