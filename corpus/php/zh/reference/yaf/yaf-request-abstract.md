---
id: "zh-php-guide-class-yaf-request-abstract"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-request-abstract"
title: "Yaf_Request_Abstract 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-request-abstract.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Request_Abstract 类

Yaf_Request_Abstract

   简介  `Yaf_Request_Abstract` 是请求对象的基类。 它封装了请求环境：路由解析出的模块（module）、控制器（controller）和动作（action）， 请求参数，以及访问超全局变量（query 字符串、POST、cookie、server、environment 和上传文件）的方法。    它有两个具体实现：`Yaf_Request_Http`， 由实际的 Web 请求初始化；以及 `Yaf_Request_Simple`， 用于测试和 CLI 脚本的模拟请求。      类摘要   `Yaf_Request_Abstract`    `Yaf_Request_Abstract`    常量  `const` `string` `Yaf_Request_Abstract::SCHEME_HTTP` http   `const` `string` `Yaf_Request_Abstract::SCHEME_HTTPS` https  属性  `public` `module`   `public` `controller`   `public` `action`   `public` `method`   `protected` `params`   `protected` `language`   `protected` `_exception`   `protected` `_base_uri`   `protected` `uri`   `protected` `dispatched`   `protected` `routed`  方法       属性 
- **`module`**
- **`controller`**
- **`action`**
- **`method`**
- **`params`**
- **`language`**
- **`_exception`**
- **`_base_uri`**
- **`uri`**
- **`dispatched`**
- **`routed`**

     预定义常量 
- **`Yaf_Request_Abstract::SCHEME_HTTP`**
- **`Yaf_Request_Abstract::SCHEME_HTTPS`**
