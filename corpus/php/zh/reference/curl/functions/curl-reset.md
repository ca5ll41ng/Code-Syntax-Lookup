---
id: "zh-php-function-function-curl-reset"
language: "php"
lang: "zh"
category: "function"
name: "curl_reset"
title: "重置一个 libcurl 会话句柄的所有的选项"
signature: "void curl_reset(CurlHandle $handle)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-reset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 重置一个 libcurl 会话句柄的所有的选项

## 说明

```php
void curl_reset(CurlHandle $handle)
```

该函数将给定的 cURL 句柄所有选项重新设置为默认值。

## 参数

- **`$handle`** — 由 `curl_init()` 返回的 cURL 句柄。

## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$handle` 现在接受 `CurlHandle` 实例；之前接受 `resource`。 |

## 示例

**`curl_reset()` 示例**

```php


<?php
// 创建 url 句柄
$ch = curl_init();

// 设置 CURLOPT_USERAGENT 选项
curl_setopt($ch, CURLOPT_USERAGENT, "My test user-agent");

// 重置所有的预先设置的选项
curl_reset($ch);

// 发送 HTTP 请求
curl_setopt($ch, CURLOPT_URL, 'http://example.com/');
curl_exec($ch); // 预先设置的 user-agent 不会被发送，它已经被 curl_reset 重置掉了
?>

    
```

## 注释

> `curl_reset()` 还重置作为 `curl_init()` 参数指定的 URL。

## 参见

`curl_setopt()`
