---
id: "zh-php-function-context-http"
language: "php"
lang: "zh"
category: "function"
name: "HTTP context 选项"
title: "HTTP context 的选项列表"
module: "language"
source_url: "https://www.php.net/manual/zh/context.http.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# HTTP context 的选项列表

## 说明

提供给 `http://` 和 `https://` 传输协议的 context 选项。 transports.

## 可选项

 {{{ 

- **`$method` `string`** — 远程服务器支持的 `GET`，`POST` 或其它 HTTP 方法。 — 默认值是 `GET`。
- **`$header` `array` 或 `string`** — 请求期间发送的附加 header 。此选项中的值将覆盖其他值 （如 `User-agent:`， `Host:` 和 `Authentication:`)， 即使在执行 `Location:` 重定向时也是如此。 所以，如果启用了 `$follow_location` 就不建议设置 `Host:` header。 — 字符串值是以 `\r\n` 分隔的 `Key: value`，例如 `"Content-Type: application/json\r\nConnection: close"`。数组值应为 `Key: value` 的列表，例如 `["Content-Type: application/json", "Connection: close"]`。
- **`$user_agent` `string`** — 要发送的 header `User-Agent:` 的值。如果在上面的 `header` context 选项中没有指定 user-agent，此值将被使用。 — 默认使用 php.ini 中设置的 user_agent。
- **`$content` `string`** — 在 header 后面要发送的额外数据。通常使用POST或PUT请求。
- **`$proxy` `string`** — URI 指定的代理服务器的地址（例如： `tcp://proxy.example.com:5100`）。
- **`$request_fulluri` `bool`** — 当设置为 `true` 时，在构建请求时将使用整个 URI（例如： `GET http://www.example.com/path/to/file.html HTTP/1.0`）。 虽然这是一个非标准的请求格式，但某些代理服务器需要它。 — 默认值是 `false`.
- **`$follow_location` `int`** — 跟随 `Location` header 的重定向。设置为 `0` 以禁用。 — 默认值是 `1`。
- **`$max_redirects` `int`** — 跟随重定向的最大次数。值为 `1` 或更少则意味不跟随重定向。 — 默认值是 `20`。
- **`$protocol_version` `float`** — HTTP 协议版本。 — PHP 8.0.0 起默认值是 `1.1`。在此之前默认值是 `1.0`。
- **`$timeout` `float`** — 读取超时时间，单位为秒（s），用 `float` 指定（例如：`10.5`）。 — 默认使用 php.ini 中设置的 default_socket_timeout。
- **`$ignore_errors` `bool`** — 即使是故障状态码依然获取内容。 — 默认值为 `false`.

 }}} 

## 示例

 {{{ 

**获取一个页面并发送 POST 数据**

 {{{ 

```php


<?php

$postdata = http_build_query(
    [
        'var1' => 'some content',
        'var2' => 'doh',
    ]
);

$opts = [
    'http' => [
        'method'  => 'POST',
        'header'  => 'Content-type: application/x-www-form-urlencoded',
        'content' => $postdata,
    ]
];

$context = stream_context_create($opts);

$result = file_get_contents('http://example.com/submit.php', false, $context);

?>

    
```

**忽略重定向并获取 header 和内容**

 {{{ 

```php


<?php

$url = "http://www.example.org/header.php";

$opts = [
    'http' => [
        'method'        => 'GET',
        'max_redirects' => '0',
        'ignore_errors' => '1',
    ]
];

$context = stream_context_create($opts);
$stream = fopen($url, 'r', false, $context);

// header 信息和 stream 的元数据一样
var_dump(stream_get_meta_data($stream));

// $url 的实际数据
var_dump(stream_get_contents($stream));
fclose($stream);
?>

    
```

 }}} 

## 注释

> 底层 socket stream 上下文选项
>
> 底层传输可能支持额外的上下文选项。对于 `http://` 流，请参阅 `tcp://` 传输的上下文选项。对于 `https://` 流，请参阅 `ssl://` 传输的上下文选项。

> HTTP 状态行
>
> 当此流包装器跟随重定向时，`stream_get_meta_data()` 返回的 `wrapper_data` 中索引 `0` 处不一定包含实际适用于内容数据的 HTTP 状态行。
>
> ```text
>
>
> array (
>   'wrapper_data' =>
>   array (
>     0 => 'HTTP/1.0 301 Moved Permanently',
>     1 => 'Cache-Control: no-cache',
>     2 => 'Connection: close',
>     3 => 'Location: http://example.com/foo.jpg',
>     4 => 'HTTP/1.1 200 OK',
>     ...
>
>    
> ```
>
> 第一个请求返回 `301` （永久重定向）， 因此 stream 包装器自动跟随重定向到获得 `200` 响应（index = `4`）。

## 参见

`wrappers.http` `context.socket` `context.ssl`
