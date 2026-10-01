---
id: "zh-php-function-function-get-exception-handler"
language: "php"
lang: "zh"
category: "function"
name: "get_exception_handler"
title: "获取用户定义的异常处理函数"
signature: "callable|null get_exception_handler()"
module: "errorfunc"
source_url: "https://www.php.net/manual/zh/function.get-exception-handler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取用户定义的异常处理函数

## 说明

```php
callable|null get_exception_handler()
```

返回当前异常处理函数（如果存在）。

## 参数

此函数没有参数。

## 返回值

返回当前定义的异常处理程序（如果存在）。如果没有定义处理程序，则返回 `null`。

返回的处理程序是传递给 `set_exception_handler()` 以定义它的精确可调用值。

## 示例

**`get_exception_handler()` 示例**

```php


<?php

$handler = function (Throwable $ex) {
     echo "Exception: " . $ex::class . ": " . $ex->getMessage() . "\n";
};

var_dump(get_exception_handler()); // NULL

set_exception_handler($handler);

var_dump(get_exception_handler() === $handler); // bool(true)

?>

   
```

## 注释

> 在 PHP 8.5.0 之前，以下 polyfill 可以提供此功能：
>
> ```php <?php if (!function_exists('get_exception_handler')) { function noop_exception_handler() { } function get_exception_handler(): ?callable { $handler = set_exception_handler('noop_exception_handler'); restore_exception_handler(); return $handler; } } ?> ```

## 参见

 `set_exception_handler()` `restore_exception_handler()` `restore_error_handler()` `error_reporting()` 异常
