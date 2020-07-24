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
		title: '机构',
		dataIndex: 'name',
		key: 'name',
		width:25
	},
	{
		title: '总数',
		dataIndex: 'age',
		key: 'age',
		width:25
	},
	{
		title: '在线人数',
		dataIndex: 'address',
		key: 'address',
		width:25
	},
	{
		title: '离线人数',
		key: 'tags',
		dataIndex: 'tags',
		width:25
	}
];

const data = [
	{
		key: '1',
		name: '业务处理中心',
		age: '130',
		address: '110',
		tags: '20'
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
