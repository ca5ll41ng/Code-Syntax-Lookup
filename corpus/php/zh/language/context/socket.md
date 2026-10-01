---
id: "zh-php-function-context-socket"
language: "php"
lang: "zh"
category: "function"
name: "套接字上下文选项"
title: "套接字上下文选项列表"
module: "language"
source_url: "https://www.php.net/manual/zh/context.socket.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 套接字上下文选项列表

## 说明

 {{{ 

套接字上下文选项可用于所有工作在套接字上的封装协议，像 `tcp`, `http` 和 `ftp`。

 }}} 

## 可选项

 {{{ 

- **`$bindto`** — 用户 PHP 访问网络的指定的 IP 地址（IPv4 或 IPv6 其中的一个）和/或 端口号，这个语法是 `ip:port`。 设置 IP 或者 port 为 `0` 将会让系统选择 IP 或 port。
  > 由于 FTP 在正常操作时会创建两个 socket 连接，因此无法使用此选项指定端口号。


- **`$backlog`** — 用于限制 socket 监听队列中未完成连接的数量。
  > 这仅适用于 `stream_socket_server()`。


- **`$ipv6_v6only`** — 覆盖有关 IPv4 映射到 IPv6 的操作系统默认值。
  > 在 `[::]` 上存在绑定的时候，当尝试在各自的 Ipv4 地址上监听，这是尤其重要。
  >
  > 这仅适用于 `stream_socket_server()`。


- **`$so_reuseport`** — 即使来自不同的进程，也能对同一个 ip:port 对进行多个绑定。
  > 这仅适用于 `stream_socket_server()`。


- **`$so_broadcast`** — 允许向广播地址发送数据，从广播地址接收数据。
  > 这仅适用于 `stream_socket_server()`。


- **`$tcp_nodelay`** — 设置此选项为 `true` 将相应地设置 `SOL_TCP,NO_DELAY=1`， 从而禁用 TCP Nagle 算法。

 }}} 

## 更新日志

 {{{ 

| 版本 | 说明 |
| --- | --- |
| 7.1.0 | 添加 `$tcp_nodelay`。 |
| 7.0.1 | 添加 `$ipv6_v6only`。 |

 }}} 

## 示例

 {{{ 

**基础的 `$bindto` 用法示例**

 {{{ 

```php


<?php
// 使用 IP '192.168.0.100'  连接到互联网
$opts = array(
    'socket' => array(
        'bindto' => '192.168.0.100:0',
    ),
);


// 使用 IP '192.168.0.100'  和端口 '7000' 连接到互联网
$opts = array(
    'socket' => array(
        'bindto' => '192.168.0.100:7000',
    ),
);


// 使用 IPv6 地址 '2001:db8::1' 和端口 '7000' 连接到互联网
$opts = array(
    'socket' => array(
        'bindto' => '[2001:db8::1]:7000',
    ),
);


// 使用端口 '7000' 连接到互联网
$opts = array(
    'socket' => array(
        'bindto' => '0:7000',
    ),
);


// 创建上下文...
$context = stream_context_create($opts);

// ...并使用它来读取数据
echo file_get_contents('http://www.example.com', false, $context);

?>

    
```

 }}}
