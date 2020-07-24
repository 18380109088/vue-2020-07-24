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
		title: '班组',
		dataIndex: 'age',
		key: 'age',
		width:25
	},
	{
		title: '班型',
		dataIndex: 'address',
		key: 'address',
		width:25
	},
	{
		title: '当日累计在线时长',
		key: 'tags',
		dataIndex: 'tags',
		width:25
	}
];

const data = [
	{
		key: '1',
		name: '12345678',
		age: '通用一处',
		address: '早班',
		tags: '6小时'
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
