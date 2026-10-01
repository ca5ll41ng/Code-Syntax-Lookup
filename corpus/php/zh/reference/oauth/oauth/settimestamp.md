---
id: "zh-php-function-oauth-settimestamp"
language: "php"
lang: "zh"
category: "function"
name: "OAuth::setTimestamp"
title: "设置时间戳"
signature: "public mixed OAuth::setTimestamp(string $timestamp)"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.settimestamp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置时间戳

## 说明

```php
public mixed OAuth::setTimestamp(string $timestamp)
```

为后续请求设置时间戳。

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$timestamp`** — 时间戳。

## 返回值

返回 `true` ，除非 `$timestamp` 无效，则返回 `false` 。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL oauth 1.0.0 | 以前失败时返回 `null`，而不是 `false`。 |

## 参见

 `OAuth::setNonce()`
