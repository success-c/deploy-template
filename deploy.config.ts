module.exports =(projectName:string)=> Object.freeze({
  PRIVATE_KEY: "home/.ssh/id_rsa", // 密钥地址
  SERVER: [
    {
      NAME: "server-501",
      SERVER_PATH: "39.98.82.82",
      SSH_USER: "root", // 服务器用户名
      SSH_KEY: ``, // 服务器密码
      PORT: 22, // 端口 默认为22
      DIST: "./dist", // 需要部署的打包过后的文件夹 根据项目不同值不同 一般为 build static 或者dist
      SCRIPT: "yarn build:prod", // 打包命令 可能项目由不同的构建命令 如打包指定环境的代码
      PATH: "/root/501", // 服务器存放静态文件目录
    }
  ],
  // 钉钉机器人配置
  DingDing:{
   /**
   * 钉钉名称
   */
  name:projectName,
  /**
   * 机器人推送地址
   */
  hook: 'https://oapi.dingtalk.com/robot/send?access_token=2f753bce34bee19cb438ef83959584919c0f92ac0848d30f84d601cdf9d8e7cd',
  /**
   * 秘钥
   */
  secret: 'SECb0689430c33069ba707ee78979b3388bae16754b9ee6b39971595e22e3055c42',
  }
});
