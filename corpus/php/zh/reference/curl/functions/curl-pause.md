---
id: "zh-php-function-function-curl-pause"
language: "php"
lang: "zh"
category: "function"
name: "curl_pause"
title: "暂停和取消暂停连接"
signature: "int curl_pause(CurlHandle $handle, int $flags)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-pause.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 暂停和取消暂停连接

## 说明

```php
int curl_pause(CurlHandle $handle, int $flags)
```

暂停或取消暂停 cURL 会话。 一个会话可以在传输过程中、在读、写或两个方向的传输过程中暂停，通过从使用 `curl_setopt()` 注册的回调函数中调用此函数来实现。

## 参数

- **`$handle`** — 由 `curl_init()` 返回的 cURL 句柄。
- **`$flags`** — `CURLPAUSE_{*}` 常量之一。

## 返回值

返回一个错误代码 (如果没有错误则返回 `CURLE_OK` 常量)。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$handle` 现在接受 `CurlHandle` 实例；之前接受 `resource`。 |
