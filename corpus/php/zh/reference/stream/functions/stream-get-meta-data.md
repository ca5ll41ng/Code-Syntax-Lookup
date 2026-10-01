---
id: "zh-php-function-function-stream-get-meta-data"
language: "php"
lang: "zh"
category: "function"
name: "stream_get_meta_data"
title: "从流或文件指针中获取 header/meta 数据"
signature: "array stream_get_meta_data(resource $stream)"
module: "stream"
source_url: "https://www.php.net/manual/zh/function.stream-get-meta-data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从流或文件指针中获取 header/meta 数据

## 说明

```php
array stream_get_meta_data(resource $stream)
```

返回现有 `$stream` 的有关信息。

## 参数

- **`$stream`** — 流可以是通过 `fopen()`、`fsockopen()`、 `pfsockopen()`、`stream_socket_client()` 创建的任何流。

## 返回值

返回的数组包含以下元素：

- `timed_out`（bool）——如果流在最后调用 `fread()` 或 `fgets()` 时等待超时，则为 `true`。
- `blocked`（bool）——如果流是堵塞 IO 模式，则为 `true`。参见 `stream_set_blocking()`。
- `eof`（bool）——如果流已经到达文件结尾（end-of-file），则为 `true`。 注意套接字流即使 `unread_bytes` 不为零也可以为 `true`。确定是否还可以读取更多数据，使用 `feof()` 而不是读取此值。
- `unread_bytes`（int）——当前在 PHP 内部缓冲区的字节数。 > 不要在脚本中使用此值。
- `stream_type`（string）——描述了流底层实现的标记。
- `wrapper_type`（string）——描述了在流之上的协议封装实现的标记。更多关于封装协议的信息见 `wrappers`。
- `wrapper_data`（mixed）——当前流附加的封装协议数据。更多封装协议及其数据的信息见 `wrappers`。
- `mode`（string）——对当前流所要求的访问类型（见 fopen() 参考中的表格 1）。
- `seekable`（bool）——是否可以在当前流中定位。
- `uri`（string）——与当前流关联的 URI 或文件名。
- `crypto`（array）——当前流的 TLS 连接元数据。（注意：仅在资源流使用 TLS 时提供。）

## 示例

**`stream_get_meta_data()` 示例，`fopen()` 和 http 一起使用**

```php


<?php
$url = 'http://www.example.com/';

if (!$fp = fopen($url, 'r')) {
    trigger_error("Unable to open URL ($url)", E_USER_ERROR);
}

$meta = stream_get_meta_data($fp);

var_dump($meta);

fclose($fp);
?>

    
```

以上示例的输出类似于：

```text


array(10) {
  'timed_out' =>
  bool(false)
  'blocked' =>
  bool(true)
  'eof' =>
  bool(false)
  'wrapper_data' =>
  array(13) {
    [0] =>
    string(15) "HTTP/1.1 200 OK"
    [1] =>
    string(11) "Age: 244629"
    [2] =>
    string(29) "Cache-Control: max-age=604800"
    [3] =>
    string(38) "Content-Type: text/html; charset=UTF-8"
    [4] =>
    string(35) "Date: Sat, 20 Nov 2021 18:17:57 GMT"
    [5] =>
    string(24) "Etag: "3147526947+ident""
    [6] =>
    string(38) "Expires: Sat, 27 Nov 2021 18:17:57 GMT"
    [7] =>
    string(44) "Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT"
    [8] =>
    string(22) "Server: ECS (chb/0286)"
    [9] =>
    string(21) "Vary: Accept-Encoding"
    [10] =>
    string(12) "X-Cache: HIT"
    [11] =>
    string(20) "Content-Length: 1256"
    [12] =>
    string(17) "Connection: close"
  }
  'wrapper_type' =>
  string(4) "http"
  'stream_type' =>
  string(14) "tcp_socket/ssl"
  'mode' =>
  string(1) "r"
  'unread_bytes' =>
  int(1256)
  'seekable' =>
  bool(false)
  'uri' =>
  string(23) "http://www.example.com/"
}

    
```

**`stream_get_meta_data()` 示例，`stream_socket_client()` 和 https 一起使用**

```php

     
<?php
$streamContext = stream_context_create(
    [
        'ssl' => [
            'capture_peer_cert' => true,
            'capture_peer_cert_chain' => true,
            'disable_compression' => true,
        ],
    ]
);

$client = stream_socket_client(
    'ssl://www.example.com:443',
    $errorNumber,
    $errorDescription,
    40,
    STREAM_CLIENT_CONNECT,
    $streamContext
);


$meta = stream_get_meta_data($client);

var_dump($meta);
?>

    
```

以上示例的输出类似于：

```text

     
array(8) {
  'crypto' =>
  array(4) {
    'protocol' =>
    string(7) "TLSv1.3"
    'cipher_name' =>
    string(22) "TLS_AES_256_GCM_SHA384"
    'cipher_bits' =>
    int(256)
    'cipher_version' =>
    string(7) "TLSv1.3"
  }
  'timed_out' =>
  bool(false)
  'blocked' =>
  bool(true)
  'eof' =>
  bool(false)
  'stream_type' =>
  string(14) "tcp_socket/ssl"
  'mode' =>
  string(2) "r+"
  'unread_bytes' =>
  int(0)
  'seekable' =>
  bool(false)
}

    
```

## 注释

> 本函数对通过 Socket 扩展创建的套接字无效。

## 参见

`get_headers()` $http_response_header
