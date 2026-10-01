---
id: "zh-php-function-oauth-getrequestheader"
language: "php"
lang: "zh"
category: "function"
name: "OAuth::getRequestHeader"
title: "生成 OAuth 头信息字符串签名"
signature: "public string|false OAuth::getRequestHeader(string $http_method, string $url, [mixed $extra_parameters = ...])"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.getrequestheader.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 生成 OAuth 头信息字符串签名

## 说明

```php
public string|false OAuth::getRequestHeader(string $http_method, string $url, [mixed $extra_parameters = ...])
```

生成基于最终 HTTP 方法、URL 和 一个字符串/数组附加参数的 OAuth 头信息字符串签名。

## 参数

- **`$http_method`** — 请求的 HTTP 方法。
- **`$url`** — 请求的 URL 。
- **`$extra_parameters`** — 字符串或数组类型的附带参数。

## 返回值

返回 一个包含生成的请求头信息的字符串 r 或者在失败时返回 `false`
