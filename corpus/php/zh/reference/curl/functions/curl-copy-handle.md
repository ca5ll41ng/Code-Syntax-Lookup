---
id: "zh-php-function-function-curl-copy-handle"
language: "php"
lang: "zh"
category: "function"
name: "curl_copy_handle"
title: "复制 cURL 句柄及其所有选项"
signature: "CurlHandle|false curl_copy_handle(CurlHandle $handle)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-copy-handle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 复制 cURL 句柄及其所有选项

## 说明

```php
CurlHandle|false curl_copy_handle(CurlHandle $handle)
```

复制 cURL 句柄并保持相同选项。

## 参数

- **`$handle`** — 由 `curl_init()` 返回的 cURL 句柄。

## 返回值

返回新 cURL 句柄， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$handle` 现在接受 `CurlHandle` 实例；之前接受 `resource`。 |
| 8.0.0 | 现在成功时，此函数返回 `CurlHandle` 实例，之前返回 `resource`。 |

## 示例

**复制 cURL 句柄**

```php


<?php
// 创建新 cURL 资源
$ch = curl_init();

// 设置 URL 和其它相应的选项
curl_setopt($ch, CURLOPT_URL, 'http://www.example.com/');
curl_setopt($ch, CURLOPT_HEADER, 0);

// 复制句柄
$ch2 = curl_copy_handle($ch);

// 抓取 URL（http://www.example.com/）并把它传递给浏览器
curl_exec($ch2);
?>

    
```
