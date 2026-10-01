---
id: "zh-php-function-function-error-get-last"
language: "php"
lang: "zh"
category: "function"
name: "error_get_last"
title: "获取最后发生的错误"
signature: "array|null error_get_last()"
module: "errorfunc"
source_url: "https://www.php.net/manual/zh/function.error-get-last.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取最后发生的错误

## 说明

```php
array|null error_get_last()
```

获取关于最后一个发生的错误的信息。

## 参数

此函数没有参数。

## 返回值

返回了一个关联数组，描述了最后错误的信息，以该错误的 "type"、 "message"、"file" 和 "line" 为数组的键。 如果该错误由 PHP 内置函数导致的，"message"会以该函数名开头。 如果还没有错误则返回 `null`。

## 示例

**An `error_get_last()` 范例**

```php


<?php
echo $a;
print_r(error_get_last());
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [type] => 8
    [message] => Undefined variable: a
    [file] => C:\WWW\index.php
    [line] => 2
)

    
```

## 参见

Error 常量 `$php_errormsg` 变量 `error_clear_last()` `$display_errors` 指令 `$html_errors` 指令 `$xmlrpc_errors` 指令
