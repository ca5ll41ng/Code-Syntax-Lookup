---
id: "zh-php-function-function-apache-response-headers"
language: "php"
lang: "zh"
category: "function"
name: "apache_response_headers"
title: "获得全部 HTTP 响应 header"
signature: "array apache_response_headers()"
module: "apache"
source_url: "https://www.php.net/manual/zh/function.apache-response-headers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获得全部 HTTP 响应 header

## 说明

```php
array apache_response_headers()
```

获得全部 HTTP 响应 header。可在 Apache、FastCGI、CLI、FPM 模式下运行。

## 参数

此函数没有参数。

## 返回值

成功时返回全部 Apache 响应 header 的数组。

## 示例

**`apache_response_headers()` 示例**

```php


<?php
print_r(apache_response_headers());
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [Accept-Ranges] => bytes
    [X-Powered-By] => PHP/4.3.8
)

    
```

## 参见

`apache_request_headers()` `headers_sent()` `headers_list()`
