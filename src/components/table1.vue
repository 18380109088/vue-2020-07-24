<template>
	<a-table :columns="columns" :data-source="data" :pagination="false"
		:bordered="true">
	</a-table>
</template>
<script>
const columns = [
	{
		title: '人员编号',
		dataIndex: 'name',
		key: 'name'
	},
	{
		title: '实时任务',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: '非实时任务',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: '仅获取主页任务',
		key: 'tags',
		dataIndex: 'tags'
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
