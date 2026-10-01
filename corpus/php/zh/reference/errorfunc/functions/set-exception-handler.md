---
id: "zh-php-function-function-set-exception-handler"
language: "php"
lang: "zh"
category: "function"
name: "set_exception_handler"
title: "设置用户自定义的异常处理函数"
signature: "callable|null set_exception_handler(callable|null $callback)"
module: "errorfunc"
source_url: "https://www.php.net/manual/zh/function.set-exception-handler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置用户自定义的异常处理函数

## 说明

```php
callable|null set_exception_handler(callable|null $callback)
```

设置默认的异常处理程序，用于没有用 try/catch 块来捕获的异常。 在 `$callback` 调用后异常会中止。

## 参数

- **`$callback`** — 当一个未捕获的异常发生时所调用的函数。该处理函数需要接受一个参数，该参数是抛出的 `Throwable` 对象。`Error` 和 `Exception` 都实现了 `Throwable` 接口。这是处理程序签名： — `void``{handler}()` `Throwable``$ex` — 也可以传递 `null` 值用于重置异常处理函数为默认值。

## 返回值

返回之前定义的异常处理程序，或者在错误时返回 `null`。如果之前没有定义错误处理程序，也会返回 `null`。

## 示例

**`set_exception_handler()` 范例**

```php


<?php
function exception_handler(Throwable $exception) {
  echo "Uncaught exception: " , $exception->getMessage(), "\n";
}

set_exception_handler('exception_handler');

throw new Exception('Uncaught Exception');
echo "Not Executed\n";
?>

    
```

## 参见

 {{{ 

`get_exception_handler()` `restore_exception_handler()` `restore_error_handler()` `error_reporting()` 异常

 }}}
