<template>
  <div>
    <el-container>
      <el-header class="header-page">
        <i class="el-icon-back" @click="goHome"></i>
        <span class="title">记录知识</span>
      </el-header>
      <el-main>
        <el-card>
          <quill-editor
            v-model="content"
            ref="myQuillEditor"
            class="editer"
            background='#000'
            :options="editorOption"
            @ready="onEditorReady($event)">
          </quill-editor>
          <el-row :gutter="20">
            <el-col :span="20">
              <el-button size="mini" type="primary" @click="theCache">
                本地暂存
                <i v-if="!getNotesCache" class="el-icon-close"></i>
                <i v-else class="el-icon-check"></i>
              </el-button>
              <el-button size="mini" type="primary" @click="exportTheCache">暂存导出</el-button>
              <el-button size="mini" type="primary" @click="removeTheCache">清除暂存</el-button>
              <el-button size="mini" type="primary" @click="rollOutArray">转成数组</el-button>
            </el-col>
            <el-col class="col-alert">
              <el-alert
                title="提示: 导出数组，可使用空白字符(空格)分隔。"
                type="warning">
              </el-alert>
            </el-col>
          </el-row>
        </el-card>
      </el-main>
    </el-container>

    <el-dialog
      title="已转成数组"
      :visible.sync="dialogVisible"
      width="50%">
      <el-form ref="form" :model="contentForm" label-width="0">
        <el-form-item>
          <el-input type="textarea" v-model="contentForm.contentText"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="copyArray">复 制</el-button>
        <el-button type="primary" @click="dialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Tipap',
  data(){
    return {
      content: '输入内容',
      editorOption: {},
      dialogVisible: false,
      getNotesCache: false,
      contentForm: {
        contentText: ''
      }
    }
  },
  created() {
    this.getNotesCache = Boolean(window.sessionStorage.getItem('notesCache'))
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    },
    contentText() {
      // let reg = /<|[a-zA-Z]|[\/]|>/g
      let reg = /<|[a-zA-Z]|[\/]|[\\]|[\s]|[=]|[0-9]|["]|[(]|[:]|[,]|[;]|[)]|[_]|[%]|>/g
      let regData = this.content.replace(reg, '-')
      let arr = regData.split('-')
      let newarr = []
      for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== '') {
          newarr.push(arr[i])
        }
      }
      return newarr
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
    onEditorReady(editor) {
      // console.log('editor ready!', editor)
    },
    rollOutArray() {
      this.contentForm.contentText = String('[' + this.contentText + ']')
      this.dialogVisible = true
    },
    theCache() {
      // window.sessionStorage.setItem('notesCache',this.content)
      window.sessionStorage.setItem('notesCache',this.content)
      this.$message.success('已暂存')
      this.getNotesCache = Boolean(window.sessionStorage.getItem('notesCache'))
      console.log('暂存')
    },
    copyArray() {
      this.copyText(this.contentForm.contentText, () => {
        this.$message.success('已复制')
        this.dialogVisible = false
      })
    },
    copyText(text, callback){ // text: 要复制的内容， callback: 回调
        var tag = document.createElement('textarea');
        tag.setAttribute('id', 'cp_hgz_input');
        tag.value = text;
        document.getElementsByTagName('body')[0].appendChild(tag);
        document.getElementById('cp_hgz_input').select();
        document.execCommand('copy');
        document.getElementById('cp_hgz_input').remove();
        if(callback) {callback(text)}
    },
    removeTheCache () {
      this.$confirm('此操作将永久删除暂存内容, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        window.sessionStorage.removeItem('notesCache')
        this.$message.success('已清除')
        this.getNotesCache = false
      }).catch(() => {
        return this.$message('已取消')
      })
    },
    exportTheCache() {
      if(!window.sessionStorage.getItem('notesCache')) return this.$message.warning('暂存区没有数据')
      this.content = window.sessionStorage.getItem('notesCache')
      this.$message.success('已导入')
    }
  }
}
</script>

<style lang="less" scoped>
.header-page {
  background-color: #409eff;
  line-height: 60px;
  display: flex;
  .title {
    font-size: 20px;
    flex: 0.94;
    color: #fff;
    text-align: center;
  }
  .el-icon-back {
    align-self: center;
  }
}
.editer {
  min-height: 500px;
}
.col-alert {
  margin-top: 5px;
}
</style>
