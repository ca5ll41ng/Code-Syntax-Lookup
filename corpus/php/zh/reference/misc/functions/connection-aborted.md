---
id: "zh-php-function-function-connection-aborted"
language: "php"
lang: "zh"
category: "function"
name: "connection_aborted"
title: "检查客户端是否已经断开"
signature: "int connection_aborted()"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.connection-aborted.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查客户端是否已经断开

## 说明

```php
int connection_aborted()
```

检查客户端是否已经断开。

## 参数

此函数没有参数。

## 返回值

如果客户端已经断开则返回1，否则返回0。

## 参见

`connection_status()` `ignore_user_abort()` 查看连接处理 了解PHP处理连接的详情。
