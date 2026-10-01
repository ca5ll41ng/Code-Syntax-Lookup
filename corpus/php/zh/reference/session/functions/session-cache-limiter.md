---
id: "zh-php-function-function-session-cache-limiter"
language: "php"
lang: "zh"
category: "function"
name: "session_cache_limiter"
title: "读取/设置缓存限制器"
signature: "string|false session_value(string|null $value = null)"
module: "session"
source_url: "https://www.php.net/manual/zh/function.session-cache-limiter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 读取/设置缓存限制器

## 说明

```php
string|false session_value(string|null $value = null)
```

`session_cache_limiter()` 返回当前缓存限制器的名称。

缓存限制器定义了向客户端发送的 HTTP 响应头中的缓存控制策略。 客户端或者代理服务器通过检测这个响应头信息来 确定对于页面内容的缓存规则。 设置缓存限制器为 `nocache` 会禁止客户端或者代理服务器缓存内容， `public` 表示允许客户端或代理服务器缓存内容， `private` 表示允许客户端缓存， 但是不允许代理服务器缓存内容。

在 `private` 模式下， 包括 Mozilla 在内的一些浏览器可能无法正确处理 Expire 响应头， 通过使用 `private_no_expire` 模式可以解决这个问题：在这种模式下， 不会向客户端发送 `Expire` 响应头。

设置为 `''` 可以关闭 自动发送缓存策略响应头的功能。

请求开始的时候，缓存限制器会被重置为默认值，并且存储在 session.cache_limiter 配置项中。 因此，如果要设置缓存限制器，对于每个请求， 都需要在调用 `session_start()` 函数之前， 调用 `session_cache_limiter()` 函数来进行设置。

## 参数

- **`$value`** — 如果指定 `$value` 且不为 `null`， 将使用指定值作为缓存限制器的值。
  | 值 | 发送的响应头 |
  | --- | --- |
  | `public` | ```header


  Expires: (sometime in the future, according session.cache_expire)
  Cache-Control: public, max-age=(sometime in the future, according to session.cache_expire)
  Last-Modified: (the timestamp of the current script)

             
  ``` |
  | `private_no_expire` | ```header


  Cache-Control: private, max-age=(session.cache_expire in the future)
  Last-Modified: (the timestamp of the current script)

             
  ``` |
  | `private` | ```header


  Expires: Thu, 19 Nov 1981 08:52:00 GMT
  Cache-Control: private, max-age=(session.cache_expire in the future)
  Last-Modified: (the timestamp of the current script)

             
  ``` |
  | `nocache` | ```header


  Expires: Thu, 19 Nov 1981 08:52:00 GMT
  Cache-Control: no-store, no-cache, must-revalidate
  Pragma: no-cache

             
  ``` |



## 返回值

返回当前所用的缓存限制器名称。如果更改值失败，则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$value` 现在可为 null。 |

## 示例

**`session_cache_limiter()` 示例**

```php


<?php

/* 设置缓存限制器为 'private' */

session_cache_limiter('private');
$cache_limiter = session_cache_limiter();

echo "The cache limiter is now set to $cache_limiter<br />";
?>

    
```

## 参见

session.cache_limiter
