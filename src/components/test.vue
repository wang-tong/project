<template>
  <div>
    <a-button @click="handleAdd">新增</a-button>

    <a-table
      :columns="columns"
      bordered
      :dataSource="dataSource"
      :scroll="{ x: 100} "
      rowKey="id"
      :loading="loading"
      :pagination="false"
      :customRow="clickThenSelect"
      :rowSelection="{fixed:true,selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
      :rowClassName="rowClassName"
    >
      <span slot="action" slot-scope="text, record">
        <a @click="handleEdit(record)">编辑</a>
        <a-divider type="vertical" />
        <a>
          <a-popconfirm title="确定删除吗?" @confirm="() => handleDelete(record.id)">
            <a>删除</a>
          </a-popconfirm>
        </a>
      </span>
    </a-table>
    <test-form ref="form" @close="close" @ok="ok"></test-form>
  </div>
</template>

<script>
import testForm from '@/components/testForm.vue'
export default {
  name: 'test',
  components: {
    testForm
  },
  data () {
    return {
      columns: [
        {
          title: '#',
          dataIndex: '',
          key: 'rowIndex',
          width: 60,
          fixed: 'left',
          align: 'center',
          customRender: function (t, r, index) {
            return parseInt(index) + 1
          }
        },
        {
          title: '姓名',
          align: 'center',
          dataIndex: 'name'
        },
        {
          title: '年龄',
          align: 'center',
          dataIndex: 'age'
        },
        {
          title: '操作',
          align: 'center',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ],
      dataSource: [
        { id: 1, name: '张三', age: 18 },
        { id: 2, name: '李四', age: 20 },
        { id: 3, name: '王五', age: 22 }
      ],
      loading: false,
      /* table选中keys */
      selectedRowKeys: [],
      /* table选中records */
      selectionRows: [],
      selectedMainId: ''
    }
  },
  methods: {
    handleAdd () {
      console.log('点击了新增')
      console.log(this.$refs.form)
      this.$refs.form.title = '新增'
      console.log('点击了新增')
      this.$refs.testForm.add()
      // console.log('点击了新增')

      // this.$refs.testForm.visible = true
    },
    handleEdit (record) {
      console.log('点击了修改')
      this.$refs.form.title = '编辑'
      this.$refs.form.edit(record)
    },
    handleDelete () {
      console.log('点击了删除')
    },
    onSelectChange (selectedRowKeys, selectionRows) {
      console.log(selectedRowKeys, selectionRows)
      this.selectedRowKeys = selectedRowKeys
      this.selectionRows = selectionRows
    },
    clickThenSelect (record) {
      return {
        on: {
          click: () => {
            console.log('点击一行', record.id)
            this.selectedMainId = record.id
            // this.onSelectChange([record.id], [record])
            // this.rowClassName(record, record.id)
          }
        }
      }
    },
    rowClassName (record, index) {
      if (record.id === this.selectedMainId) {
        console.log('添加class')
        return 'applyFor'
      } else {
        return ''
      }
    },
    close () {
      console.log('刷新')
    },
    ok (data, index) {
      console.log(1111, data, index)
      this.dataSource.forEach((item) => {
        if (item.id === index) {
          item.age = data.age
          item.name = data.name
        }
      })
    }
  }

}
</script>

<style scoped>
>>> .applyFor {
  background: red;
}
</style>
