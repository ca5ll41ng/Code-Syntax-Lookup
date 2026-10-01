---
id: "zh-php-function-function-socket-bind"
language: "php"
lang: "zh"
category: "function"
name: "socket_bind"
title: "给套接字绑定名字"
signature: "bool socket_bind(Socket $socket, string $address, int $port = 0)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-bind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 给套接字绑定名字

## 说明

```php
bool socket_bind(Socket $socket, string $address, int $port = 0)
```

绑定 `$address` 到 `$socket`。 该操作必须是在使用 `socket_connect()` 或者 `socket_listen()` 建立一个连接之前。

## 参数

- **`$socket`** — 用 `socket_create()` 创建的 `Socket` 实例。
- **`$address`** — 如果套接字是 `AF_INET` 族，那么 `$address` 必须是一个四点分法的 IP 地址（例如 `127.0.0.1` ）。 — 如果套接字是 `AF_UNIX` 族，那么 `$address` 是 Unix 域套接字的路径（例如 `/tmp/my.sock` ）。
- **`$port` （可选）** — 参数 `$port` 仅仅用于 `AF_INET` 套接字连接的时候，并且指定连接中需要监听的端口号。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

使用 `socket_last_error()` 检索错误代码，如果将此代码传入 `socket_strerror()` 则可以得到错误的文字说明。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$socket` 是 `Socket` 实例， 之前是 `resource`。 |

## 示例

**使用 `socket_bind()` 来设置源地址**

```php


<?php
// 创建新的套接字
$sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

// 计算机拥有的 IP 地址示例列表
$sourceips['kevin']    = '127.0.0.1';
$sourceips['madcoder'] = '127.0.0.2';

// 绑定源地址
socket_bind($sock, $sourceips['madcoder']);

// 连接到目标地址
socket_connect($sock, '127.0.0.1', 80);

// 写入
$request = 'GET / HTTP/1.1' . "\r\n" .
           'Host: example.com' . "\r\n\r\n";
socket_write($sock, $request);

// 关闭
socket_close($sock);

?> 

    
```

## 注释

> 该函数必须在 `socket_connect()` 之前使用。

## 参见

`socket_connect()` `socket_listen()` `socket_create()` `socket_last_error()` `socket_strerror()`
