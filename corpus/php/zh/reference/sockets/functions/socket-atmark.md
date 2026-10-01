---
id: "zh-php-function-function-socket-atmark"
language: "php"
lang: "zh"
category: "function"
name: "socket_atmark"
title: "确认 socket 是否处于带外数据标记"
signature: "bool socket_atmark(Socket $socket)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-atmark.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 确认 socket 是否处于带外数据标记

## 说明

```php
bool socket_atmark(Socket $socket)
```

确认 `$socket` 是否处于带外数据标记。

## 参数

- **`$socket`** — 使用 `socket_create()` 创建的 `Socket` 实例。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**使用 `socket_atmark()` 设置源地址**

```php


<?php
// 创建新 socket
$sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
var_dump(socket_atmark($sock));
// 关闭
socket_close($sock);
?>

    
```

## 参见

`socket_connect()` `socket_create()`
