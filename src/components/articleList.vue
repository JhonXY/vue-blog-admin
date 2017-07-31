<template lang="html">
<div>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="articleId"
      label="编号"
      sortable
      width="150">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="90">
    </el-table-column>
    <el-table-column
      prop="describtion"
      label="描述"
      width="150">
    </el-table-column>
    <el-table-column
      prop="tag"
      label="标签"
      width="70">
    </el-table-column>
    <el-table-column
      prop="createDate"
      label="发布时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="content"
      label="内容">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      pageSize: 10,
      page: 1,
      // busy: true, //是否还有数据要加载
      tableData:[]
    }
  },
  methods: {
    init () {
      var param = {
        page: this.page,
        pageSize: this.pageSize,
      }
      axios.get("/admin/articleList",{
        params: param //传入到后端的参数集
      }).then((result)=>{
        let res = result.data
        if (res.status == "0"){
          this.tableData = res.result.list;
        } else {
          this.tableData = [];
        }
      })
    },
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="css">
.row-bg {
    /*background-color: #f9fafc;*/
    background-color: #99a9bf;
    width: 100%;
    height: 837px;
    border-radius: 2px;
}
</style>
