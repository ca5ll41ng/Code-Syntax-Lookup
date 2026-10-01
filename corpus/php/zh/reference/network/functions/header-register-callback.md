---
id: "zh-php-function-function-header-register-callback"
language: "php"
lang: "zh"
category: "function"
name: "header_register_callback"
title: "调用一个 header 函数"
signature: "bool header_register_callback(callable $callback)"
module: "network"
source_url: "https://www.php.net/manual/zh/function.header-register-callback.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 调用一个 header 函数

## 说明

```php
bool header_register_callback(callable $callback)
```

注册一个函数，在 PHP 开始发送输出时调用。

PHP 准备好所有响应头，在发送内容之前执行 `$callback`，创建了一个发送响应头的操作窗口。

## 参数

- **`$callback`** — 在头发送前调用函数。 它没有参数，返回的值也会被忽略。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`header_register_callback()` 例子**

```php


<?php

header('Content-Type: text/plain');
header('X-Test: foo');

function foo() {
 foreach (headers_list() as $header) {
   if (strpos($header, 'X-Powered-By:') !== false) {
     header_remove('X-Powered-By');
   }
   header_remove('X-Test');
 }
}

$result = header_register_callback('foo');
echo "a";
?>

   
```

以上示例的输出类似于：

```text


Content-Type: text/plain

a

   
```

## 注释

`header_register_callback()` 是在头即将发送前执行的， 所以本函数的任意内容输出都会打断输出过程。

> 数据头只会在SAPI支持时得到处理和输出。

## 参见

 `headers_list()` `header_remove()` `header()`
