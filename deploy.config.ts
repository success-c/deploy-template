module.exports =()=> Object.freeze({
  PRIVATE_KEY: "C:/Users/姓名/.ssh/id_rsa", // 密钥地址
  SERVER: [
    {
        NAME: "server-501",
        SERVER_PATH: "39.98.82.82",
        SSH_USER: "root", // 服务器用户名
        SSH_KEY: ``, // 服务器密码
        PORT: 22, // 端口 默认为22
        DIST: "./dist", // 需要部署的打包过后的文件夹 根据项目不同值不同 一般为 build static 或者dist
        SCRIPT: "yarn build:prod-501", // 打包命令 可能项目由不同的构建命令 如打包指定环境的代码
        PATH: "/workspace/front-end/poverty-relief", // 服务器存放静态文件目录
      },
      {
        NAME: "server-506",
        SERVER_PATH: "39.98.49.125",
        SSH_USER: "root", // 服务器用户名
        SSH_KEY: ``, // 服务器密码
        PORT: 22, // 端口 默认为22
        DIST: "./dist", // 需要部署的打包过后的文件夹 根据项目不同值不同 一般为 build static 或者dist
        SCRIPT: "yarn build:prod-506", // 打包命令 可能项目由不同的构建命令 如打包指定环境的代码
        PATH: "/workspace/front-end/poverty-relief", // 服务器存放静态文件目录
      }, {
        NAME: 'server-603',
        SERVER_PATH: '39.98.95.109',
        SSH_USER: 'root', // 服务器用户名
        SSH_KEY: ``, // 服务器密码
        PORT: 22, // 端口 默认为22
        DIST: './dist', // 需要部署的打包过后的文件夹 根据项目不同值不同 一般为 build static 或者dist
        SCRIPT: 'yarn build:rain-603', // 打包命令 可能项目由不同的构建命令 如打包指定环境的代码
        PATH: '/workspace/front-end/leak-rain-report', // 服务器存放静态文件目录
      },
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
  hook: '',
  /**
   * 秘钥
   */
  secret: '',
  }
});
