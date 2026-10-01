---
id: "zh-php-function-reserved-variables-environment"
language: "php"
lang: "zh"
category: "function"
name: "$_ENV"
title: "环境变量"
module: "language"
source_url: "https://www.php.net/manual/zh/reserved.variables.environment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 环境变量

## 说明

通过环境方式传递给当前脚本的变量的`数组`。

这些变量被从 PHP 解析器的运行环境导入到 PHP 的全局命名空间。很多是由支持 PHP 运行的 Shell 提供的，并且不同的系统很可能运行着不同种类的 Shell，所以不可能有一份确定的列表。请查看你的 Shell 文档来获取定义的环境变量列表。

其他环境变量包含了 CGI 变量，而不管 PHP 是以服务器模块还是 CGI 处理器的方式运行。

## 示例

**`$_ENV` 范例**

```php


<?php
echo 'My username is ' .$_ENV["USER"] . '!';
?>

    
```

假设 "bjori" 运行此段脚本

以上示例的输出类似于：

```text


My username is bjori!

    
```

## 注释

> “Superglobal”也称为自动化的全局变量。这就表示其在脚本的所有作用域中都是可用的。不需要在函数或方法中用 global $variable; 来访问它。

## 参见

`getenv()` 过滤器扩展
