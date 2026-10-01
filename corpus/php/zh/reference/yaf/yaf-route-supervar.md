---
id: "zh-php-guide-class-yaf-route-supervar"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-route-supervar"
title: "Yaf_Route_Supervar 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-route-supervar.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Route_Supervar 类

Yaf_Route_Supervar

   简介  `Yaf_Route_Supervar` 是内置路由， 它从单个 GET 参数（supervar）中解析请求目标。 该参数的值会像 `PATH_INFO` 一样被解析， 因此当 supervar 名为 `r` 时， 形如 `/?r=/user/list` 的请求会映射到控制器 `user` 和动作 `list`。      类摘要   `Yaf_Route_Supervar`    `Yaf_Route_Supervar`   Yaf_Route_Interface    属性  `protected` `_var_name`  方法        属性 
- **`_var_name`**
