---
id: "zh-php-function-function-curl-multi-setopt"
language: "php"
lang: "zh"
category: "function"
name: "curl_multi_setopt"
title: "设置 cURL 并行选项"
signature: "bool curl_multi_setopt(CurlMultiHandle $multi_handle, int $option, mixed $value)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-multi-setopt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置 cURL 并行选项

## 说明

```php
bool curl_multi_setopt(CurlMultiHandle $multi_handle, int $option, mixed $value)
```

为给定的 cURL 并行句柄设置选项。

## 参数

- **`$multi_handle`** — 由 `curl_multi_init()` 返回的 cURL 多个句柄。
- **`$option`** — 常量 `CURLMOPT_{*}` 之一。
- **`$value`** — 要设置给 `$option` 的值。有关每个常量期望的值类型的详细信息，请参阅 `CURLMOPT_{*}` 常量的描述。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 引入 `CURLMOPT_MAX_CONCURRENT_STREAMS`。 |
| 8.0.0 | `$multi_handle` expects a `CurlMultiHandle` instance now; previously, a `resource` was expected. |
| 7.1.0 | 引入 `CURLMOPT_PUSHFUNCTION`。 |
| 7.0.7 | 引入 `CURLMOPT_CHUNK_LENGTH_PENALTY_SIZE`、`CURLMOPT_CONTENT_LENGTH_PENALTY_SIZE`、`CURLMOPT_MAX_HOST_CONNECTIONS`、`CURLMOPT_MAX_PIPELINE_LENGTH` 和 `CURLMOPT_MAX_TOTAL_CONNECTIONS`。 |
