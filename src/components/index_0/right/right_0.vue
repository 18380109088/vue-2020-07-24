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
		title: '人员编号',
		dataIndex: 'name',
		key: 'name',
		width:25
	},
	{
		title: '实时任务',
		dataIndex: 'age',
		key: 'age',
		width:25
	},
	{
		title: '非实时任务',
		dataIndex: 'address',
		key: 'address',
		width:25
	},
	{
		title: '仅获取主页任务',
		key: 'tags',
		dataIndex: 'tags',
		width:25
	}
];

const data = [
	{
		key: '1',
		name: '12345678',
		age: '在线',
		address: '离线',
		tags: '关闭'
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
