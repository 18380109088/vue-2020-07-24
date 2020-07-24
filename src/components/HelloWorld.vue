<template>
	<div class="index_0">
		<div class="left">
			<div>
				<a-menu
				  style="width: 200px"
				  :default-selected-keys="['1']"
				  :open-keys.sync="openKeys"
				  mode="inline"
				  @click="handleClick"
				  id="left_menu"
				>
				
					<a-sub-menu 
					  v-for="(data,index) in param"
					  :disabled="isAble(data, 0)"
					>
						<span slot="title"><span>{{data.name}}</span></span>
						  
						<a-menu-item 
							v-for="(child,ind) in data.child"
							:key="index+''+ind"
							:disabled="isAble(child, 1)"
							>
								{{child.name}}
						</a-menu-item> 

						<a-menu-item-group :style="litn_hight_Fn(data)">
						</a-menu-item-group>

					</a-sub-menu>
				
				</a-menu>
			</div>
		</div>
		
		<div class="right">
			<div v-show='mast'>
				<template v-for="(data,index) in param">
					<template v-if="data.name=='我的状态'">
						<div :style="hight_Fn(index)"></div>
						<div v-show='show_(index)'>
							<right_0></right_0>
							<div style="height:38px;"></div>
						</div>
					</template>
					<template v-if="data.name=='我的任务'">
						<div :style="hight_Fn(index)"></div>
						<div v-show='show_(index)'>
							<right_1></right_1>
							<div style="height:38px;"></div>
						</div>
					</template>
					<template v-if="data.name=='我的排班'">
						<div :style="hight_Fn(index)"></div>
						<div v-show='show_(index)'>
							<right_2></right_2>
							<div style="height:38px;"></div>
						</div>
					</template>
					<template v-if="data.name=='我的质效'">
						<div :style="hight_Fn(index)"></div>
						<div v-show='show_(index)'>
							<right_3></right_3>
							<div style="height:38px;"></div>
						</div>
					</template>
					<template v-if="data.name=='任务监测'">
						<div :style="hight_Fn(index)"></div>
						<div v-show='show_(index)'>
							<right_4></right_4>
							<div style="height:38px;"></div>
						</div>
					</template>
					<template v-if="data.name=='资源监测'">
						<div :style="hight_Fn(index)"></div>
						<div v-show='show_(index)'>
							<right_5></right_5>
							<div style="height:38px;"></div>
						</div>
					</template>
				</template>
			</div>
			
			<div v-show='!mast'>
				<a-button type="primary" @click="click1" style="right:200px">返回主页</a-button>
				<right_1_0 v-show='salve_show_(salve, 10)'></right_1_0>
				<right_1_1 v-show='salve_show_(salve, 11)'></right_1_1>
			</div>
		</div>
	</div>
</template>

<script>
import right_0 from './index_0/right/right_0.vue'
import right_1 from './index_0/right/right_1.vue'
import right_2 from './index_0/right/right_2.vue'
import right_3 from './index_0/right/right_3.vue'
import right_4 from './index_0/right/right_4.vue'
import right_5 from './index_0/right/right_5.vue'

import right_1_0 from './index_0/right/right_1/right_1_0.vue'
import right_1_1 from './index_0/right/right_1/right_1_1.vue'

var param = new Array();
param.push({name:'我的状态'});
param.push({name:'我的任务',child:[{name:'我的明细'},{name:'我的列表'},{name:'我的推送'}]});
param.push({name:'我的排班',child:[{name:'个人排班'},{name:'调班申请'}]});
param.push({name:'我的质效',child:[{name:'质效查询'}]});
param.push({name:'任务监测',child:[{name:'明细监控（处理）'},{name:'明细监控（发起）'},{name:'超时监控（处理）'},{name:'超时监控（发起）'},{name:'积压监控'},{name:'查询明细'}]});
param.push({name:'资源监测',child:[{name:'资源情况'},{name:'分时段监测'}]});

var data = {};
data.isAble_0 = ['我的状态'];
data.isAble_1 = {'我的状态':true, '我的任务':true};
			
var openKeys = new Array();
for (var i in param) 
	if (data.isAble_1[param[i].name])
		openKeys.push('item_'+i);
data.openKeys = openKeys;


var hight_save = 0;

export default {
	name: 'index_0',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App',
			current: ['mail'],
			openKeys: data.openKeys,
			param: param,
			litn:3,
			litn_hight:48.6,
			mast:true,
			salve:0,
		}
	},
	mounted(){
		this.drawLine();
	},
	methods: {
		drawLine() {

		},
		handleClick(e) { /** 小内容点击事件 **/
			this.mast = false;
			this.salve = e.key;
			
			console.log('click', e);
		},
		click1() {
			this.mast = true;
		},
		isAble(par1, type) {
			if (type == 0)
				for (var i in data.isAble_0) 
					if (par1.name == data.isAble_0[i])
						return true;
						
			if (type == 1) 
				return par1.name?false:true;
				
			if (type == 11) 	
				return true;

			return false;
		},
		litn_hight_Fn(data) {
			//console.log(((parseFloat(this.litn) - (data.child?data.child.length:0))*this.litn_hight).toFixed(2)+'px')
			return 'height:'+ 
				((parseFloat(this.litn) - (data.child?data.child.length:0))*this.litn_hight).toFixed(2)+'px';
		},
		hight_Fn(index) {
			for (var i in this.openKeys) 
				if(this.openKeys[i].substring(5, this.openKeys[i].length) == parseFloat(index)) 
					return '';

			return 'height:'+this.litn_hight+'px';
		},
		show_(index) {
		
			for (var i in this.openKeys) {
				if(this.openKeys[i] == ('item_'+index))
					return true;
			}
			
			return false;
		},
		salve_show_(key, index) {
			return (key == index)?true:false;
		},
	},
	watch: {
		openKeys(val) {
			console.log('openKeys', val);
		},
	},	
	components: {
        'right_0': right_0,
		'right_1': right_1,
		'right_2': right_2,
		'right_3': right_3,
		'right_4': right_4,
		'right_5': right_5,
		'right_1_0': right_1_0,
		'right_1_1': right_1_1
    }
}

//background:#F5F5F5;
</script>

<style>
	*{margin:0;padding:0}
	html,body{
		width:100%;
		height:100%;
	}
	.index_0{
		width:800px;
		height:600px;
	}
	.left{
		width:25%;
		height:100%;
		float:left;
	}
	.right{
		width:75%;
		height:100%;
		float:left;
	}
</style>