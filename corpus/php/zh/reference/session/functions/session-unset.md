---
id: "zh-php-function-function-session-unset"
language: "php"
lang: "zh"
category: "function"
name: "session_unset"
title: "释放所有的会话变量"
signature: "bool session_unset()"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-unset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 释放所有的会话变量

## 说明

```php
bool session_unset()
```

`session_unset()` 会释放当前会话注册的所有会话变量。

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | 此函数的返回类型现在是 `bool`。以前是 `void`。 |

## 注释

> 如果使用的是 `$_SESSION`，请使用 `unset()` 去 注销会话变量，即 unset($_SESSION['varname']);。

> 请不要使用 unset($_SESSION) 来释放整个 `$_SESSION`， 因为它将会禁用通过全局 `$_SESSION` 去注册会话变量。

> `session_unset()` 的使用与 $_SESSION = [] 相同。

> 仅当 session 处于活动状态时，此函数才能起作用。如果 session 尚未启动或已经销毁，它将无法清除 `$_SESSION` 数组。即使 session 不活跃，请使用 $_SESSION = [] 来删除所有 session 变量。
