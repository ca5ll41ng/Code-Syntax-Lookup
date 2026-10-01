---
id: "zh-php-function-function-curl-multi-remove-handle"
language: "php"
lang: "zh"
category: "function"
name: "curl_multi_remove_handle"
title: "从一组 cURL 句柄中移除一个句柄"
signature: "int curl_multi_remove_handle(CurlMultiHandle $multi_handle, CurlHandle $handle)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-multi-remove-handle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从一组 cURL 句柄中移除一个句柄

## 说明

```php
int curl_multi_remove_handle(CurlMultiHandle $multi_handle, CurlHandle $handle)
```

从给定的 `$multi_handle` 中移除给定的 `$handle`。 当 `$handle` 被移除后，再次调用 `curl_exec()` 是完全合法的。 移除正在使用的 `$handle` 会有效地停止涉及该句柄的传输。

## 参数

- **`$multi_handle`** — 由 `curl_multi_init()` 返回的 cURL 多个句柄。
- **`$handle`** — 由 `curl_init()` 返回的 cURL 句柄。

## 返回值

成功时返回 0，失败时返回 `CURLM_{*}` 错误代码中的一个。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$multi_handle` expects a `CurlMultiHandle` instance now; previously, a `resource` was expected. |
| 8.0.0 | `$handle` 现在接受 `CurlHandle` 实例；之前接受 `resource`。 |

## 参见

`curl_init()` `curl_multi_init()` `curl_multi_add_handle()`
