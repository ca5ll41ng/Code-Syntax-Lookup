---
id: "zh-php-guide-class-yaf-application"
language: "php"
lang: "zh"
category: "guide"
name: "class.yaf-application"
title: "Yaf_Application 类"
module: "yaf"
source_url: "https://www.php.net/manual/zh/class.yaf-application.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yaf_Application 类

Yaf_Application

   简介  `Yaf_Application` 为应用提供引导（bootstrap）设施， 它提供可重用的资源、通用及基于模块的引导类，以及依赖检查。   
> `Yaf_Application` 实现了单例模式， 而且 `Yaf_Application` 不能被序列化或反序列化， 当你尝试使用 PHPUnit 为 Yaf 编写测试用例时会造成问题。
>
> 你可以使用 PHPUnit 的 `@backupGlobals` 注释 来控制全局变量的备份和恢复操作，从而解决这个问题。

    类摘要   `Yaf_Application`    `final` `Yaf_Application`    属性  `protected` `config`   `protected` `dispatcher`   `protected` `static` `_app`   `protected` `_modules`   `protected` `_running`   `protected` `_environ`   `protected` `_err_no`   `protected` `_err_msg`  方法        属性 
- **`config`** — 应用配置对象。
- **`dispatcher`** — 此应用使用的 `Yaf_Dispatcher` 实例。
- **`_app`** — 指向当前唯一运行中的应用实例的静态引用。
- **`_modules`** — 已注册的模块名列表，解析自 application.modules。
- **`_running`** — 应用当前是否正在运行。
- **`_environ`** — 应用的环境名称，默认为 `"product"`。
- **`_err_no`** — 最后一次错误的错误码，是 YAF_ERR_* 常量之一。
- **`_err_msg`** — 最后一次错误的错误信息。
