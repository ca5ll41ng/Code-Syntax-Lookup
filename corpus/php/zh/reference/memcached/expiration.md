---
id: "zh-php-guide-memcached-expiration"
language: "php"
lang: "zh"
category: "guide"
name: "memcached.expiration"
title: "超时时间"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.expiration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 超时时间

一些存储命令在发送时会包含一个失效值（与一个元素或一个客户端操作请求相关）到服务端。所有这类用法，实际发送的值可以 是一个 Unix 时间戳（自 1970 年 1 月 1 日起至失效时间的整型秒数），或者是一个从现在算起的以秒为单位的数字。对于后一种情况，这个 秒数不能超过 60×60×24×30（30 天时间的秒数）;如果失效的值大于这个值，服务端会将其作为一个真实的 Unix 时间戳来处理而不是 自当前时间的偏移。

如果失效值被设置为 `0`（默认），此元素永不过期（但是它可能由于服务端为了给其他新的元素分配空间而被删除）。
