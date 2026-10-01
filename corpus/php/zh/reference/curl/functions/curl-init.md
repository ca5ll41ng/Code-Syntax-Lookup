---
id: "zh-php-function-function-curl-init"
language: "php"
lang: "zh"
category: "function"
name: "curl_init"
title: "初始化 cURL 会话"
signature: "CurlHandle|false curl_init(string|null $url = null)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-init.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 初始化 cURL 会话

## 说明

```php
CurlHandle|false curl_init(string|null $url = null)
```

初始化新会话，返回 cURL 句柄。

## 参数

- **`$url`** — 如果提供了该参数，`CURLOPT_URL` 选项将会被设置成这个值。也可以使用 `curl_setopt()` 函数手动设置这个值。
  > 如果设置了 open_basedir，`file` 协议会被 cURL 禁用。



## 返回值

成功时返回 cURL 句柄，错误时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此函数成功时现在返回 `CurlHandle` 实例；之前返回 `resource`。 |
| 8.0.0 | `$url` 现在可为 null。 |

## 示例

**初始化新 cURL 会话并获取网页**

```php


<?php

// 初始化新 cURL 会话
$ch = curl_init();

// 设置 URL 和相应的选项
curl_setopt($ch, CURLOPT_URL, "http://www.example.com/");
curl_setopt($ch, CURLOPT_HEADER, 0);

// 抓取 URL 并把它传递给浏览器
curl_exec($ch);

?>

    
```

## 参见

`curl_multi_init()`
