<template>
  <div class="container">
    <div class="main">
      <div class="infoNode-content" v-show="!isLogin">
        <div class="title">综合</div>
        <el-card class="node-card" v-for="(item,index) in newsList" body-style="padding:12px 20px 12px 20px">
          <div class="card-header">
            <img class="node-avatar" :src=item.logo>
            <span class="node-name">{{ item.nodeName }}</span>
            <span class="node-type">{{ item.nodeType }}</span>
          </div>
          <el-divider class="card-divider header-divider"></el-divider>
          <div class="list-box">
            <el-scrollbar style="height:100%">
              <div v-for="(item,index) in item.informationList" class="info-list">
                <span class="list-index">{{ index+1 }}</span>
                <a class="list-link" :href="item.website" target="_blank">{{item.title}}</a>
                <span class="list-type">{{item.hits}}</span>
              </div>
            </el-scrollbar>
          </div>
          <el-divider class="card-divider"></el-divider>
          <div class="card-footer">
            <span class="node-updateTime">{{ item.updateTime }}</span>
            <img class="node-button" id="notCheck" :src="collectionIcon" v-if="isChecked(item)" @click="collectionNode($event,item)">
            <img class="node-button" id="checked" :src="collectionIconChecked" v-if="!isChecked(item)" @click="collectionNode($event,item)">
          </div>
        </el-card>
        <div class="title">科技</div>
        <el-card class="node-card" v-for="(item,index) in techList" body-style="padding:12px 20px 12px 20px">
          <div class="card-header">
            <img class="node-avatar" :src=item.logo>
            <span class="node-name">{{ item.nodeName }}</span>
            <span class="node-type">{{ item.nodeType }}</span>
          </div>
          <el-divider class="card-divider header-divider"></el-divider>
          <div class="list-box">
            <el-scrollbar style="height:100%">
              <div v-for="(item,index) in item.informationList" class="info-list">
                <span class="list-index">{{ index+1 }}</span>
                <a class="list-link" :href="item.website" target="_blank">{{item.title}}</a>
                <span class="list-type">{{item.hits}}</span>
              </div>
            </el-scrollbar>
          </div>
          <el-divider class="card-divider"></el-divider>
          <div class="card-footer">
            <span class="node-updateTime">{{ item.updateTime }}</span>
            <img class="node-button" id="notCheck" :src="collectionIcon" v-if="isChecked(item)" @click="collectionNode($event,item)">
            <img class="node-button" id="checked" :src="collectionIconChecked" v-if="!isChecked(item)" @click="collectionNode($event,item)">
          </div>
        </el-card>
        <div class="title">娱</div>
        <el-card class="node-card" v-for="(item,index) in entList" body-style="padding:12px 20px 12px 20px">
          <div class="card-header">
            <img class="node-avatar" :src=item.logo>
            <span class="node-name">{{ item.nodeName }}</span>
            <span class="node-type">{{ item.nodeType }}</span>
          </div>
          <el-divider class="card-divider header-divider"></el-divider>
          <div class="list-box">
            <el-scrollbar style="height:100%">
              <div v-for="(item,index) in item.informationList" class="info-list">
                <span class="list-index">{{ index+1 }}</span>
                <a class="list-link" :href="item.website" target="_blank">{{item.title}}</a>
                <span class="list-type">{{item.hits}}</span>
              </div>
            </el-scrollbar>
          </div>
          <el-divider class="card-divider"></el-divider>
          <div class="card-footer">
            <span class="node-updateTime">{{ item.updateTime }}</span>
            <img class="node-button" id="notCheck" :src="collectionIcon" v-if="isChecked(item)" @click="collectionNode($event,item)">
            <img class="node-button" id="checked" :src="collectionIconChecked" v-if="!isChecked(item)" @click="collectionNode($event,item)">
          </div>
        </el-card>
        <div class="title">社区</div>
        <el-card class="node-card" v-for="(item,index) in communityList" body-style="padding:12px 20px 12px 20px">
          <div class="card-header">
            <img class="node-avatar" :src=item.logo>
            <span class="node-name">{{ item.nodeName }}</span>
            <span class="node-type">{{ item.nodeType }}</span>
          </div>
          <el-divider class="card-divider header-divider"></el-divider>
          <div class="list-box">
            <el-scrollbar style="height:100%">
              <div v-for="(item,index) in item.informationList" class="info-list">
                <span class="list-index">{{ index+1 }}</span>
                <a class="list-link" :href="item.website" target="_blank">{{item.title}}</a>
                <span class="list-type">{{item.hits}}</span>
              </div>
            </el-scrollbar>
          </div>
          <el-divider class="card-divider"></el-divider>
          <div class="card-footer">
            <span class="node-updateTime">{{ item.updateTime }}</span>
            <img class="node-button" id="notCheck" :src="collectionIcon" v-if="isChecked(item)" @click="collectionNode($event,item)">
            <img class="node-button" id="checked" :src="collectionIconChecked" v-if="!isChecked(item)" @click="collectionNode($event,item)">
          </div>
        </el-card>
        <div class="title">财经</div>
        <el-card class="node-card" v-for="(item,index) in financeList" body-style="padding:12px 20px 12px 20px">
          <div class="card-header">
            <img class="node-avatar" :src=item.logo>
            <span class="node-name">{{ item.nodeName }}</span>
            <span class="node-type">{{ item.nodeType }}</span>
          </div>
          <el-divider class="card-divider header-divider"></el-divider>
          <div class="list-box">
            <el-scrollbar style="height:100%">
              <div v-for="(item,index) in item.informationList" class="info-list">
                <span class="list-index">{{ index+1 }}</span>
                <a class="list-link" :href="item.website" target="_blank">{{item.title}}</a>
                <span class="list-type">{{item.hits}}</span>
              </div>
            </el-scrollbar>
          </div>
          <el-divider class="card-divider"></el-divider>
          <div class="card-footer">
            <span class="node-updateTime">{{ item.updateTime }}</span>
            <img class="node-button" id="notCheck" :src="collectionIcon" v-if="isChecked(item)" @click="collectionNode($event,item)">
            <img class="node-button" id="checked" :src="collectionIconChecked" v-if="!isChecked(item)" @click="collectionNode($event,item)">
          </div>
        </el-card>
        <div class="title">开发</div>
        <el-card class="node-card" v-for="(item,index) in developerList" body-style="padding:12px 20px 12px 20px">
          <div class="card-header">
            <img class="node-avatar" :src=item.logo>
            <span class="node-name">{{ item.nodeName }}</span>
            <span class="node-type">{{ item.nodeType }}</span>
          </div>
          <el-divider class="card-divider header-divider"></el-divider>
          <div class="list-box">
            <el-scrollbar style="height:100%">
              <div v-for="(item,index) in item.informationList" class="info-list">
                <span class="list-index">{{ index+1 }}</span>
                <a class="list-link" :href="item.website" target="_blank">{{item.title}}</a>
                <span class="list-type">{{item.hits}}</span>
              </div>
            </el-scrollbar>
          </div>
          <el-divider class="card-divider"></el-divider>
          <div class="card-footer">
            <span class="node-updateTime">{{ item.updateTime }}</span>
            <img class="node-button" id="notCheck" :src="collectionIcon" v-if="isChecked(item)" @click="collectionNode($event,item)">
            <img class="node-button" id="checked" :src="collectionIconChecked" v-if="!isChecked(item)" @click="collectionNode($event,item)">
          </div>
        </el-card>
      </div>
      <div class="infoNode-content" v-show="isLogin">
        <div class="title">已收藏节点</div>
        <el-card class="node-card" v-for="(item,index) in userCollList" body-style="padding:12px 20px 12px 20px">
          <div class="card-header">
            <img class="node-avatar" :src=item.logo>
            <span class="node-name">{{ item.nodeName }}</span>
            <span class="node-type">{{ item.nodeType }}</span>
          </div>
          <el-divider class="card-divider header-divider"></el-divider>
          <div class="list-box">
            <el-scrollbar style="height:100%">
              <div v-for="(item,index) in item.informationList" class="info-list">
                <span class="list-index">{{ index+1 }}</span>
                <a class="list-link" :href="item.website" target="_blank">{{item.title}}</a>
                <span class="list-type">{{item.hits}}</span>
              </div>
            </el-scrollbar>
          </div>
          <el-divider class="card-divider"></el-divider>
          <div class="card-footer">
            <span class="node-updateTime">{{ item.updateTime }}</span>
            <img class="node-button" id="notCheck" :src="collectionIcon" v-if="isChecked(item)" @click="collectionNode($event,item)">
            <img class="node-button" id="checked" :src="collectionIconChecked" v-if="!isChecked(item)" @click="collectionNode($event,item)">
          </div>
        </el-card>
      </div>
      <div class="load-tip">
        <span class="loading-tip noColl" v-if="hasCollList">你还没有收藏任何节点!</span>
        <span class="loading-tip" v-show="loading">正在加载 。。。</span>
        <span class="noMore-tip" v-if="!hasCollList">------------------我也是有底线的------------------</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data(){
    return{
      newsList: {},
      techList: {},
      entList: {},
      communityList: {},
      financeList: {},
      developerList: {},
      userCollList: {},
      loading: false,
      noMore: false,
      isLogin: false,
      userName: '',
      collection: ' ',
      collectionIcon: require("../assets/images/coll-not.png"),
      collectionIconChecked: require("../assets/images/coll-checked.png"),
    }
  },
  components: {

  },
  methods:{
    async getNodeList() {
      let result = await this.$axios.get("http://localhost:8082/initIndexPage/")
          .then(
              async function(response){
                return await response.data;
              }
          )
          .catch(function (err) {
            console.log(err)
          });
      let resultList = []
      for(let i=0; i<6; i++){
        resultList.push(result.splice(0,4))
      }
      this.newsList = resultList[0]
      this.techList = resultList[1]
      this.entList = resultList[2]
      this.communityList = resultList[3]
      this.financeList = resultList[4]
      this.developerList = resultList[5]
    },
    async userCollNode() {
      if(this.userName !== ''){
        let result = await this.$axios.get(`http://localhost:8082/userCollNode/?username=${this.userName}`)
            .then(
                async function(response){
                  return await response.data;
                }
            )
            .catch(function (err) {
              console.log(err)
            });
        this.userCollList = result
        this.noMore = true
      }
    },
    listenerFunction(e) {
      document.addEventListener('scroll', this.handleScroll, true);
    },
    handleScroll () {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop = document.documentElement.scrollTop;
      //变量windowHeight是可视区的高度
      var windowHeight = document.documentElement.clientHeight;
      //变量scrollHeight是滚动条的总高度
      var scrollHeight = document.documentElement.scrollHeight;
      //滚动条到底部的条件
      var result = Math.round(windowHeight+scrollTop);
      if(result===scrollHeight){

      }
    },
    collectionNode(event,item){
      if(this.isLogin){
        let collNode = item.nodeName + item.nodeType
        if(event.currentTarget.id === 'notCheck'){
          event.currentTarget.id = 'checked'
          event.currentTarget.src = require('../assets/images/coll-checked.png')
          this.collection += (',' + collNode)
          sessionStorage.setItem("collection",this.collection)
          this.updateCollNode()
        }else {
          event.currentTarget.id = 'notCheck'
          event.currentTarget.src = require('../assets/images/coll-not.png')
          let collArray = this.collection.split(',')
          collArray.splice(collArray.indexOf(collNode),1)
          this.collection = collArray.join(',')
          sessionStorage.setItem("collection",this.collection)
          this.updateCollNode()
        }
      }else {
        this.$message.warning({
          message:"请先登录再进行此操作",
          showClose:true
        })
      }

    },
    getUserInfo(){
      let userName = sessionStorage.getItem('userName')
      this.userName = userName
      if(userName !== null){
        this.isLogin = true
        this.collection = sessionStorage.getItem('collection')
      }
    },
    async updateCollNode(){
      let result = await this.$axios.post(`http://localhost:8082/updateCollection/?username=${this.userName}&collection=${this.collection}`)
          .then(
              async function(response){
                return await response.data;
              }
          )
          .catch(function (err) {
            console.log(err)
          });
    },
    isChecked(item){
      let nodeName = item.nodeName + item.nodeType
      let collArray = this.collection.split(',')
      if(collArray.indexOf(nodeName) !== -1){
        return false
      }else {
        return true
      }
    },
    hasCollList(){
      if(userCollList.length === 0){
        return true
      }else {
        return false
      }
    }
  },
  mounted() {
    this.getNodeList()
    this.getUserInfo();
    this.userCollNode()
    this.listenerFunction()
  },
  activated() {
    this.getNodeList()
    this.getUserInfo();
    this.userCollNode()
  },
  created() {

  },
  beforeDestroy () {
    document.removeEventListener("scroll", this.listenerFunction);
  },
  watch:{
    '$route'(to,from){
      if(from.path==='/login'){

      }
    }
  }

}
</script>

