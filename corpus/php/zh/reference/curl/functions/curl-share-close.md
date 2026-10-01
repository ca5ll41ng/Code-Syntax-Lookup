---
id: "zh-php-function-function-curl-share-close"
language: "php"
lang: "zh"
category: "function"
name: "curl_share_close"
title: "关闭 cURL 共享句柄"
signature: "#[\\Deprecated] void curl_share_close(CurlShareHandle $share_handle)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-share-close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭 cURL 共享句柄

## 说明

```php
#[\Deprecated] void curl_share_close(CurlShareHandle $share_handle)
```

> 此函数无效。在 PHP 8.0.0 之前，用于关闭资源。

关闭 cURL 共享句柄并且释放所有的资源。

## 参数

- **`$share_handle`** — A cURL share handle returned by `curl_share_init()`.

## 返回值

没有返回值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$share_handle` expects a `CurlShareHandle` instance now; previously, a `resource` was expected. |

## 示例

**`curl_share_setopt()` 示例**

以下示例将会创建 cURL 共享句柄，并且往其中添加两个 cURL 句柄，最后共享这两个 cURL 句柄的 cookie 数据运行。

```php


<?php
// Create cURL share handle and set it to share cookie data
$sh = curl_share_init();
curl_share_setopt($sh, CURLSHOPT_SHARE, CURL_LOCK_DATA_COOKIE);

// Initialize the first cURL handle and assign the share handle to it
$ch1 = curl_init("http://example.com/");
curl_setopt($ch1, CURLOPT_SHARE, $sh);

// Execute the first cURL handle
curl_exec($ch1);

// Initialize the second cURL handle and assign the share handle to it
$ch2 = curl_init("http://php.net/");
curl_setopt($ch2, CURLOPT_SHARE, $sh);

// Execute the second cURL handle
//  all cookies from $ch1 handle are shared with $ch2 handle
curl_exec($ch2);

// Close the cURL share handle
curl_share_close($sh);
?>

    
```

## 参见

`curl_share_init()`
