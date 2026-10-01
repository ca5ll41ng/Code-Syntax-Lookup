---
id: "zh-php-guide-class-yaf-route-interface"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-route-interface"
title: "Yaf_Route_Interface 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-route-interface.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Route_Interface 类

Yaf_Route_Interface

   简介  `Yaf_Route_Interface` 定义了所有路由必须实现的契约： `Yaf_Route_Interface::route()`， 它检查请求并通过设置模块（module）、控制器（controller）和动作（action） （以及可选的请求参数）来接管该请求；以及 `Yaf_Route_Interface::assemble()`， 它根据路由信息构建 URL。    实现此接口可以定义自定义路由，并通过 `Yaf_Router::addRoute()` 将其注册到路由器上。 内置路由类（`Yaf_Route_Static`、 `Yaf_Route_Simple`、 `Yaf_Route_Supervar`、 `Yaf_Route_Rewrite`、 `Yaf_Route_Regex` 和 `Yaf_Route_Map`）都实现了此接口。      类摘要   `Yaf_Route_Interface`    `Yaf_Route_Interface`    方法