<style scoped>
.container{
  display: flex;
  min-height: 100%;
  width: 100%;
  justify-content: center;
  align-content: center;
  background-color: #f7f8fa;
  /*background-color: #26262A;*/
}
.main{
  width: 98%;
}
.title{
  color:#090707;
  /*color: #66BBFF;*/
  margin-bottom: 16px;
  padding-top: 2px;
}
.infoNode-content{
  margin-top: 16px;
  margin-bottom: 16px;
}
.node-card{
  display: inline-block;
  color: #ffffff;
  /*background-color: #393940;*/
  width: 358px;
  height: 420px;
  margin-left: 12px;
  margin-bottom: 16px;
}
.card-header, .card-footer{
  display: flex;
  align-content: center;
  margin: 0px;
  height: 26px;
}
.node-avatar{
  height: 25px;
  width: 25px;
  border-radius:50%;
}
.node-name{
  margin-left: 4px;
  font-weight: bolder;
  font-size: 18px;
  color:#090707;
  /*color: #f8fbff;*/
}
.node-type{
  color: #615d5d;
  /*color: #848181;*/
  flex: 1;
  text-align: right;
  font-weight: bolder;
  font-size: 16px;
}
.list-box{
  height: 300px;
  margin-left: -4px;
}
.list-index{
  width: 18px;
  color:#090707;
/*  color: #8af187;*/
}
.info-list{
  margin-top: 2px;
  display: flex;
}
.list-link{
  margin-left: 6px;
  width: 240px;
  text-decoration: none;
  color:#090707;
/*  color: #66BBFF;*/
}
.list-link:hover{
  color: #66BBFF;
}
.list-type{
  display: block;
  color: #978282;
  flex: 1;
  text-align: right;
  width: 56px;
  height: 42px;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}
.card-footer{
  display: flex;
}
.node-button{
  width: 25px;
  height: 25px;
  margin-left: 215px;
  margin-top: -4px;
}
.node-updateTime{
  color:#090707;
/*  color: #8af187;*/
}
.load-tip{
  height: 64px;
  width: 100%;
  color:#090707;
/*  color: #8596fc;*/
  font-size: large;
  margin-top: 42px;
}
.loading-tip{
  display: flex;
  justify-content: center;
}
.noMore-tip{
  margin-top: -24px;
  display: flex;
  justify-content: center;
}
.noColl{
  margin-top: 200px;
  font-size: 32px;
}
</style>

<style>
.card-divider{
  margin: 12px 0;
}
.el-scrollbar__wrap{ overflow-x:hidden; }
</style>