---
id: "zh-php-function-function-curl-share-init"
language: "php"
lang: "zh"
category: "function"
name: "curl_share_init"
title: "初始化 cURL 共享句柄"
signature: "CurlShareHandle curl_share_init()"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-share-init.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 初始化 cURL 共享句柄

## 说明

```php
CurlShareHandle curl_share_init()
```

允许在 cURL 句柄之间共享数据。

## 参数

此函数没有参数。

## 返回值

返回 cURL 共享句柄。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此函数现在返回 `CurlShareHandle` 实例，之前返回 `resource`。 |

## 示例

**`curl_share_init()` 示例**

以下示例将会创建 cURL 共享句柄，并且往其中添加两个 cURL 句柄，最后用共享的 cookie 数据运行它们。

```php


<?php
// 创建 cURL 共享句柄，并设置共享 cookie 数据
$sh = curl_share_init();
curl_share_setopt($sh, CURLSHOPT_SHARE, CURL_LOCK_DATA_COOKIE);

// 初始化第一个 cURL 句柄，并将它设置到共享句柄
$ch1 = curl_init("http://example.com/");
curl_setopt($ch1, CURLOPT_SHARE, $sh);

// 执行第一个 cURL 句柄
curl_exec($ch1);

// 初始化第二个 cURL 句柄，并将它设置到共享句柄
$ch2 = curl_init("http://php.net/");
curl_setopt($ch2, CURLOPT_SHARE, $sh);

// 执行第二个 cURL 句柄
//  all cookies from $ch1 handle are shared with $ch2 handle
curl_exec($ch2);
?>

    
```

## 参见

`curl_share_setopt()` `curl_share_init_persistent()`
