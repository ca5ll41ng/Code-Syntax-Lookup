---
id: "zh-php-guide-class-yaf-route-simple"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-route-simple"
title: "Yaf_Route_Simple 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-route-simple.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Route_Simple 类

Yaf_Route_Simple

   简介  `Yaf_Route_Simple` 从 query 字符串中解析路由信息。 需要做的只是告诉 `Yaf_Route_Simple`， `$_GET` 中哪个键是模块（module），哪个键是控制器（controller），哪个键是动作（action）。    只要 query 字符串中存在这些键中的至少一个， `Yaf_Route_Simple::route()` 就会接管该请求（返回 `true`）， 因此对于这类请求，不会尝试路由栈中在它之后注册的路由。 只有当所有已配置的键都不存在时，它才会放行（返回 `false`）。      类摘要   `Yaf_Route_Simple`    `Yaf_Route_Simple`   Yaf_Route_Interface    属性  `protected` `controller`   `protected` `module`   `protected` `action`  方法        属性 
- **`controller`**
- **`module`**
- **`action`**
