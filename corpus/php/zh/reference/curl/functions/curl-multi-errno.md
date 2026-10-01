---
id: "zh-php-function-function-curl-multi-errno"
language: "php"
lang: "zh"
category: "function"
name: "curl_multi_errno"
title: "返回上一次 curl 批处理的错误码"
signature: "int curl_multi_errno(CurlMultiHandle $multi_handle)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-multi-errno.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回上一次 curl 批处理的错误码

## 说明

 {{{ 

```php
int curl_multi_errno(CurlMultiHandle $multi_handle)
```

返回整型数字，为上次 curl 批处理错误码。

 }}} 

## 参数

 {{{ 

- **`$multi_handle`** — 由 `curl_multi_init()` 返回的 cURL 多个句柄。

 }}} 

## 返回值

 {{{ 

返回整型数字，包含上次 curl 批处理的错误码。

 }}} 

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 失败时此函数不再返回 `false`。 |
| 8.0.0 | `$multi_handle` expects a `CurlMultiHandle` instance now; previously, a `resource` was expected. |

## 参见

 {{{ 

 `curl_errno()` 

 }}}
