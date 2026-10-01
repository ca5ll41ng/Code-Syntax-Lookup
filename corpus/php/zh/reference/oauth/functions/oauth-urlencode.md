---
id: "zh-php-function-function-oauth-urlencode"
language: "php"
lang: "zh"
category: "function"
name: "oauth_urlencode"
title: "将 URI 编码为 RFC 3986 规范"
signature: "string oauth_urlencode(string $uri)"
module: "oauth"
source_url: "https://www.php.net/manual/zh/function.oauth-urlencode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将 URI 编码为 RFC 3986 规范

## 说明

```php
string oauth_urlencode(string $uri)
```

将 URI 编码为 [RFC 3986](3986) 规范。

## 参数

- **`$uri`** — 将要编码的 URI 。

## 返回值

返回一个 [RFC 3986](3986) 规范的编码字符串。
