---
id: "zh-php-function-function-curl-close"
language: "php"
lang: "zh"
category: "function"
name: "curl_close"
title: "关闭 cURL 会话"
signature: "#[\\Deprecated] void curl_close(CurlHandle $handle)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭 cURL 会话

## 说明

```php
#[\Deprecated] void curl_close(CurlHandle $handle)
```

> 此函数无效。在 PHP 8.0.0 之前，用于关闭资源。

关闭 cURL 会话并且释放所有资源。也会删除 cURL 句柄 `$handle`。

## 参数

- **`$handle`** — 由 `curl_init()` 返回的 cURL 句柄。

## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.5.0 | 此函数已被弃用。 |
| 8.0.0 | 此函数现在是 NOP（空操作）。 |
| 8.0.0 | `$handle` 现在接受 `CurlHandle` 实例；之前接受 `resource`。 |

## 示例

**初始化新 cURL 会话并获取网页**

```php


<?php
// 创建新 cURL 资源
$ch = curl_init();

// 设置 URL 和相应的选项
curl_setopt($ch, CURLOPT_URL, "http://www.example.com/");
curl_setopt($ch, CURLOPT_HEADER, 0);

// 抓取 URL 并把它传递给浏览器
curl_exec($ch);

// 关闭 cURL 资源，并且释放系统资源
curl_close($ch);
?>

    
```

## 参见

`curl_init()` `curl_multi_close()`
