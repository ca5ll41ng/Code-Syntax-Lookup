---
id: "zh-php-function-function-curl-unescape"
language: "php"
lang: "zh"
category: "function"
name: "curl_unescape"
title: "解码指定 URL 编码的字符串"
signature: "string|false curl_unescape(CurlHandle $handle, string $string)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-unescape.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解码指定 URL 编码的字符串

## 说明

```php
string|false curl_unescape(CurlHandle $handle, string $string)
```

该函数解码指定 URL 编码的字符串。

## 参数

- **`$handle`** — 由 `curl_init()` 返回的 cURL 句柄。
- **`$string`** — 需要解码的 URL 编码字符串。

## 返回值

返回解码后的字符串 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$handle` 现在接受 `CurlHandle` 实例；之前接受 `resource`。 |

## 示例

**`curl_escape()` 示例**

```php


<?php
// 创建 curl 句柄
$ch = curl_init('http://example.com/redirect.php');

// 发送 HTTP 请求并且遵循重定向
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_exec($ch);

// 获取最后的有效 URL
$effective_url = curl_getinfo($ch, CURLINFO_EFFECTIVE_URL);
// 结果： "http://example.com/show_location.php?loc=M%C3%BCnchen"

// 解码这个 URL
$effective_url_decoded = curl_unescape($ch, $effective_url);
// "http://example.com/show_location.php?loc=München"
?>

    
```

## 注释

> `curl_unescape()` 不会将加号 (+) 解码成空格。而 `urldecode()` 会。

## 参见

`curl_escape()` `urlencode()` `urldecode()` `rawurlencode()` `rawurldecode()`
