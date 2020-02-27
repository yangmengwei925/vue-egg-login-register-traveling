<template>
<div>
  <!-- 弹层 -->
  <el-dialog title="Login Hare" :visible.sync="dialogVisible" width="30%">
    <div>
      <el-input placeholder="请输入账号" prefix-icon="el-icon-user" v-model="user"></el-input>
      <el-input placeholder="请输入密码" prefix-icon="el-icon-sugar" v-model="pwd"></el-input>
      <el-input v-show="reShow" placeholder="请输入邮箱" prefix-icon="el-icon-user" v-model="email" type="email"></el-input>
      <el-input v-show="reShow"  placeholder="请输入年龄" prefix-icon="el-icon-sugar" v-model="age" type="number"></el-input>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="loginIn">确 定</el-button>
    </span>
  </el-dialog>
  <!-- 顶部导航 -->
  <div class="meili_header">
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
      <div class="nav">
          <div class="top_nav">
            <span class="span_a">Contact:0088-234-675-827 Opening Hours: Mon - Sat 8.00 - 18.00. Sunday CLOSED</span>
            <span v-show="!isLogin" class="span_btn" @click="register('re')">注册</span>
            <span v-show="!isLogin"  class="span_btn" @click="register('login')">登陆</span>
            <span v-show="isLogin" >欢迎回来!{{getCookie('user')}}</span>
          </div>
          <div class="bot_nav">
            <span>首页</span>
            <span>关于我们</span>
            <span>服务</span>
            <span>产品</span>
            <span>画册</span>
            <span>游记</span>
            <span>练系我们</span>
          </div>   
      </div>  
  </div>
</div>
</template>
<script>
export default {
  data(){
    return {
      user:'',
      pwd:'',
      email:'',
      age:'',
      url:this.reShow?'/register':'/login',
      dialogVisible:false,
      reShow:false,
      isLogin:this.getCookie('user')===null?false:true
    }
  },
  methods:{

    async register(type){
      //弹层出现
      this.dialogVisible = true;

      //显示注册的逻辑还是登陆的逻辑
      this.reShow = type === 'login'?false:true
    },

    loginIn(){
      const {user,pwd,email,age,reShow,$regType,$isNull} = this;
     
      //非空校验的数据
      let isNullObj = [{name:'用户名',value:user},{name:'密码',value:pwd}];
     
      //格式校验的数据
      let regObj    = [{name:'用户名',type:'user',str:user},{name:'密码',type:'pwd',str:pwd}];
      
      //如果为注册 需要多校验一些数据
      if(reShow){
        isNullObj  = [...isNullObj,{name:'邮箱',value:email},{name:'年龄',value:age}]
        regObj     = [...regObj,{name:'邮箱',type:'email',str:email},{name:'年龄',type:'num',str:age}];
      }

      //执行非空校验 成功后执行格式校验
      $isNull(isNullObj,()=> $regType(regObj,this.requestFunc))
    },

    async requestFunc(){
      const {user,pwd,email,age,reShow,url,$message,$http,$md5,setCookie} = this;
       let subData = { user,pwd,email,age }
        subData.pwd = $md5(subData.pwd)
        let res = await $http('post',url,subData);
        const {code,msg,data} = res.data
        if(code === 0){
          if(!reShow){
              setCookie('user',user);
              this.isLogin = true;
          }
          //关闭弹层
          this.dialogVisible = false;
         
         }
          $message.error(msg);
        }
    

  }
}
</script>
<style scoped>
.meili_header{
    min-width: 1180px;
    width: 100vw;
    height: 65px;
    padding:30px 90px;
    position: fixed;
    top: 0;
    z-index: 100;
    color: #fff;
}
.logo{
  width: 200px;
  float: left;
  height: 65px;
}
.nav{
  width: 800px;
  height: 65px;
  float: left;
}

.top_nav,.bot_nav{
  line-height: 30px;
  height: 30px;
  }
.bot_nav{
    padding: 0 50px;
    text-align: center;
}
/* 导航样式 */
.bot_nav span{
  width: 100px;
  float: left;

}
.top_nav{
 
  padding-bottom:2px;
  border-bottom:1px solid #ddd  
}
.top_nav .span_a{
  font-size: 14px;
  width: 600px;
  float: left;
}
.top_nav .span_btn{
  width: 100px;
  float:right;
  text-align: center;
}

</style>