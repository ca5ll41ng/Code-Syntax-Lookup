---
id: "zh-php-function-function-curl-escape"
language: "php"
lang: "zh"
category: "function"
name: "curl_escape"
title: "使用 URL 编码指定字符串"
signature: "string|false curl_escape(CurlHandle $handle, string $string)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-escape.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用 URL 编码指定字符串

## 说明

```php
string|false curl_escape(CurlHandle $handle, string $string)
```

该函数使用 URL 根据 [RFC 3986](3986) 编码给定的字符串。

## 参数

- **`$handle`** — 由 `curl_init()` 返回的 cURL 句柄。
- **`$string`** — 需要编码的字符串。

## 返回值

返回编码后的字符串 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$handle` 现在接受 `CurlHandle` 实例；之前接受 `resource`。 |

## 示例

**`curl_escape()` 示例**

```php


<?php

// 创建 curl 句柄
$ch = curl_init();

// 把编码后的字符串当做 GET 参数
$location = curl_escape($ch, 'Hofbräuhaus / München');
// 结果： Hofbr%C3%A4uhaus%20%2F%20M%C3%BCnchen

// 用编码好的字符串组装 URL
$url = "http://example.com/add_location.php?location={$location}";
// 结果：http://example.com/add_location.php?location=Hofbr%C3%A4uhaus%20%2F%20M%C3%BCnchen

// 设置选项并发送 HTTP 请求
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_exec($ch);

?>

    
```

## 参见

`curl_unescape()` `urlencode()` `rawurlencode()` [RFC 3986](3986)
