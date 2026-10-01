---
id: "zh-php-function-oauth-setnonce"
language: "php"
lang: "zh"
category: "function"
name: "OAuth::setNonce"
title: "为后续请求设置现时标志"
signature: "public mixed OAuth::setNonce(string $nonce)"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.setnonce.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为后续请求设置现时标志

## 说明

```php
public mixed OAuth::setNonce(string $nonce)
```

为所有后续请求设置现时标志。

## 参数

- **`$nonce`** — oauth_nonce 的值。

## 返回值

成功返回 `true` ，如果 `$nonce` 被认为无效，则返回 `false` 。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL oauth 1.0.0 | 以前失败时返回 `null`，而不是 `false`。 |

## 参见

 `OAuth::setToken()` `OAuth::setAuthType()` `OAuth::setVersion()`
