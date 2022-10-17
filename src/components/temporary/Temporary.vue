<template>
  <div class="temporary">
    <el-card class="box-card">
      <el-row>
        <el-col :span="10" class="left-col">
          <el-tabs v-model="activeName" stretch>
            <el-tab-pane label="列表式查看" name="first">
              <el-table
                :data="temporaryList"
                height="590px"
                stripe
                fit
                style="width: 100%">
                <el-table-column
                  prop="date"
                  width="600"
                  align="center">
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="原内容查看" name="second">
              <el-form>
                <el-form-item>
                  <el-input type="textarea" v-model="temporaryData.text"></el-input>
                </el-form-item>
              </el-form>
            </el-tab-pane>
            <el-tab-pane label="元素式查看" name="third">
              <el-form>
                <el-form-item>
                  <el-input type="textarea" v-model="temporarydataDom.text"></el-input>
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="14" class="left-rigth">
          <dv-active-ring-chart :config="digitalFlopStyle" style="width:500px;height:500px" /></el-col>
      </el-row>
    </el-card>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <el-alert
        title="暂存区无数据，是否前往编辑页。"
        type="warning"
        description="可前往编辑页面编辑相应的内容，并保存到本地暂存。"
        :closable="false"
        show-icon>
      </el-alert>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="goTiptap">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Temporary',
  data () {
    return {
      dialogVisible: false,
      activeName: 'first',
      temporaryList: [{ date: '' }],
      temporaryData: { text: '' },
      temporarydataDom: { text: '' },
      digitalFlopStyle: {
        radius: '40%',
        activeRadius: '70%',
        color: ['#ff6699', '#ff33cc', '#cc00ff'],
        lineWidth: 50,
        data: [
          {
            name: '文字数',
            value: 0
          },
          {
            name: '原字数',
            value: 0
          },
          {
            name: '总和数',
            value: 0
          }
        ],
        showOriginValue: true,
        animationFrame: 5
      }
    }
  },
  methods: {
    contentText() {
      let reg = /<|[a-zA-Z]|[\/]|[\\|、]|[\s]|[=]|[0-9]|["]|[(]|[:]|[,|，]|[;]|[)]|[_]|[%]|[.|。]|[?|？]|[&|!]|>/g
      let regData = window.sessionStorage.getItem('notesCache')
      let arr = regData ? regData.replace(reg, '-').split('-') : []
      let newarr = []
      for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== '') {
          newarr.push(arr[i])
        }
      }
      if (!newarr) return []
      return newarr
    },
    getItemList() {
      let list = this.contentText()
      let obj = []
      for(let i = 0; i < list.length; i++) {
        obj.push({ date: list[i] })
      }
      this.temporaryList = obj
    },
    getFormText() {
      let list = this.contentText().join(' ')
      this.temporaryData.text = list
      this.digitalFlopStyle.data[0].value = list.length
    },
    getFormTextDom() {
      let list = window.sessionStorage.getItem('notesCache')
      this.temporarydataDom.text = list
    },
    getAddText() {
      let list = this.contentText().join(' ')
      let lists = window.sessionStorage.getItem('notesCache')
      this.digitalFlopStyle.data[1].value = lists.length
      this.digitalFlopStyle.data[2].value = list.length + lists.length
    },
    goTiptap() {
      this.$router.push('/tipap')


    }
  },
  mounted () {
    if (!window.sessionStorage.getItem('notesCache')) {
      this.dialogVisible = true
    }
  },
  created () {
    this.getItemList()
    this.getFormText()
    this.getFormTextDom()
    this.getAddText()
  },
}
</script>

<style lang="less" scoped>
div{
  .temporary {
    height: 100%;
    padding: 20px;
    .box-card {
      background-color: #372963;
      .el-row {
        width: 100%;
        .el-table--fit {
          height: 479px !important;
        }
        .left-rigth {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 600px;
        }
      }
    }
  }
}
</style>
