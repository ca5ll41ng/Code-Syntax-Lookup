---
id: "zh-php-function-reserved-variables-cookies"
language: "php"
lang: "zh"
category: "function"
name: "$_COOKIE"
title: "HTTP Cookies"
module: "language"
source_url: "https://www.php.net/manual/zh/reserved.variables.cookies.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# HTTP Cookies

## 说明

通过 HTTP Cookies 方式传递给当前脚本的变量的`数组`。

## 示例

**`$_COOKIE` 范例**

```php


<?php
echo 'Hello ' . htmlspecialchars($_COOKIE["name"]) . '!';
?>

    
```

假设之前发送了 "name" Cookie

以上示例的输出类似于：

```text


Hello Hannes!

    
```

## 注释

> “Superglobal”也称为自动化的全局变量。这就表示其在脚本的所有作用域中都是可用的。不需要在函数或方法中用 global $variable; 来访问它。

## 参见

`setcookie()` 处理外部变量 过滤器扩展
