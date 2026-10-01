---
id: "zh-php-function-function-oauth-get-sbs"
language: "php"
lang: "zh"
category: "function"
name: "oauth_get_sbs"
title: "生成一个签名字符基串"
signature: "string oauth_get_sbs(string $http_method, string $uri, [array $request_parameters = ...])"
module: "oauth"
source_url: "https://www.php.net/manual/zh/function.oauth-get-sbs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 生成一个签名字符基串

## 说明

```php
string oauth_get_sbs(string $http_method, string $uri, [array $request_parameters = ...])
```

根据 pecl/oauth 生成一个签名字符基串。

## 参数

- **`$http_method`** — HTTP 方法。
- **`$uri`** — 将要编码的 URI 。
- **`$request_parameters`** — 请求参数的数组。

## 返回值

返回一个签名字符基串。
