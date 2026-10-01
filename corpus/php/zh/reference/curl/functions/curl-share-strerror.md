---
id: "zh-php-function-function-curl-share-strerror"
language: "php"
lang: "zh"
category: "function"
name: "curl_share_strerror"
title: "返回错误编号对应的错误消息"
signature: "string|null curl_share_strerror(int $error_code)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-share-strerror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回错误编号对应的错误消息

## 说明

 {{{ 

```php
string|null curl_share_strerror(int $error_code)
```

返回错误编号对应的错误消息。

 }}} 

## 参数

 {{{ 

- **`$error_code`** — 某个 [cURL 错误代码]()常量。

 }}} 

## 返回值

 {{{ 

返回错误描述。错误代码无效则为 `null`。

 }}} 

## 参见

 {{{ 

 `curl_share_errno()` `curl_strerror()` 

 }}}
