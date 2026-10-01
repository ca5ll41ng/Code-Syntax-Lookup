---
id: "zh-php-function-function-curl-share-errno"
language: "php"
lang: "zh"
category: "function"
name: "curl_share_errno"
title: "返回共享 curl 句柄的最后一次错误编号"
signature: "int curl_share_errno(CurlShareHandle $share_handle)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-share-errno.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回共享 curl 句柄的最后一次错误编号

## 说明

 {{{ 

```php
int curl_share_errno(CurlShareHandle $share_handle)
```

返回整数，表示共享 curl 句柄的最后一次错误编号。

 }}} 

## 参数

 {{{ 

- **`$share_handle`** — A cURL share handle returned by `curl_share_init()`.

 }}} 

## 返回值

 {{{ 

返回整数，表示共享 curl 句柄的最后一次错误编号。

 }}} 

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 失败时函数不再返回 `false`。 |
| 8.0.0 | `$share_handle` expects a `CurlShareHandle` instance now; previously, a `resource` was expected. |

## 参见

 {{{ 

 `curl_errno()` 

 }}}
