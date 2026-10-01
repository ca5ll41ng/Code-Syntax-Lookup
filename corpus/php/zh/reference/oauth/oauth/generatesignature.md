---
id: "zh-php-function-oauth-generatesignature"
language: "php"
lang: "zh"
category: "function"
name: "OAuth::generateSignature"
title: "生成一个签名"
signature: "public string|false OAuth::generateSignature(string $http_method, string $url, [mixed $extra_parameters = ...])"
module: "oauth"
source_url: "https://www.php.net/manual/zh/oauth.generatesignature.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 生成一个签名

## 说明

```php
public string|false OAuth::generateSignature(string $http_method, string $url, [mixed $extra_parameters = ...])
```

生成一个基于最终 HTTP 方法、URL 和 一个字符串/数组参数的签名。

## 参数

- **`$http_method`** — 用来请求的 HTTP 方法
- **`$url`** — 用来请求的 URL
- **`$extra_parameters`** — 字符串或数组的附加参数

## 返回值

一个包含签名的字符串 或者在失败时返回 `false`
