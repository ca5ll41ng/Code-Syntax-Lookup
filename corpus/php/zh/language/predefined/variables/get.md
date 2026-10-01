---
id: "zh-php-function-reserved-variables-get"
language: "php"
lang: "zh"
category: "function"
name: "$_GET"
title: "查询字符串变量"
module: "language"
source_url: "https://www.php.net/manual/zh/reserved.variables.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 查询字符串变量

## 说明

通过 URL 参数（也称为查询字符串）传递给当前脚本的变量（关联数组）。需要注意的是，只要存在查询字符串，就会填充此数组，无论 HTTP 请求方法为何。

## 示例

**`$_GET` 范例**

```php


<?php
echo 'Hello ' . htmlspecialchars($_GET["name"]) . '!';
?>

    
```

假设用户访问的是 `http://example.com/?name=Hannes`。

以上示例的输出类似于：

```text


Hello Hannes!

    
```

## 注释

> “Superglobal”也称为自动化的全局变量。这就表示其在脚本的所有作用域中都是可用的。不需要在函数或方法中用 global $variable; 来访问它。

> `$_GET` 中的值会自动通过 `urldecode()` 解码。

## 参见

处理外部变量 过滤器扩展
