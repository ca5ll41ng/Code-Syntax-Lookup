---
id: "zh-php-function-function-apache-request-headers"
language: "php"
lang: "zh"
category: "function"
name: "apache_request_headers"
title: "获取全部 HTTP 请求 header"
signature: "array apache_request_headers()"
module: "apache"
source_url: "https://www.php.net/manual/zh/function.apache-request-headers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取全部 HTTP 请求 header

## 说明

```php
array apache_request_headers()
```

获取当前请求的所有请求 header。可在 Apache、FastCGI、CLI、FPM 模式下运行。

## 参数

此函数没有参数。

## 返回值

当前请求中所有 HTTP header 的关联数组。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.3.0 | 此函数可用于 FPM SAPI 模式。 |

## 示例

**`apache_request_headers()` 示例**

```php


<?php
$headers = apache_request_headers();

foreach ($headers as $header => $value) {
    echo "$header: $value <br />\n";
}
?>

    
```

以上示例的输出类似于：

```text


Accept: */*
Accept-Language: en-us
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0
Host: www.example.com
Connection: Keep-Alive

    
```

## 注释

> 你也可以试图从环境变量中读取普通CGI变量，PHP以Apache模块方式运行时有可能无法获得。使用`phpinfo()`获得可读取的变量列表。 环境变量.

## 参见

`apache_response_headers()`
