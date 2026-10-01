---
id: "zh-php-function-function-session-reset"
language: "php"
lang: "zh"
category: "function"
name: "session_reset"
title: "使用会话存储中的原始值重新初始化会话数组"
signature: "bool session_reset()"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-reset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用会话存储中的原始值重新初始化会话数组

## 说明

```php
bool session_reset()
```

`session_reset()` 使用会话存储中保存的原始值重新初始化会话。 此函数需要一个活跃的会话，并且会丢弃 $_SESSION 中的所有更改。

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | 此函数的返回类型现在是 `bool`。 之前返回类型是 `void`。 |

## 参见

`$_SESSION` session.auto_start 配置指示 `session_start()` `session_abort()` `session_commit()`
