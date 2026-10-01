---
id: "zh-php-function-function-session-abort"
language: "php"
lang: "zh"
category: "function"
name: "session_abort"
title: "丢弃会话数组的更改并结束会话"
signature: "bool session_abort()"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-abort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 丢弃会话数组的更改并结束会话

## 说明

```php
bool session_abort()
```

`session_abort()` 在不保存数据的情况下结束会话。 因此会话数据中的原始值会被保留。

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | 此函数的返回类型现在是 `bool`。 之前是 `void`。 |

## 参见

`$_SESSION` session.auto_start 配置指示 `session_start()` `session_reset()` `session_commit()`
