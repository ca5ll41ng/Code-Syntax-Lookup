---
id: "zh-php-function-function-curl-multi-info-read"
language: "php"
lang: "zh"
category: "function"
name: "curl_multi_info_read"
title: "获取当前传输的有关信息"
signature: "array|false curl_multi_info_read(CurlMultiHandle $multi_handle, int $queued_messages = null)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-multi-info-read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取当前传输的有关信息

## 说明

```php
array|false curl_multi_info_read(CurlMultiHandle $multi_handle, int $queued_messages = null)
```

查询多句柄是否有来自个别传输的消息或信息，消息可能包含诸如来自传输的错误代码或者仅是传输已完成之类的信息。

重复调用此函数，每次都会返回新结果，返回 `false` 作为此时没有更多信息可以获取的信号。通过 `$queued_messages` 返回的整数包含当前函数调用后剩余的消息数量。

> 返回的资源指向的数据将无法在调用 `curl_multi_remove_handle()` 后继续存在。

## 参数

- **`$multi_handle`** — 由 `curl_multi_init()` 返回的 cURL 多个句柄。
- **`$queued_messages`** — 仍在队列中的消息数量。

## 返回值

成功时返回信息的关联数组，失败时返回 `false`。

| Key: | Value: |
| --- | --- |
| `msg` | `CURLMSG_DONE` 常量。其他返回值当前不可用。 |
| `result` | `CURLE_{*}` 常量之一。如果一切都好，将会返回 `CURLE_OK`。 |
| `handle` | cURL 资源类型表明它有关的句柄。 |

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$multi_handle` expects a `CurlMultiHandle` instance now; previously, a `resource` was expected. |

## 参见

`curl_multi_init()`
