---
id: "zh-php-function-function-socket-send"
language: "php"
lang: "zh"
category: "function"
name: "socket_send"
title: "向已连接的套接字发送数据"
signature: "int|false socket_send(Socket $socket, string $data, int $length, int $flags)"
module: "sockets"
source_url: "https://www.php.net/manual/zh/function.socket-send.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向已连接的套接字发送数据

## 说明

```php
int|false socket_send(Socket $socket, string $data, int $length, int $flags)
```

`socket_send()` 从 `$data` 中发送 `$length` 字节到套接字 `$socket`

## 参数

- **`$socket`** — 由 `socket_create()` 或 `socket_accept()` 创建的 `Socket` 实例。
- **`$data`** — 将要发送到远端主机的缓冲区数据。
- **`$length`** — 要从 `$data` 发送到远端主机的字节数。
- **`$flags`** — `$flags` 的值可以是下列任意 flag 的组合。使用按位或运算符（`|`）来组合不同的 flag。 | `MSG_OOB` | 发送 OOB（带外）数据。 | | --- | --- | | `MSG_EOR` | 逻辑记录标记。发送的数据结束一个逻辑记录。 | | `MSG_EOF` | 从发送方关闭套接字，并在指定数据末尾设置结束标识。发送数据后结束事务。 | | `MSG_DONTROUTE` | 绕过路由，直接使用接口。 |

## 返回值

`socket_send()` 返回发送的字节数，发生错误时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `$socket` 是 `Socket` 实例， 之前是 `resource`。 |

## 参见

`socket_sendto()`
