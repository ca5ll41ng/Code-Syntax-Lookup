---
id: "zh-php-guide-class-yaf-route-static"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-route-static"
title: "Yaf_Route_Static 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-route-static.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Route_Static 类

Yaf_Route_Static

   简介  `Yaf_Route_Static` 是 `Yaf_Router` 的默认路由： 它将 URI 路径解析为 `/module/controller/action` 各段， 设计上开箱即用地处理绝大多数路由需求。   
> 没有必要实例化 `Yaf_Route_Static`， 也没有必要将其加入 `Yaf_Router` 的路由栈： 路由栈中始终存在它的实例，并且总是在最后被尝试。

    类摘要   `Yaf_Route_Static`    `Yaf_Route_Static`   Yaf_Router    方法
