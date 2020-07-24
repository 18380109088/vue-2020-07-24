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
		title: '作业系统',
		dataIndex: 'name',
		key: 'name',
		width:25
	},
	{
		title: '折合产量',
		dataIndex: 'age',
		key: 'age',
		width:25
	},
	{
		title: '单位产能作业时间',
		dataIndex: 'address',
		key: 'address',
		width:25
	},
	{
		title: '作业差错率',
		key: 'tags',
		dataIndex: 'tags',
		width:25
	}
];

const data = [
	{
		key: '1',
		name: 'COST',
		age: '1300',
		address: '60s',
		tags: '0.1%'
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
