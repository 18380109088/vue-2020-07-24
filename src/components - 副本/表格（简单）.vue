<template>
	<a-table :columns="columns" :data-source="data">
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
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		tags: ['loser'],
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
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
