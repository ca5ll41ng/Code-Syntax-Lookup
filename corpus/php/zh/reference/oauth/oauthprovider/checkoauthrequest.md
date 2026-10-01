---
id: "zh-php-function-oauthprovider-checkoauthrequest"
language: "php"
lang: "zh"
category: "function"
name: "OAuthProvider::checkOAuthRequest"
title: "检查一个 oauth 请求"
signature: "public void OAuthProvider::checkOAuthRequest([string $uri = ...], [string $method = ...])"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauthprovider.checkoauthrequest.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查一个 oauth 请求

## 说明

```php
public void OAuthProvider::checkOAuthRequest([string $uri = ...], [string $method = ...])
```

检查一个 OAuth 请求。

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$uri`** — 可选的 URI 或终点。
- **`$method`** — HTTP 方法。可选 `OAUTH_HTTP_METHOD_{*}` OAuth 常量其中之一传递。

## 返回值

没有返回值。

## 错误／异常

如果不能检测到 HTTP 方法，则发出一个 `E_ERROR` 级别的错误。

## 参见

 `OAuthProvider::reportProblem()`
