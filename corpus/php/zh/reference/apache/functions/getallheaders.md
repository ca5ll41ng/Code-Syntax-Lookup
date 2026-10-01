---
id: "zh-php-function-function-getallheaders"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "getallheaders"
title: "获取全部 HTTP 请求 header"
signature: "array getallheaders()"
module: "apache"
source_url: "https://www.php.net/manual/zh/function.getallheaders.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取全部 HTTP 请求 header

## 说明

```php
array getallheaders()
```

获取当前请求的所有请求头信息。

此函数是 `apache_request_headers()` 的别名。请阅读 `apache_request_headers()` 文档获得更多信息。

## 参数

此函数没有参数。

## 返回值

当前请求中所有 HTTP header 的关联数组。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.3.0 | 该函数可以在 FPM SAPI 中使用。 |

## 示例

**`getallheaders()` 示例**

```php


<?php

foreach (getallheaders() as $name => $value) {
    echo "$name: $value\n";
}

?>

    
```

## 参见

`apache_response_headers()`
