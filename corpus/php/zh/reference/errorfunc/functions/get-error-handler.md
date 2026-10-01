---
id: "zh-php-function-function-get-error-handler"
language: "php"
lang: "zh"
category: "function"
name: "get_error_handler"
title: "获取用户定义的错误处理函数"
signature: "callable|null get_error_handler()"
module: "errorfunc"
source_url: "https://www.php.net/manual/zh/function.get-error-handler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取用户定义的错误处理函数

## 说明

```php
callable|null get_error_handler()
```

返回当前错误处理函数（如果存在）。

## 参数

此函数没有参数。

## 返回值

返回当前定义的错误处理程序（如果存在）。如果使用内置错误处理程序，则返回 `null`。

返回的处理程序是传递给 `set_error_handler()` 以定义它的精确可调用值。

## 示例

**`get_error_handler()` 示例**

```php


<?php

$handler = function (int $errno, string $errstr, ?string $errfile, ?int $errline) {
     echo "Error: " . $errstr . "\n";
};

var_dump(get_error_handler()); // NULL

set_error_handler($handler);

var_dump(get_error_handler() === $handler); // bool(true)

?>

   
```

## 注释

> 在 PHP 8.5.0 之前，以下 polyfill 可以提供此功能：
>
> ```php <?php if (!function_exists('get_error_handler')) { function noop_error_handler() { } function get_error_handler(): ?callable { $handler = set_error_handler('noop_error_handler'); restore_error_handler(); return $handler; } } ?> ```

## 参见

 `error_reporting()` `set_error_handler()` `restore_error_handler()` `trigger_error()` 错误级别常量
