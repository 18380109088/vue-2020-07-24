<template>
	<a-table 
		:columns="columns" 
		:data-source="data" 
		:pagination="false"
		:bordered="true"
		style="height:154px"
		size="small">
	</a-table>
</template>
<script>
const columns = [
	{
		title: '',
		dataIndex: 'name',
		key: 'name',
		width:17,
		height:50
	},
	{
		title: '待办',
		dataIndex: 'age',
		key: 'age',
		width:17,
		height:50
	},
	{
		title: '超时',
		dataIndex: 'address',
		key: 'address',
		width:17,
		height:50
	},
	{
		title: '催办',
		key: 'tags',
		dataIndex: 'tags',
		width:17,
		height:50
	},
	{
		title: '查询已回复',
		key: 'mi',
		dataIndex: 'mi',
		width:17
	},
	{
		title: '列汇总',
		key: 'hui',
		dataIndex: 'hui',
		width:15
	}
];

const data = [
	{
		key: '1',
		name: '实时任务',
		age: 2,
		address: 0,
		tags: 0,
		mi: 2,
		hui: 4
	},
	{
		key: '2',
		name: '非实时任务',
		age: 1,
		address: 1,
		tags: 0,
		mi: 1,
		hui: 3
	},
	{
		key: '3',
		name: '行汇总',
		age: 3,
		address: 1,
		tags: '',
		mi: ''
	}
];

export default {
	
	data() {
		return {
			data,
			columns,
		};
	}
};
</script>
