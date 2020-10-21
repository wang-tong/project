<template>
  <a-modal
    :title="title"
    :width="width"
    :visible="visible"
    :confirmLoading="confirmLoading"
    @ok="handleOk"
    @cancel="handleCancel"
    cancelText="关闭"
    okText="确定"
    destroyOnClose="true"
    mask="true"
    maskClosable="true"
  >
    <a-spin :spinning="confirmLoading">
      <a-form :form="form">
        <a-row>
          <a-col :span="24">
            <a-form-item label="姓名" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <a-input
                v-decorator="[ 'name', validatorRules.name]"
                placeholder="请输入姓名"
                @change="nameChange"
              ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <a-form-item label="年龄" :labelCol="labelCol" :wrapperCol="wrapperCol">
              <!-- <a-input
                type="number"
                v-decorator="[ 'age', validatorRules.age]"
                placeholder="请输入年龄"
                @change="ageChange"
                style="width: 100%"
                addonAfter="岁"
              />-->

              <a-input-number
                v-decorator="[ 'age', validatorRules.age]"
                placeholder="请输入年龄"
                @change="ageNumberChange"
                style="width: 100%"
                addonAfter="岁"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>

export default {
  name: 'testForm',
  data () {
    return {
      visible: false,
      form: this.$form.createForm(this),
      title: '操作',
      width: 1000,
      model: {},
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      },
      confirmLoading: false,
      validatorRules: {
        age: { rules: [{ required: true, message: '请输入年龄!' }] },
        name: { rules: [{ required: true, message: '请输入姓名!' }] }
      }
    }
  },
  created () {
  },
  methods: {
    add () {
      console.log('進入')
      this.edit({ name: null, age: null })
    },
    edit (record) {
      console.log(record)
      this.form.resetFields()
      console.log(this.form)
      this.model = Object.assign({}, record)
      console.log(this.model)
      this.visible = true
      this.$nextTick(() => {
        this.form.setFieldsValue({ name: this.model.name })
        this.form.setFieldsValue({ age: this.model.age })
      })
    },
    close () {
      this.$emit('close')
      this.visible = false
    },
    handleOk () {
      console.log(this.model)
      this.$emit('ok', this.model, this.model.id)
      this.visible = false
    },
    handleCancel () {
      this.close()
    },
    nameChange (value) {
      console.log(value.target.value)
      this.model.name = value.target.value
    },
    ageChange (value) {
      console.log(value.target.value)
      this.model.age = Number(value.target.value)
    },
    ageNumberChange (value) {
      console.log(value)
      this.model.age = value
    }
  }
}
</script>
