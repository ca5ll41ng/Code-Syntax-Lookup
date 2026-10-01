---
id: "zh-php-function-function-curl-multi-getcontent"
language: "php"
lang: "zh"
category: "function"
name: "curl_multi_getcontent"
title: "如果设置了 `CURLOPT_RETURNTRANSFER`，则返回 cURL 句柄的内容"
signature: "string|null curl_multi_getcontent(CurlHandle $handle)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-multi-getcontent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 如果设置了 `CURLOPT_RETURNTRANSFER`，则返回 cURL 句柄的内容

## 说明

```php
string|null curl_multi_getcontent(CurlHandle $handle)
```

如果 `CURLOPT_RETURNTRANSFER` 是为指定句柄设置的选项，则此函数将会以字符串的形式返回 cURL 句柄的内容。

## 参数

- **`$handle`** — 由 `curl_init()` 返回的 cURL 句柄。

## 返回值

如果设置了 `CURLOPT_RETURNTRANSFER`，则返回 cURL 句柄的内容，不设置的话返回 `null`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$handle` 现在接受 `CurlHandle` 实例；之前接受 `resource`。 |

## 参见

`curl_multi_init()`
