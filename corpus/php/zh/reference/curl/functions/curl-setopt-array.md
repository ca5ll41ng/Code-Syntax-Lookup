---
id: "zh-php-function-function-curl-setopt-array"
language: "php"
lang: "zh"
category: "function"
name: "curl_setopt_array"
title: "为 cURL 传输会话批量设置选项"
signature: "bool curl_setopt_array(CurlHandle $handle, array $options)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-setopt-array.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 为 cURL 传输会话批量设置选项

## 说明

```php
bool curl_setopt_array(CurlHandle $handle, array $options)
```

为 cURL 传输会话批量设置选项。这个函数对于需要设置大量的 cURL 选项是非常有用的，不需要重复地调用 `curl_setopt()`。

## 参数

- **`$handle`** — 由 `curl_init()` 返回的 cURL 句柄。
- **`$options`** — 一个 `array` 用来确定将被设置的选项及其值。数组的键值必须是有效的 `curl_setopt()` 常量或者是它们对等的整数值。

## 返回值

如果全部的选项都被成功设置，返回 `true`。如果选项不能被成功设置，马上返回 `false`，忽略其后的任何在 `$options` 数组中的选项。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$handle` 现在接受 `CurlHandle` 实例；之前接受 `resource`。 |

## 示例

**初始化新的 cURL 会话并抓取 web 页面**

```php


<?php
// 创建新 cURL 资源
$ch = curl_init();

// 设置 URL 和相应的选项
$options = array(CURLOPT_URL => 'http://www.example.com/',
                 CURLOPT_HEADER => false
                );

curl_setopt_array($ch, $options);

// 抓取 URL 并把它传递给浏览器
curl_exec($ch);
?>

    
```

## 注释

> 就 `curl_setopt()` 来说，传递数组到 `CURLOPT_POST` 将会把数据以 *multipart/form-data* 的方式编码，然而传递 URL-encoded 字符串将会以 *application/x-www-form-urlencoded* 的方式对数据进行编码。

## 参见

`curl_setopt()`
