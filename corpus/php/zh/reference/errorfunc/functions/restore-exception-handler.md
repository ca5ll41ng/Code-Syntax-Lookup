---
id: "zh-php-function-function-restore-exception-handler"
language: "php"
lang: "zh"
category: "function"
name: "restore_exception_handler"
title: "恢复之前定义过的异常处理函数。"
signature: "true restore_exception_handler()"
module: "errorfunc"
source_url: "https://www.php.net/manual/zh/function.restore-exception-handler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 恢复之前定义过的异常处理函数。

## 说明

```php
true restore_exception_handler()
```

在使用 `set_exception_handler()` 改变异常处理函数之后，此函数可以 用于还原之前的异常处理程序(可以是内置的或者也可以是用户所定义的函数)。

## 参数

此函数没有参数。

## 返回值

总是返回 `true`。

## 示例

**`restore_exception_handler()` 范例**

```php


<?php
    function exception_handler_1(Exception $e)
    {
        echo '[' . __FUNCTION__ . '] ' . $e->getMessage();
    }

    function exception_handler_2(Exception $e)
    {
        echo '[' . __FUNCTION__ . '] ' . $e->getMessage();
    }

    set_exception_handler('exception_handler_1');
    set_exception_handler('exception_handler_2');

    restore_exception_handler();

    throw new Exception('This triggers the first exception handler...');
?>

    
```

以上示例会输出：

```text


[exception_handler_1] This triggers the first exception handler...

    
```

## 参见

`set_exception_handler()` `get_exception_handler()` `set_error_handler()` `restore_error_handler()` `error_reporting()`
