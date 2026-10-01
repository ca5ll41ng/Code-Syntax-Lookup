---
id: "zh-php-guide-class-yaf-route-map"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-route-map"
title: "Yaf_Route_Map 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-route-map.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Route_Map 类

Yaf_Route_Map

   简介  `Yaf_Route_Map` 是内置路由，它将整个 URI 端点 （位于基础 URI 之后的 URI 部分：参阅 `Yaf_Request_Abstract::setBaseUri()`） 转换为单个 controller 名或 action 名，取决于传递给 `Yaf_Route_Map::__construct()` 的第一个参数。 路径各段以下划线连接：    `A` => `A` `A/B/C` => `A_B_C` `A/B/C/D/E` => `A_B_C_D_E`   当映射目标是 controller 名时，其首字母会被转为大写。    如果指定了 `Yaf_Route_Map::__construct()` 的第二个参数， 则只有分隔符之前的 URI 部分用于路由，分隔符之后的部分会被解析为请求参数 （参考 `Yaf_Route_Map::__construct()` 的示例部分）。      类摘要   `Yaf_Route_Map`    `Yaf_Route_Map`   Yaf_Route_Interface    属性  `protected` `_ctl_router`   `protected` `_delimiter`  方法        属性 
- **`_ctl_router`**
- **`_delimiter`**
