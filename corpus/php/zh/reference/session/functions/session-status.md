---
id: "zh-php-function-function-session-status"
language: "php"
lang: "zh"
category: "function"
name: "session_status"
title: "返回当前会话状态"
signature: "int session_status()"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-status.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回当前会话状态

## 说明

 {{{ 

```php
int session_status()
```

`session_status()` 被用于返回当前会话状态。

 }}} 

## 参数

此函数没有参数。

## 返回值

 {{{ 

- `PHP_SESSION_DISABLED` 会话是被禁用的。
- `PHP_SESSION_NONE` 会话是启用的，但不存在当前会话。
- `PHP_SESSION_ACTIVE` 会话是启用的，而且存在当前会话。

 }}} 

## 参见

 {{{ 

 `session_start()` 

 }}}
