---
id: "zh-php-function-function-curl-multi-close"
language: "php"
lang: "zh"
category: "function"
name: "curl_multi_close"
title: "从多句柄中移除所有 cURL 句柄"
signature: "void curl_multi_close(CurlMultiHandle $multi_handle)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-multi-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从多句柄中移除所有 cURL 句柄

## 说明

```php
void curl_multi_close(CurlMultiHandle $multi_handle)
```

移除所有附加到 `CurlMultiHandle` 的 `CurlHandle`，就像为每个 `CurlHandle` 调用了 `curl_multi_remove_handle()` 一样。

PHP 8.0.0 之前，此函数还会关闭 cURL 多句柄资源，使其无法使用。

## 参数

- **`$multi_handle`** — 由 `curl_multi_init()` 返回的 cURL 多个句柄。

## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$multi_handle` expects a `CurlMultiHandle` instance now; previously, a `resource` was expected. |

## 参见

`curl_multi_init()`
