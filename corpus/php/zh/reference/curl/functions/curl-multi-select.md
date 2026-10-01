---
id: "zh-php-function-function-curl-multi-select"
language: "php"
lang: "zh"
category: "function"
name: "curl_multi_select"
title: "等待，直到任何 cURL 多句柄连接可以进行读取或写入"
signature: "int curl_multi_select(resource $mh, float $timeout = 1.0)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-multi-select.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 等待，直到任何 cURL 多句柄连接可以进行读取或写入

## 说明

```php
int curl_multi_select(resource $mh, float $timeout = 1.0)
```

堵塞脚本执行，直到附加到 cURL 多句柄的 cURL 句柄能够在下次调用 `curl_multi_exec()` 时取得进展或者直到超时（以先到者为准）。

## 参数

- **`$multi_handle`** — 由 `curl_multi_init()` 返回的 cURL 多个句柄。
- **`$timeout`** — 以秒为单位，等待活跃 cURL 多句柄连接的响应时间。

## 返回值

成功时返回描述符集合中活跃描述符的数量。如果没有任何活动的描述符，则为 `0`。失败时，此函数将在 `select()` 失败时返回 `-1`（来自底层 select 系统调用）。

## 错误／异常

如果 `$timeout` 小于 `0` 或者大于 `PHP_INT_MAX`，则抛出 ValueError。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 如果 `$timeout` 小于 `0` 或者大于 `PHP_INT_MAX`，现在抛出 ValueError。 |
| 8.0.0 | `$multi_handle` expects a `CurlMultiHandle` instance now; previously, a `resource` was expected. |

## 参见

`curl_multi_init()`
