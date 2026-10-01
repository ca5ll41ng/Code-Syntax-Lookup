---
id: "zh-php-function-function-socket-last-error"
language: "php"
lang: "zh"
category: "function"
name: "socket_last_error"
title: "返回套接字上的最后一个错误"
signature: "int socket_last_error(Socket|null $socket = null)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-last-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回套接字上的最后一个错误

## 说明

```php
int socket_last_error(Socket|null $socket = null)
```

如果将 `Socket` 实例传递给此函数，将会返回指定套接字发生的最后一个错误。如果 `$socket` 为 `null`, 则返回最后一个失败的套接字函数的错误码。此函数对以下情况特别有帮助： `socket_create()` 失败时不会返回套接字，以及 `socket_select()` 失败的原因与特定套接字没有直接联系。 错误码适合提供给 `socket_strerror()`，将返回指定错误码的字符串描述。

如果没有错误或者已经使用 `socket_clear_error()` 清除了错误，则函数返回 `0`。

## 参数

- **`$socket`** — 通过 `socket_create()` 创建的 `Socket` 实例。

## 返回值

此函数返回套接字错误码。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$socket` 是 `Socket` 实例， 之前是 `resource`。 |
| 8.0.0 | `$socket` 现在可为空（nullable）。 |

## 示例

**`socket_last_error()` 示例**

```php


<?php
$socket = @socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

if ($socket === false) {
    $errorcode = socket_last_error();
    $errormsg = socket_strerror($errorcode);
    
    die("Couldn't create socket: [$errorcode] $errormsg");
}
?>

    
```

## 注释

> `socket_last_error()` 不会清除错误代码，如果需要可以使用 `socket_clear_error()` 清除。
