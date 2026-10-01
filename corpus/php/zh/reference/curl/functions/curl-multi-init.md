---
id: "zh-php-function-function-curl-multi-init"
language: "php"
lang: "zh"
category: "function"
name: "curl_multi_init"
title: "返回新 cURL 批处理句柄"
signature: "CurlMultiHandle curl_multi_init()"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-multi-init.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回新 cURL 批处理句柄

## 说明

```php
CurlMultiHandle curl_multi_init()
```

允许异步处理多个 cURL 句柄。

## 参数

此函数没有参数。

## 返回值

返回 cURL 批处理句柄。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 成功时，此函数返回 `CurlMultiHandle` 实例；之前返回 `resource`。 |

## 参见

`curl_init()` `curl_multi_close()`
