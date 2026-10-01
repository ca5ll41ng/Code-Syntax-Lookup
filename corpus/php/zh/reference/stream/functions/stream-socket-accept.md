---
id: "zh-php-function-function-stream-socket-accept"
language: "php"
lang: "zh"
category: "function"
name: "stream_socket_accept"
title: "接受由 `stream_socket_server()` 创建的套接字连接"
signature: "resource|false stream_socket_accept(resource $socket, float|null $timeout = null, string $peer_name = null)"
module: "stream"
source_url: "https://www.php.net/manual/zh/function.stream-socket-accept.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 接受由 `stream_socket_server()` 创建的套接字连接

## 说明

```php
resource|false stream_socket_accept(resource $socket, float|null $timeout = null, string $peer_name = null)
```

接受由 `stream_socket_server()` 创建的套接字连接。

## 参数

 {{{ 

- **`$socket`** — 需要接受的服务器创建的套接字连接。
- **`$timeout`** — 覆盖默认的套接字接受的超时时限。输入的时间需以秒为单位。默认情况下，使用 default_socket_timeout 作为超时时限。
- **`$peer_name`** — 如果已选的传输器存在且有效的已连接客户端，则将该值设置为已连接客户端名称（地址）。
  > 也可以之后通过 `stream_socket_get_name()` 来确定。



 }}} 

## 返回值

 {{{ 

返回接受套接之后的资源流 或者在失败时返回 `false`。

 }}} 

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$timeout` 可以为 null。 |

## 注释

 {{{ 

> 该函数不能被用于 UDP 套接字。可以使用 `stream_socket_recvfrom()` 和 `stream_socket_sendto()` 来取而代之。

 }}} 

## 参见

 {{{ 

`stream_socket_server()` `stream_socket_get_name()` `stream_set_blocking()` `stream_set_timeout()` `fgets()` `fgetss()` `fwrite()` `fclose()` `feof()` `ref.curl`

 }}}
