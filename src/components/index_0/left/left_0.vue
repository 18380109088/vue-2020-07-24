<template>
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
			  :key='openKeys[index]'
			  disabled
			>
				<span slot="title"><span>{{data.name}}</span></span>
				<template v-if='!data.child'>
					<a-menu-item-group key="g1">
					</a-menu-item-group>
				</template>
				  
				<a-menu-item 
					v-for="(child,ind) in data.child"
					:key="index+''+ind">
						{{child.name}}
				</a-menu-item>
			</a-sub-menu>
		
		</a-menu>
    </div>
</template>
<script>
var param = new Array();
param.push({name:'我的状态'});
param.push({name:'我的任务',child:[{name:'我都明细'},{name:'我的列表'},{name:'我的推送'}]});
param.push({name:'我的排班',child:[{name:'个人排班'},{name:'调班申请'}]});
param.push({name:'我的质效',child:[{name:'质效查询'}]});

var data = {};
var openKeys = new Array();
for (var i in param) 
	openKeys.push('sub'+i);
data.openKeys = openKeys;


export default {
	data() {
		return {
			current: ['mail'],
			openKeys: data.openKeys,
			param: param,
		};
	},
	watch: {
		openKeys(val) {
		console.log('openKeys', val);
		},
	},	
	mounted() {
		//console.log(document.getElementById('left_menu'))
		//document.getElementById('left_menu').innerHTML = left_menu;
	},
	methods: {
		handleClick(e) {
			console.log('click', e);
		}
	},
};
</script>
