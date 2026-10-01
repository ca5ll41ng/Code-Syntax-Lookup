---
id: "zh-php-function-function-session-register-shutdown"
language: "php"
lang: "zh"
category: "function"
name: "session_register_shutdown"
title: "关闭会话"
signature: "void session_register_shutdown()"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-register-shutdown.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭会话

## 说明

```php
void session_register_shutdown()
```

将 `session_write_close()` 函数注册为关闭会话的函数。

## 参数

此函数没有参数。

## 返回值

没有返回值。

## 错误／异常

如果函数调用失败，触发 `E_WARNING` 级别的错误。
