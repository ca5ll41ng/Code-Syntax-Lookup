---
id: "zh-php-function-reserved-variables-request"
language: "php"
lang: "zh"
category: "function"
name: "$_REQUEST"
title: "HTTP Request 变量"
module: "language"
source_url: "https://www.php.net/manual/zh/reserved.variables.request.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# HTTP Request 变量

## 说明

默认情况下包含了 `$_GET`，`$_POST` 和 `$_COOKIE` 的`数组`。

## 注释

> “Superglobal”也称为自动化的全局变量。这就表示其在脚本的所有作用域中都是可用的。不需要在函数或方法中用 global $variable; 来访问它。

> 以命令行方式运行时，将*不*包含 argv 和 argc 信息；它们将存在于 `$_SERVER` `数组`。

> 由于 `$_REQUEST` 中的变量通过 GET，POST 和 COOKIE 输入机制传递给脚本文件，因此可以被远程用户篡改而并不可信。这个数组的项目及其顺序依赖于 PHP 的 request_order 和 variables_order 指令的配置。

## 参见

 处理外部变量 过滤器扩展
