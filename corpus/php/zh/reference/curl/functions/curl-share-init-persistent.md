---
id: "zh-php-function-function-curl-share-init-persistent"
language: "php"
lang: "zh"
category: "function"
name: "curl_share_init_persistent"
title: "初始化 *持久* cURL 共享句柄"
signature: "CurlSharePersistentHandle curl_share_init_persistent(array $share_options)"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-share-init-persistent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 初始化 *持久* cURL 共享句柄

## 说明

```php
CurlSharePersistentHandle curl_share_init_persistent(array $share_options)
```

使用指定的共享选项初始化*持久* cURL 共享句柄。与 `curl_share_init()` 不同，此函数创建的句柄不会在 PHP 请求结束时销毁。如果找到具有相同 `$share_options` 的持久共享句柄，则会重用该句柄。

## 参数

- **`$share_options`** — 非空的 `CURL_LOCK_DATA_{*}` 常量数组。
  > 不允许使用 `CURL_LOCK_DATA_COOKIE`，如果指定，此函数将抛出 ValueError。在 PHP 请求之间共享 cookies 可能导致用户之间的敏感 cookies 意外混淆。



## 返回值

返回 `CurlSharePersistentHandle`。

## 错误／异常

- 如果 `$share_options` 为空，此函数抛出 ValueError。
- 如果 `$share_options` 包含与 `CURL_LOCK_DATA_{*}` 不匹配的值，此函数将抛出 `ValueError`。
- 如果 `$share_options` 包含 `CURL_LOCK_DATA_COOKIE`，此函数将抛出 ValueError。
- 如果 `$share_options` 包含非整数值，此函数将抛出 TypeError。

## 示例

**`curl_share_init_persistent()` 示例**

此示例将创建持久 cURL 共享句柄，并演示它们之间共享连接的功能。如果在长生命周期的 PHP SAPI 中执行，`$sh` 将在 SAPI 请求之间保持存在。

```php

    
<?php

// 创建或获取持久 cURL 共享句柄，设置为共享 DNS 查找和连接
$sh = curl_share_init_persistent([CURL_LOCK_DATA_DNS, CURL_LOCK_DATA_CONNECT]);

// 初始化第一个 cURL 句柄并为其分配共享句柄
$ch1 = curl_init("http://example.com/");
curl_setopt($ch1, CURLOPT_SHARE, $sh);

// 执行第一个 cURL 句柄。此操作可能会重用来自先前 SAPI 请求的连接
curl_exec($ch1);

// 初始化第二个 cURL 句柄并为其分配共享句柄
$ch2 = curl_init("http://example.com/");
curl_setopt($ch2, CURLOPT_SHARE, $sh);

// 执行第二个 cURL 句柄。此操作将重用来自 $ch1 的连接
curl_exec($ch2);

?>

    
   
```

## 参见

 `curl_setopt()` `curl_share_init()`
