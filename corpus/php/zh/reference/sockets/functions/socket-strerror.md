---
id: "zh-php-function-function-socket-strerror"
language: "php"
lang: "zh"
category: "function"
name: "socket_strerror"
title: "返回描述套接字错误的字符串"
signature: "string socket_strerror(int $error_code)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-strerror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回描述套接字错误的字符串

## 说明

```php
string socket_strerror(int $error_code)
```

`socket_strerror()` 将 `socket_last_error()` 返回的套接字错误码作为 `$error_code` 参数，返回对应的文本解释。

> 虽然 socket 扩展生成的错误信息使用的是英语，但此方法会根据当前语言环境（`LC_MESSAGES`） 展示检索到的系统消息。

## 参数

- **`$error_code`** — 可能从 `socket_last_error()` 产生的套接字错误码。

## 返回值

返回与 `$error_code` 参数相关的错误信息。

## 示例

**`socket_strerror()` 示例**

```php


<?php
if (false == ($socket = @socket_create(AF_INET, SOCK_STREAM, SOL_TCP))) {
   echo "socket_create() failed: reason: " . socket_strerror(socket_last_error()) . "\n";
}

if (false == (@socket_bind($socket, '127.0.0.1', 80))) {
   echo "socket_bind() failed: reason: " . socket_strerror(socket_last_error($socket)) . "\n";
}
?>

    
```

以上示例的预期输出（假设脚本不是使用 root 权限运行）：

```text


socket_bind() failed: reason: Permission denied

    
```

## 参见

`socket_accept()` `socket_bind()` `socket_connect()` `socket_listen()` `socket_create()`
