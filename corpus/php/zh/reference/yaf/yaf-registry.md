---
id: "zh-php-guide-class-yaf-registry"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-registry"
title: "Yaf_Registry 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-registry.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Registry 类

Yaf_Registry

   简介  `Yaf_Registry` 是一个全局的键值存储。它的所有方法都是静态的， 因此可以在任何地方访问，并能够根据需要从代码中的任何位置获取或设置任意自定义数据。    它通常用于保存在 Bootstrap 中初始化的对象（数据库连接、日志记录器、共享配置等）， 使得控制器、动作和插件可以直接获取它们，而无需在代码间层层传递。      类摘要   `Yaf_Registry`    `Yaf_Registry`    属性  `static` `_instance`   `protected` `_entries`  方法        属性 
- **`_instance`**
- **`_entries`**
