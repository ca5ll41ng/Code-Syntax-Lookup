---
id: "zh-php-function-function-curl-multi-strerror"
language: "php"
lang: "zh"
category: "function"
name: "curl_multi_strerror"
title: "返回字符串描述的错误代码"
signature: "string|null curl_multi_strerror(int $error_code)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-multi-strerror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回字符串描述的错误代码

## 说明

```php
string|null curl_multi_strerror(int $error_code)
```

返回一个用以描述所给 `CURLM_{*}` 错误代码所对应的错误信息。

## 参数

- **`$error_code`** — `CURLM_{*}` 常量之一。

## 返回值

返回可用错误代码所对应的错误信息，否则返回 `null` 。

## 参见

`curl_strerror()` [cURL error codes]()
