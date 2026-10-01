---
id: "zh-php-function-function-curl-multi-add-handle"
language: "php"
lang: "zh"
category: "function"
name: "curl_multi_add_handle"
title: "添加普通 cURL 句柄到 cURL 多句柄"
signature: "int curl_multi_add_handle(CurlMultiHandle $multi_handle, CurlHandle $handle)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-multi-add-handle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 添加普通 cURL 句柄到 cURL 多句柄

## 说明

```php
int curl_multi_add_handle(CurlMultiHandle $multi_handle, CurlHandle $handle)
```

增加 `$handle` 句柄到多句柄 `$multi_handle`

## 参数

- **`$multi_handle`** — 由 `curl_multi_init()` 返回的 cURL 多个句柄。
- **`$handle`** — 由 `curl_init()` 返回的 cURL 句柄。

## 返回值

成功时返回 0，失败时返回 `CURLM_{*}` 之一的错误码。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$multi_handle` expects a `CurlMultiHandle` instance now; previously, a `resource` was expected. |
| 8.0.0 | `$handle` 现在接受 `CurlHandle` 实例；之前接受 `resource`。 |

## 参见

`curl_multi_remove_handle()` `curl_multi_init()` `curl_init()`
