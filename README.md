Weex是阿里发布的一款用WEB方式开发原生app的开源产品
================================================  
一：环境的搭建（win7）
---------------------------
##1.需要安装node.js,版本4.0+      
查看版本：node -v  
##2.安装手脚架 weex-toolkit    
利用node的npm安装  
npm install -g weex-toolkit@beta  
安装好后,查看weex的指令：weex 
二：创建应用  
======================================
(1)首先在新建一个文件夹，如Demo 
(2)用cmd,切换到Demo文件夹目录下 
(3)初始化项目：weex init，初始化之后可以看到文件夹多了许多文件 
(4)安装依赖：npm install
(5)运行：npm run dev 
启动静态服务器：npm run serve
(6)启动完之后，在浏览器打开：http://localhost:8080/index.html  
8080为默认接口，如果要改在可以在项目目录下的package.json文件修改。
(7)

