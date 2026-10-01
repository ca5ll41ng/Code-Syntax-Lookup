---
id: "zh-php-function-wrappers-http"
language: "php"
lang: "zh"
category: "function"
name: "http://"
aliases: ["https://"]
title: "访问 HTTP(s) 网址"
module: "language"
source_url: "https://www.php.net/manual/zh/wrappers.http.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 访问 HTTP(s) 网址

## 说明

 {{{ 

允许通过 HTTP 对文件/资源进行可读访问。默认使用 HTTP 1.0 GET。 HTTP 请求会附带一个 `Host:` 头，用于兼容基于域名的虚拟主机。 如果在你的 php.ini 文件中或字节流上下文（context）配置了 user_agent 字符串，它也会被包含在请求之中。

数据流允许读取资源的 *body*，而 headers 则储存在了 `$http_response_header` 变量里。

如果需要知道文档资源来自哪个 URL（经过所有重定向的处理后）， 需要处理数据流返回的系列响应报头（response headers）。

The from directive will be used for the `From:` header if set and not overwritten by the `context`.

 }}} 

## 用法

 {{{ 

- `http://example.com`
- `http://example.com/file.php?var1=val1&var2=val2`
- `http://user:password@example.com`
- `https://example.com`
- `https://example.com/file.php?var1=val1&var2=val2`
- `https://user:password@example.com`

 }}} 

## 可选项

 {{{ 

| 属性 | 支持 |
| --- | --- |
| 受 allow_url_fopen 限制 | Yes |
| 允许读取 | Yes |
| 允许写入 | No |
| 允许添加 | No |
| 允许同时读和写 | N/A |
| 支持 `stat()` | No |
| 支持 `unlink()` | No |
| 支持 `rename()` | No |
| 支持 `mkdir()` | No |
| 支持 `rmdir()` | No |

 }}} 

## 示例

 {{{ 

**检测重定向后最终的 URL**

 {{{ 

```php


<?php
$url = 'http://www.example.com/redirecting_page.php';

$fp = fopen($url, 'r');

$meta_data = stream_get_meta_data($fp);
foreach ($meta_data['wrapper_data'] as $response) {

    /* 我们是否被重定向了？ */
    if (strtolower(substr($response, 0, 10)) == 'location: ') {

        /* 更新我们被重定向后的 $url */
        $url = substr($response, 10);
    }

}

?>

   
```

 }}} 

 }}} 

## 注释

 {{{ 

> openssl 扩展启用后才能够支持 HTTPS 协议。

HTTP 连接是只读的；还不支持对一个 HTTP 资源进行写数据或者复制文件。

比如发送 *POST* 和 *PUT* 请求， 可以在 HTTP Contexts 的支持下实现。

 }}} 

## 参见

 {{{ 

 `context.http` `$http_response_header` `stream_get_meta_data()` 

 }}}
