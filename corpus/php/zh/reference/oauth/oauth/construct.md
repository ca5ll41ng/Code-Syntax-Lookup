---
id: "zh-php-function-oauth-construct"
language: "php"
lang: "zh"
category: "function"
name: "OAuth::__construct"
title: "新建一个 OAuth 对象"
signature: "public OAuth::__construct(string $consumer_key, string $consumer_secret, string $signature_method = OAUTH_SIG_METHOD_HMACSHA1, int $auth_type = 0)"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 新建一个 OAuth 对象

## 说明

```php
public OAuth::__construct(string $consumer_key, string $consumer_secret, string $signature_method = OAUTH_SIG_METHOD_HMACSHA1, int $auth_type = 0)
```

新建一个 OAuth 对象

## 参数

- **`$consumer_key`** — 由服务提供者提供的 consumer key 。
- **`$consumer_secret`** — 由服务提供者提供的 consumer secret 。
- **`$signature_method`** — 可选参数，用来定义使用哪种签名方法，默认为 `OAUTH_SIG_METHOD_HMACSHA1` （HMAC-SHA1）。
- **`$auth_type`** — 可选参数，用来定义如何传递 OAuth 参数给消费方，默认为`OAUTH_AUTH_TYPE_AUTHORIZATION` （在 `Authorization` 头部）。
