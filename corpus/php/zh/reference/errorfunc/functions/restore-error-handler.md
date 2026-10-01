---
id: "zh-php-function-function-restore-error-handler"
language: "php"
lang: "zh"
category: "function"
name: "restore_error_handler"
title: "还原之前的错误处理函数"
signature: "true restore_error_handler()"
module: "errorfunc"
source_url: "https://www.php.net/manual/zh/function.restore-error-handler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 还原之前的错误处理函数

## 说明

```php
true restore_error_handler()
```

在使用 `set_error_handler()` 改变错误处理函数之后，此函数可以 用于还原之前的错误处理程序(可以是内置的或者也可以是用户所定义的函数)。

## 参数

此函数没有参数。

## 返回值

总是返回 `true`。

## 示例

**`restore_error_handler()` 范例**

如果是 `unserialize()` 导致了一个错误，接下来 会恢复原来的错误处理函数。

```php


<?php
function unserialize_handler($errno, $errstr)
{
    echo "Invalid serialized value.\n";
}

$serialized = 'foo';
set_error_handler('unserialize_handler');
$original = unserialize($serialized);
restore_error_handler();
?>

    
```

以上示例会输出：

```text


Invalid serialized value.

    
```

## 参见

`error_reporting()` `set_error_handler()` `get_error_handler()` `restore_exception_handler()` `trigger_error()`
