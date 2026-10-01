---
id: "zh-php-function-function-apache-lookup-uri"
language: "php"
lang: "zh"
category: "function"
name: "apache_lookup_uri"
title: "对指定的 URI 执行部分请求并返回所有有关信息"
signature: "object|false apache_lookup_uri(string $filename)"
module: "apache"
source_url: "https://www.php.net/manual/zh/function.apache-lookup-uri.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 对指定的 URI 执行部分请求并返回所有有关信息

## 说明

```php
object|false apache_lookup_uri(string $filename)
```

本函数对一个 URL 执行部分请求。取得所有有关给定资源的重要信息后就停手。

仅在 PHP 以 Apache 模块运行时，才支持此函数。

## 参数

- **`$filename`** — 被请求的文件名（URI）。

## 返回值

一个有关 URI 信息的 `object`。此 `object` 的属性有：

status the_request status_line method content_type handler uri filename path_info args boundary no_cache no_local_copy allowed send_bodyct bytes_sent byterange clength unparsed_uri mtime request_time

失败时返回 `false`。

## 示例

**`apache_lookup_uri()` 例子**

```php


<?php
$info = apache_lookup_uri('index.php?var=value');
print_r($info);

if (file_exists($info->filename)) {
    echo 'file exists!';
}
?>

    
```

以上示例的输出类似于：

```text


stdClass Object
(
    [status] => 200
    [the_request] => GET /dir/file.php HTTP/1.1
    [method] => GET
    [mtime] => 0
    [clength] => 0
    [chunked] => 0
    [content_type] => application/x-httpd-php
    [no_cache] => 0
    [no_local_copy] => 1
    [unparsed_uri] => /dir/index.php?var=value
    [uri] => /dir/index.php
    [filename] => /home/htdocs/dir/index.php
    [args] => var=value
    [allowed] => 0
    [sent_bodyct] => 0
    [bytes_sent] => 0
    [request_time] => 1074282764
)
file exists!

    
```
