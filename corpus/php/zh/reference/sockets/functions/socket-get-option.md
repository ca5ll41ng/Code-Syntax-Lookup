---
id: "zh-php-function-function-socket-get-option"
language: "php"
lang: "zh"
category: "function"
name: "socket_get_option"
title: "获取套接字的套接字选项"
signature: "array|int|false socket_get_option(Socket $socket, int $level, int $option)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-get-option.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取套接字的套接字选项

## 说明

```php
array|int|false socket_get_option(Socket $socket, int $level, int $option)
```

`socket_get_option()` 函数检索指定 `$socket` 中由 `$option` 参数指定的选项值。

## 参数

- **`$socket`** — 由 `socket_create()` 或 `socket_accept()` 创建的 `Socket` 实例。
- **`$level`** — `$level` 参数定义选项所在的协议级别。例如，在 socket 级别检索选项，将使用 `SOL_SOCKET` 作为 `$level` 参数值。在其它级别，例如 TCP，可以使用该级别指定的协议号。协议号可以通过 `getprotobyname()` 获取。
- **`$option`**
  | 选项 | 描述 | 类型 |
  | --- | --- | --- |
  | `SO_DEBUG` | 是否记录调试信息。 | `int` |
  | `SO_BROADCAST` | 是否支持传输广播消息。 | `int` |
  | `SO_REUSEADDR` | 是否可以复用本地地址。 | `int` |
  | `SO_REUSEPORT` | 是否可以复用本地端口。 | `int` |
  | `SO_KEEPALIVE` | 是否通过定期传输消息来为连接保活。如果连接的套接字对消息未响应，连接将断开，并且正在写入套接字的进程会收到 SIGPIPE 信号。 | `int` |
  | `SO_LINGER` | `$socket` 执行 `socket_close()` 时是否滞留残留数据。默认情况下，当关闭 socket 时，将尝试发送所有还未发送的数据。在面向连接的套接字中，`socket_close()` 会等待对端确认接收数据。    如果 `l_onoff` 不为零，且 `l_linger` 为零，对于面向连接的套接字，将丢弃所有未发送的数据，并发送给对端一个 RST（reset）报文。    另外，如果 `l_onoff` 不为零，且 `l_linger` 不为零，`socket_close()` 将阻塞，直到数据被发送完或者超过 `l_linger` 指定的时间。如果 socket 设置为非阻塞，`socket_close()` 将执行失败并返回错误。 | `array`。数组包含两个键： `l_onoff` 和 `l_linger`。 |
  | `SO_OOBINLINE` | `$socket` 是否保留带外数据在正常的数据输入队列中。 | `int` |
  | `SO_SNDBUF` | 发送缓冲区大小。 | `int` |
  | `SO_RCVBUF` | 接收缓冲区大小。 | `int` |
  | `SO_ERROR` | 获取错误状态信息并复位。 | `int` (不能被 `socket_set_option()` 设置) |
  | `SO_TYPE` | `$socket` 类型（例如 `SOCK_STREAM`）。 | `int` (不能被 `socket_set_option()` 设置） |
  | `SO_DONTROUTE` | 发出的消息是否绕过标准路由机制。 | `int` |
  | `SO_RCVLOWAT` | `$socket` 写入操作要处理的最小字节数。 | `int` |
  | `SO_RCVTIMEO` | 接收超时时间。 | `array`。数组包含两个键：`sec` 是超时时间的秒部分，`usec` 是微秒部分。 |
  | `SO_SNDTIMEO` | 指定输出功能阻塞的超时时长，因为流量控制会阻止数据发送。 | `array`。数组包含两个键：`sec` 是超时时间的秒部分，`usec` 是微秒部分。 |
  | `SO_SNDLOWAT` | `$socket` 输出操作要处理的最小字节数。 | `int` |
  | `TCP_NODELAY` | 是否禁用 TCP Nagle 算法。 | `int` |
  | `MCAST_JOIN_GROUP` | 加入多播组。 | `array` 包含 `"group"` 键，指定 `string` 类型的 IPv4 或 IPv6 多播地址；另一个键 `"interface"` 指定（`int` 类型）接口编号或是 `string` 类型的接口名称，比如 `"eth0"`。可以指定 `0` 来使用路由规则选择接口。（仅在 `socket_set_option()` 中使用） |
  | `MCAST_LEAVE_GROUP` | 离开多播组。 | `array`。详情见 `MCAST_JOIN_GROUP`。（仅在 `socket_set_option()` 中使用） |
  | `MCAST_BLOCK_SOURCE` | 在已加入的多播组上阻塞接收来自指定源的数据包。 | `array` 与 `MCAST_JOIN_GROUP` 有相同的键，额外增加 `string` 类型的 `source` 键，指定要阻塞的 IPv4 或 IPv6 源地址。（仅在 `socket_set_option()` 中使用） |
  | `MCAST_UNBLOCK_SOURCE` | 在已加入的多播组取消阻塞（继续接收）接收来自指定源的数据包。 | `array` 与 `MCAST_BLOCK_SOURCE` 格式相同。（仅在 `socket_set_option()` 中使用） |
  | `MCAST_JOIN_SOURCE_GROUP` | 接收源地址与指定多播组匹配的数据包。 | `array` 与 `MCAST_BLOCK_SOURCE` 格式相同。（仅在 `socket_set_option()` 中使用） |
  | `MCAST_LEAVE_SOURCE_GROUP` | 停止接收源地址与指定多播组匹配的数据包。 | `array` 与 `MCAST_BLOCK_SOURCE` 格式相同。（仅在 `socket_set_option()` 中使用） |
  | `IP_MULTICAST_IF` | IPv4 多播数据包的输出接口。 | 使用 `int` 类型指定接口编号或使用 `string` 类型指定接口名，例如 `eth0`。`0` 表示选择接口时使用路由表。`socket_set_option()` 函数返回接口索引。注意，不像 C API，此选项无需提供 IP 地址。这样就消除了 `IP_MULTICAST_IF` 和 `IPV6_MULTICAST_IF` 之间的接口差异。 |
  | `IPV6_MULTICAST_IF` | IPv6 多播数据包的输出接口。 | 与 `IP_MULTICAST_IF` 相同。 |
  | `IP_MULTICAST_LOOP` | 在已加入的多播组开启或禁用 IPv4 报文的组播环回策略。类 Unix 中作用于发送路径，Windows 中作用于接收路径。 | `int`（`0` 或 `1`）。`socket_get_option()` 可以接受任何值，并按照常规 PHP 规则转换为布尔值。 |
  | `IPV6_MULTICAST_LOOP` | 与 `IP_MULTICAST_LOOP` 类似，但用于 IPv6。 | `int`。详情见 `IP_MULTICAST_LOOP`。 |
  | `IP_MULTICAST_TTL` | 传出 IPv4 多播数据包的生存时间。这个值需要在 0（数据不传出）到 255 之间。默认值是 1（仅到达本地网络）。 | `int` 0 到 255 之间。 |
  | `IPV6_MULTICAST_HOPS` | 与 `IP_MULTICAST_TTL` 类似，但用于 IPv6 数据包。-1 也可以被接受，表示使用默认路由。 | `int` -1 到 255 之间。 |
  | `SO_MARK` | 在套接字上设置标识符，用于过滤 Linux 中的数据包。 | `int` |
  | `SO_ACCEPTFILTER` | 在（FreeBSD 或 NetBSD）监听套接字上添加接受过滤器。FreeBSD 中，需要预先加载接受过滤器内核模块（例如 accf_http）。 | `string` 过滤器名称（最大长度 15）。 |
  | `SO_USER_COOKIE` | 在套接字上设置标识符，用于过滤 FreeBSD 中的数据包。 | `int` |
  | `SO_RTABLE` | 在套接字上设置标识符，用于过滤 OpenBSD 中的数据包。 | `int` |
  | `SO_DONTTRUNC` | 保留未读数据。 | `int` |
  | `SO_WANTMORE` | 当准备好更多数据时给出提示。 | `int` |
  | `TCP_DEFER_ACCEPT` | 在数据准备好之前不通知监听套接字。 | `int` |
  | `SO_INCOMING_CPU` | 获取或设置套接字的 CPU 亲和性。 | `int` |
  | `SO_MEMINFO` | 获取套接字的内存信息。 | `int` |
  | `SO_BPF_EXTENSIONS` | 为套接字附加内核支持的 BPF 扩展。 | `int` |
  | `SO_SETFIB` | 为套接字设置路由表（FIB）。（仅 FreeBSD） | `int` |
  | `SOL_FILTER` | 过滤套接字的属性。（仅 Solaris/Illumos） | `int` |
  | `TCP_KEEPCNT` | 设置 TCP 在断开连接前的最大保活探测次数。 | `int` |
  | `TCP_KEEPIDLE` | 设置连接需要保持空闲的时间。 | `int` |
  | `TCP_KEEPINTVL` | 设置各个保活探针的间隔时间。 | `int` |
  | `TCP_KEEPALIVE` | 设置连接需要保持空闲的时间。（仅 macOS） | `int` |
  | `TCP_NOTSENT_LOWAT` | 设置套接字流数据队列中未发送数据的数量限制。（仅 Linux） | `int` |



## 返回值

返回给定选项的值， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$socket` 是 `Socket` 实例， 之前是 `resource`。 |

## 示例

**`socket_get_option()` 示例**

```php


<?php
$socket = socket_create_listen(1223);

$linger = array('l_linger' => 1, 'l_onoff' => 1);
socket_set_option($socket, SOL_SOCKET, SO_LINGER, $linger);

var_dump(socket_get_option($socket, SOL_SOCKET, SO_REUSEADDR));
?>

    
```

## 参见

`socket_create_listen()` `socket_set_option()`
