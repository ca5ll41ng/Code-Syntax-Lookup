---
id: "zh-php-function-oauthprovider-isrequesttokenendpoint"
language: "php"
lang: "zh"
category: "function"
name: "OAuthProvider::isRequestTokenEndpoint"
title: "设置 isRequestTokenEndpoint"
signature: "public void OAuthProvider::isRequestTokenEndpoint(bool $will_issue_request_token)"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauthprovider.isrequesttokenendpoint.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 isRequestTokenEndpoint

## 说明

```php
public void OAuthProvider::isRequestTokenEndpoint(bool $will_issue_request_token)
```

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$will_issue_request_token`** — 设置是否发布一个请求令牌，从而决定 `OAuthProvider::tokenHandler()` 是否需要被调用。

## 返回值

没有返回值。

## 参见

 `OAuthProvider::setRequestTokenPath()` `OAuthProvider::reportProblem()`
