---
id: "zh-php-guide-class-yaf-route-regex"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-route-regex"
title: "Yaf_Route_Regex 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-route-regex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Route_Regex 类

Yaf_Route_Regex

   简介  `Yaf_Route_Regex` 是 Yaf 内置路由中最灵活的： 它将请求 URI 与一个正则表达式进行匹配。当模式匹配成功时， 使用默认的模块（module）、控制器（controller）和动作（action）， 捕获的子模式则通过数字映射赋给请求参数。    它与 `Yaf_Route_Rewrite` 类似， 但接受的不是便于人类阅读的模式，而是完整的 PCRE 模式， 这使得它能够表达其它内置路由无法表达的匹配规则。      类摘要   `Yaf_Route_Regex`    `Yaf_Route_Regex`   `extends` `Yaf_Route_Interface`   Yaf_Route_Interface    属性  `protected` `_route`   `protected` `_default`   `protected` `_maps`   `protected` `_verify`  方法   继承的方法       属性 
- **`_route`**
- **`_default`**
- **`_maps`**
- **`_verify`**
