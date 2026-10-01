---
id: "zh-php-function-function-connection-status"
language: "php"
lang: "zh"
category: "function"
name: "connection_status"
title: "返回连接的状态位"
signature: "int connection_status()"
module: "misc"
source_url: "https://www.php.net/manual/zh/function.connection-status.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回连接的状态位

## 说明

```php
int connection_status()
```

获得当前连接的状态位。

## 参数

此函数没有参数。

## 返回值

获得当前连接的状态位, 可以用于与 `CONNECTION_{*}` 常量来确定连接状态。

## 参见

`connection_aborted()` `ignore_user_abort()` 查看连接处理了解PHP处理连接的详情。
