---
id: "zh-php-guide-yar-protocol"
language: "php"
lang: "zh"
category: "guide"
name: "yar.protocol"
title: "Yar 协议"
module: "yar"
source_url: "https://www.php.net/manual/zh/yar.protocol.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Yar 协议

Yar 不依赖 schema 或 IDL 文件：网络上传输的一切都是纯字节。 任何能够读写字节的语言都可以与 Yar 服务通信，完全不需要安装任何框架—— 只需构造一个固定大小的二进制请求头和一个序列化后的请求体， 把它们发送到服务 URI，再解析响应即可。

一条消息由一个固定大小为 82 字节的头部和紧随其后的消息体组成。 头部的布局与下面的 C 结构体完全一致，紧凑排列、没有填充字节， 并按声明顺序逐个字段写入网络：

```c


typedef struct _yar_header {
    uint32_t       id;            /* transaction id */
    uint16_t       version;       /* protocol version, currently always 0 */
    uint32_t       magic_num;     /* must be 0x80DFEC60 */
    uint32_t       reserved;
    unsigned char  provider[32];  /* request from whom (authentication) */
    unsigned char  token[32];     /* request token (authentication) */
    uint32_t       body_len;      /* length of the whole body, including
                                     the packager identifier */
} __attribute__ ((packed)) yar_header_t;

 
```

其中 `id`、`magic_num`、`reserved` 和 `body_len` 字段以网络字节序（大端）存储； 其余字段是原始字节。

消息体以一个 8 字节的打包器标识符开头——`PHP`、`JSON` 或 `MSGPACK`，不足部分以零填充——用于告知接收方其余内容的编码方式， 其后是序列化内容本身。

- 请求体解码后是一个数组，包含以下键：`i`（事务 id）、`m` （被调用的方法）和 `p`（参数列表）。
- 响应体解码后是一个数组，包含以下键：`i`（事务 id）、`s` （状态，取值为 `YAR_ERR_*` 常量之一）、`r`（返回值）、 `o`（服务方法产生的任何输出）以及 `e` （调用失败时的错误或异常）。

通过 HTTP 传输时，消息作为 POST 请求的正文发送，响应作为回复的正文到达； 通过 TCP 或 Unix socket 传输时，消息直接写入流中。

**在不安装扩展的情况下调用 Yar 服务**

下面这个独立脚本仅使用标准 socket，就为 `php` 打包器构造了一个有效的 Yar 请求，将其发送到服务 URI， 并输出解码后的响应。用 示例中的 `Operator` 服务运行该脚本，输出为 `int(3)`。

```php


<?php

$uri = "http://api.example.com/operator.php";

/* 1. the body: packager identifier + serialized request */
$serialized = serialize(array("i" => 1, "m" => "add", "p" => array(1, 2)));
$body = str_pad("PHP", 8, "\0") . $serialized;

/* 2. the header: 82 bytes, multi-byte integers in network byte order */
$header = pack("N", 1)                    /* id */
        . pack("v", 0)                    /* version */
        . pack("N", 0x80DFEC60)           /* magic number */
        . pack("N", 0)                    /* reserved */
        . str_pad("", 32, "\0")           /* provider */
        . str_pad("", 32, "\0")           /* token */
        . pack("N", strlen($body));       /* body length */

/* 3. send it as the body of a POST request */
$stream = stream_context_create(array("http" => array(
    "method"  => "POST",
    "header"  => "Content-Type: application/octet-stream\r\n",
    "content" => $header . $body,
)));
$reply = file_get_contents($uri, false, $stream);

/* 4. parse the reply: 82-byte header, then the response body */
$response = unserialize(substr($reply, 82 + 8));
var_dump($response["r"]);
?>

  
```

一个更完整的纯 PHP 客户端实现位于 [Yar 源码仓库](laruence/yar)的 `tools/` 目录中，它还会解码响应头，并支持并发调用。
