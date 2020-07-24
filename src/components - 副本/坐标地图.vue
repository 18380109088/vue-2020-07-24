<template>
	<div class="echarts">
		<h2 id="top_head">员工渠道</h2>
		<div id="top_body">
			<a-button type="primary" @click="click1" style="right:200px">跳转按钮·一</a-button>
			<a-button type="primary" @click="click2" style="right:150px">按钮二</a-button>
		</div>
		<div ref="myEchart" id="main"></div>
	</div>
</template>

<script>
import echarts from "echarts"
import 'echarts/map/js/china.js' // 引入中国地图数据

export default {
	name: "echarts",
	props: ["userJson"],
	data() {
		return {
			chart: null
		};
	},
	mounted() {
		this.chinaConfigure();
	},
	beforeDestroy() {
		if (!this.chart) {
			return;
		}
		this.chart.dispose();
		this.chart = null;
	},
	methods: {
		chinaConfigure() {
			let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所
			//window.onresize = myChart.resize; // 改变浏览窗体大小来促发事件
			
			/** 点击事件 **/
		    myChart.on('click', function (params) {
				console.log(params);
				alert(params.name);
			});
			
			/** 映射值 **/
			var list = [
						{name:"南海诸岛",value:0},
						{name: '北京', value: randomValue()},
						{name: '天津', value: randomValue()},
						{name: '上海', value: randomValue()},
						{name: '重庆', value: randomValue()},
						{name: '河北', value: randomValue()},
						{name: '河南', value: randomValue()},
						{name: '云南', value: randomValue()},
						{name: '辽宁', value: randomValue()},
						{name: '黑龙江', value: randomValue()},
						{name: '湖南', value: randomValue()},
						{name: '安徽', value: randomValue()},
						{name: '山东', value: randomValue()},
						{name: '新疆', value: randomValue()},
						{name: '江苏', value: randomValue()},
						{name: '浙江', value: randomValue()},
						{name: '江西', value: randomValue()},
						{name: '湖北', value: randomValue()},
						{name: '广西', value: randomValue()},
						{name: '甘肃', value: randomValue()},
						{name: '山西', value: randomValue()},
						//{name: '内蒙古', value: randomValue()},
						{name: '陕西', value: randomValue()},
						{name: '吉林', value: randomValue()},
						{name: '福建', value: randomValue()},
						//{name: '贵州', value: randomValue()},
						//{name: '广东', value: randomValue()},
						{name: '青海', value: randomValue()},
						{name: '西藏', value: randomValue()},
						{name: '四川', value: randomValue()},
						{name: '宁夏', value: randomValue()},
						{name: '海南', value: randomValue()},
						{name: '台湾', value: randomValue()},
						{name: '香港', value: randomValue()},
						{name: '澳门', value: randomValue()}
					]
 
			myChart.setOption({
				backgroundColor: "#F5F5F5", // 背景色
				/** 鼠标移到图里面的浮动提示框 **/
				tooltip: {
					formatter:function(params,ticket, callback){
						return params.seriesName+'<br />'+params.name+'：'+params.value
					}
				},
				/** 图片注释 **/
				visualMap: { 
					min: 0,
					max: 1500,
					left: 'right',// left（左）、right（右）
					top: 'bottom',// bottom（下）、top（上）
					text: ['高','低'],
					inRange: {
						color: ['#e0ffff', '#006edd']
					},
					show:true
				},
				/** 地理坐标必须配置 **/
				geo: {
					map: 'china', // 使用的基础数据
					roam: false, // false 禁止拖动/缩放，默认 false
					zoom:1.23, // 缩放比例
					/** 图形上的文本标签 **/
					label: {
						/** 地名显示 **/
						normal: {
							show: true,
							fontSize:'10',
							color: 'rgba(0,0,0,0.7)'
						}
					},
					/** 地图区域的颜色 **/
					itemStyle: {
						normal:{
							borderColor: 'rgba(0, 0, 0, 0.2)'
						},
						emphasis:{
							areaColor: '#F3B329',
							shadowOffsetX: 0,
							shadowOffsetY: 0,
							shadowBlur: 20,
							borderWidth: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				},
				/** 值信息 **/
				series: [
					/** 样式信息（可以不写，自动加载 geo信息） **/
					{
						type: 'scatter',
					  	roam: false, // false 禁止拖动/缩放，默认 false
						//zoom: 1.23, //当前视角的缩放比例
						coordinateSystem: 'geo' // 对应上方配置
					},
					/** 映射信息 **/
					{
						name: '启动次数', // 浮动框的标题
						type: 'map', // 数据类型
						geoIndex: 0, // 索引开始
						data: list
					}
				]
		})
		
	  },
	  click1() {
		alert(1);
	  },
	  click2() {
		alert(2);
	  }
	}
}
  
function randomValue() {
	return Math.floor(Math.random()*1000);
}
  
</script>


<style>
	*{margin:0;padding:0}
	html,body{
		width:100%;
		height:100%;
	}
	#main{
		width:600px;
		height:400px;
		margin: 20px auto;
	}
	.echarts{
		background:#F5F5F5;
	}
	/*建议长宽比0.65~0.75，符合审美*/
	
	#top_head{
		height:40px;
		color:#696969;
		padding-top:20px;
	}
	#top_body{
		height:40px;
		padding-top:10px;
	}
</style>