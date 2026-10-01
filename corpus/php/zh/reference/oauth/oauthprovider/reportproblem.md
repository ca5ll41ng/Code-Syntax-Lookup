---
id: "zh-php-function-oauthprovider-reportproblem"
language: "php"
lang: "zh"
category: "function"
name: "OAuthProvider::reportProblem"
title: "报告问题"
signature: "final public static string OAuthProvider::reportProblem(string $oauthexception, bool $send_headers = true)"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauthprovider.reportproblem.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 报告问题

## 说明

```php
final public static string OAuthProvider::reportProblem(string $oauthexception, bool $send_headers = true)
```

将问题作为一个 `OAuthException` 异常传入，可能出现的问题在 OAuth 常量 章节里已列出。

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$oauthexception`** — `OAuthException` 类。

## 返回值

没有返回值。

## 参见

 `OAuthProvider::checkOAuthRequest()` `OAuthProvider::isRequestTokenEndpoint()`
