---
id: "zh-php-function-function-get-headers"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "get_headers"
title: "取得服务器响应 HTTP 请求所发送的所有标头"
signature: "array|false get_headers(string $url, bool $associative = false, resource|null $context = null)"
module: "url"
source_url: "https://www.php.net/manual/zh/function.get-headers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得服务器响应 HTTP 请求所发送的所有标头

## 说明

```php
array|false get_headers(string $url, bool $associative = false, resource|null $context = null)
```

`get_headers()` 返回一个数组，包含有服务器响应一个 HTTP 请求所发送的标头。

## 参数

- **`$url`** — 目标 URL。
- **`$associative`** — 如果将可选的 `$associative` 参数设为 true，则 `get_headers()` 会解析相应的信息并设定数组的键名。
- **`$context`** — 使用 `stream_context_create()` 创建的有效上下文资源，`null` 使用默认上下文。

## 返回值

返回包含有服务器响应一个 HTTP 请求所发送标头的索引或关联数组，如果失败则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$associative` 从 `int` 更改为 `bool`。 |
| 7.1.0 | 新增 `$context` 参数。 |

## 示例

**`get_headers()` 例子**

```php


<?php
$url = 'http://www.example.com';

print_r(get_headers($url));

print_r(get_headers($url, true));
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [0] => HTTP/1.1 200 OK
    [1] => Date: Sat, 29 May 2004 12:28:13 GMT
    [2] => Server: Apache/1.3.27 (Unix)  (Red-Hat/Linux)
    [3] => Last-Modified: Wed, 08 Jan 2003 23:11:55 GMT
    [4] => ETag: "3f80f-1b6-3e1cb03b"
    [5] => Accept-Ranges: bytes
    [6] => Content-Length: 438
    [7] => Connection: close
    [8] => Content-Type: text/html
)

Array
(
    [0] => HTTP/1.1 200 OK
    [Date] => Sat, 29 May 2004 12:28:14 GMT
    [Server] => Apache/1.3.27 (Unix)  (Red-Hat/Linux)
    [Last-Modified] => Wed, 08 Jan 2003 23:11:55 GMT
    [ETag] => "3f80f-1b6-3e1cb03b"
    [Accept-Ranges] => bytes
    [Content-Length] => 438
    [Connection] => close
    [Content-Type] => text/html
)

    
```

**`get_headers()` 使用 HEAD 示例**

```php


<?php
// 默认 get_headers 使用 GET 请求获取 header。如果想要发送
// HEAD 请求，可以通过 stream context 进行 HEAD 请求：
$context = stream_context_create(
    [
        'http' => array(
            'method' => 'HEAD'
        )
    ]
);
$headers = get_headers('http://example.com', false, $context);
?>

    
```

## 参见

`apache_request_headers()`
