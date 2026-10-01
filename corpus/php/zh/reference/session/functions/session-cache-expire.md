---
id: "zh-php-function-function-session-cache-expire"
language: "php"
lang: "zh"
category: "function"
name: "session_cache_expire"
title: "返回/设置当前缓存的到期时间"
signature: "int|false session_cache_expire(int|null $value = null)"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-cache-expire.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回/设置当前缓存的到期时间

## 说明

```php
int|false session_cache_expire(int|null $value = null)
```

`session_cache_expire()` 返回 `session.cache_expire` 的设定值。

请求开始的时候，缓存到期时间会被重置为 180，并且保存在 session.cache_expire 配置项中。 因此，针对每个请求，需要在 `session_start()` 函数调用之前 调用 `session_cache_expire()` 来设置缓存到期时间。

## 参数

- **`$value`** — 如果指定 `$value` 且不为 `null`，就使用 `$value` 的值替换当前缓存到期时间。 — > 仅在 `session.cache_limiter` 的设置值 *不是* `nocache` 的时候， 才可以设置 `$value` 参数。

## 返回值

返回 `session.cache_expire` 的当前设置值， 以分钟为单位，默认值是 180 （分钟）。如果更改值失败，则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$value` 现在可以为 null。 |

## 示例

**`session_cache_expire()` 示例**

```php


<?php

/* 设置缓存限制为 “private” */

session_cache_limiter('private');
$cache_limiter = session_cache_limiter();

/* 设置缓存过期时间为 30 分钟 */
session_cache_expire(30);
$cache_expire = session_cache_expire();

/* 开始会话 */

session_start();

echo "The cache limiter is now set to $cache_limiter<br />";
echo "The cached session pages expire after $cache_expire minutes";
?>

    
```

## 参见

session.cache_expire session.cache_limiter `session_cache_limiter()`
