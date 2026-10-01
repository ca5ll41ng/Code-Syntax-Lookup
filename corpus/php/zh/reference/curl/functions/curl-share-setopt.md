---
id: "zh-php-function-function-curl-share-setopt"
language: "php"
lang: "zh"
category: "function"
name: "curl_share_setopt"
title: "为 cURL 共享句柄设置选项"
signature: "bool curl_share_setopt(CurlShareHandle $share_handle, int $option, mixed $value)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-share-setopt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为 cURL 共享句柄设置选项

## 说明

```php
bool curl_share_setopt(CurlShareHandle $share_handle, int $option, mixed $value)
```

为指定的 cURL 共享句柄设置选项。

## 参数

- **`$share_handle`** — A cURL share handle returned by `curl_share_init()`.
- **`$option`** — `CURLSHOPT_{*}` 常量之一。
- **`$value`** — `CURL_LOCK_DATA_{*}` 常量之一。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

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
?>

    
```
