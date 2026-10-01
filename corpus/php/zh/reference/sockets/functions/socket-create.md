---
id: "zh-php-function-function-socket-create"
language: "php"
lang: "zh"
category: "function"
name: "socket_create"
title: "创建一个套接字（通讯节点）"
signature: "Socket|false socket_create(int $domain, int $type, int $protocol)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建一个套接字（通讯节点）

## 说明

```php
Socket|false socket_create(int $domain, int $type, int $protocol)
```

创建并返回一个 `Socket` 实例，也称作一个通讯节点。一个典型的网络连接由 2 个套接字构成，一个运行在客户端，另一个运行在服务器端。

## 参数

- **`$domain`** — `$domain` 参数指定哪个协议用在当前套接字上。
  | Domain | 描述 |
  | --- | --- |
  | `AF_INET` | IPv4 网络协议。TCP 和 UDP 都可使用此协议。 |
  | `AF_INET6` | IPv6 网络协议。TCP 和 UDP 都可使用此协议。 |
  | `AF_UNIX` | 本地通讯协议。具有高性能和低成本的 IPC（进程间通讯）。 |


- **`$type`** — `$type` 参数用于选择套接字使用的类型。
  | 类型 | 描述 |
  | --- | --- |
  | `SOCK_STREAM` | 提供一个顺序化的、可靠的、全双工的、基于连接的字节流。支持数据传送流量控制机制。TCP 协议即基于这种流式套接字。 |
  | `SOCK_DGRAM` | 提供数据报文的支持。(无连接，不可靠、固定最大长度).UDP协议即基于这种数据报文套接字。 |
  | `SOCK_SEQPACKET` | 提供一个顺序化的、可靠的、全双工的、面向连接的、固定最大长度的数据通信；数据端通过接收每一个数据段来读取整个数据包。 |
  | `SOCK_RAW` | 提供读取原始的网络协议。这种特殊的套接字可用于手工构建任意类型的协议。一般使用这个套接字来实现 ICMP 请求（例如 ping）。 |
  | `SOCK_RDM` | 提供一个可靠的数据层，但不保证到达顺序。一般的操作系统都未实现此功能。 |


- **`$protocol`** — `$protocol` 参数，是设置指定 `$domain` 套接字下的具体协议。这个值可以使用 `getprotobyname()` 函数进行读取。如果所需的协议是 TCP 或 UDP，可以直接使用常量 `SOL_TCP` 和 `SOL_UDP` 。
  | 名称 | 描述 |
  | --- | --- |
  | icmp | 互联网控制消息协议（Internet Control Message Protocol）主要用于网关和主机报告错误的数据通信。 例如 “ping” 命令（在目前大部分的操作系统中）就是使用 ICMP 协议实现的。 |
  | udp | 用户数据包协议（User Datagram Protocol）是一个无连接的、不可靠的、具有固定最大长度的报文协议。由于这些特性，UDP 协议拥有最小的协议开销。 |
  | tcp | 传输控制协议（Transmission Control Protocol）是一个可靠的、基于连接的、面向数据流的全双工协议。TCP 能够保障所有的数据包是按照其发送顺序而接收的。如果任意数据包在通讯时丢失，TCP 将自动重发数据包直到目标主机应答已接收。因为可靠性和性能的原因，TCP 在数据传输层使用 8bit 字节边界。因此，TCP 应用程序必须允许传送部分报文的可能。 |



## 返回值

`socket_create()` 正确时返回一个 `Socket` 实例，失败时返回 `false`。要读取错误代码，可以调用 `socket_last_error()`。这个错误代码可以通过 `socket_strerror()` 读取文字的错误说明。

## 错误／异常

如果使用一个无效的 `$domain` 或 `$type`，`socket_create()` 会使用 `AF_INET` 和 `SOCK_STREAM` 替代无效参数，同时会发出 `E_WARNING` 警告信息。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 创建成功时，该函数现在返回一个 `Socket` 实例； 在此之前，返回的是一个 `resource`。 |

## 参见

`socket_accept()` `socket_bind()` `socket_connect()` `socket_listen()` `socket_last_error()` `socket_strerror()`
