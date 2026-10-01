---
id: "zh-php-function-function-session-name"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer"}
name: "session_name"
title: "读取/设置会话名称"
signature: "string|false session_name(string|null $name = null)"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 读取/设置会话名称

## 说明

```php
string|false session_name(string|null $name = null)
```

`session_name()` 函数返回当前会话名称。 如果指定 `$name` 参数， `session_name()` 函数会更新会话名称， 并返回 *原来的* 会话名称。

如果使用 `$name` 指定了新字符串作为会话 cookie 的名字， `session_name()` 函数会修改 HTTP 响应中的 cookie （如果启用了 session.use_trans_sid，还会输出会话 cookie 的内容）。 一旦在 HTTP 响应中发送了 cookie 的内容之后， 调用 `session_name()` 函数会产生 `E_WARNING`。 所以，一定要在调用 `session_start()` 函数之前 调用此函数。

请求开始的时候，会话名称会被重置并且存储到 `session.name` 配置项。 因此，要想设置会话名称，那么对于每个请求，都需要在 调用 `session_start()` 函数 之前调用 `session_name()` 函数。

## 参数

- **`$name`** — 用在 cookie 或者 URL 中的会话名称， 例如：`PHPSESSID`。 只能使用字母和数字作为会话名称，建议尽可能的短一些， 并且是望文知意的名字（对于启用了 cookie 警告的用户来说，方便其判断是否要允许此 cookie）。 如果指定了 `$name` 且不为 `null`， 那么当前会话也会使用指定值作为名称。 — > 会话名称至少需要一个字母，不能全部都使用数字， 否则，每次都会生成一个新的会话 ID。

## 返回值

返回当前会话名称。如果指定 `$name` 参数，那么此函数会更新会话名称，并且 返回 *原来的* 会话名称， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$name` 现在可以为 null。 |
| 7.2.0 | `session_name()` 函数会检查会话状态， 之前的版本仅仅检查 cookie 状态。 所以，旧版本的 PHP 允许你在调用 `session_start()` 函数之后再调用 `session_name()` 函数， 新版本的 PHP 不再允许这样做了。 |

## 示例

**`session_name()` 示例**

```php


<?php

/* set the session name to WebsiteID */

$previous_name = session_name("WebsiteID");

echo "The previous session name was $previous_name<br />";
?>

    
```

## 参见

session.name 配置指示
