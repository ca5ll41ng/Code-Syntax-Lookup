---
id: "zh-php-function-function-curl-version"
language: "php"
lang: "zh"
category: "function"
name: "curl_version"
title: "获取 cURL 版本信息"
signature: "array|false curl_version()"
module: "curl"
source_url: "https://www.php.net/manual/zh/function.curl-version.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取 cURL 版本信息

## 说明

```php
array|false curl_version()
```

返回关于 cURL 版本的信息。

## 参数

此函数没有参数。

## 返回值

返回关联数组，包含如下元素：

| 键 | 值描述 |
| --- | --- |
| version_number | cURL 24 位版本号 |
| version | cURL 版本号，字符串形式 |
| ssl_version_number | OpenSSL 24 位版本号 |
| ssl_version | OpenSSL 版本号，字符串形式 |
| libz_version | zlib 版本号，字符串形式 |
| host | 关于编译cURL主机的信息 |
| age |  |
| features | 一个 `CURL_VERSION_{*}` 常量的位掩码 |
| protocols | 数组，包含 cURL 支持的协议名称 |
| feature_list | 所有已知 cURL 功能的关联数组，以及它们是否支持（`true`）或不支持（`false`） |

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 新增 `features_list`。 |
| 8.0.0 | 移除可选的 `$age` 参数。 |
| 7.4.0 | 弃用可选的 `$age` 参数，如果传递值，则忽略。 |

## 示例

**`curl_version()` 示例**

这个示例将会检查当前 cURL 版本使用 `curl_version()` 返回的“features”位掩码中哪些特性是可用的。

```php


<?php
// 获取cURL版本数组
$version = curl_version();

// 在cURL编译版本中使用位域来检查某些特性
$bitfields = Array(
            'CURL_VERSION_IPV6', 
            'CURL_VERSION_KERBEROS4', 
            'CURL_VERSION_SSL', 
            'CURL_VERSION_LIBZ'
            );


foreach($bitfields as $feature)
{
    echo $feature . ($version['features'] & constant($feature) ? ' matches' : ' does not match');
    echo PHP_EOL;
}
?>

    
```
