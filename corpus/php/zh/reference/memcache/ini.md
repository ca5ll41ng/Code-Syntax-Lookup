---
id: "zh-php-guide-memcache-ini"
language: "php"
lang: "zh"
category: "guide"
name: "memcache.ini"
title: "运行时配置"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.ini.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| memcache.allow_failover | "1" | `INI_ALL` | Available since memcache 2.0.2. |
| memcache.max_failover_attempts | "20" | `INI_ALL` | Available since memcache 2.1.0. |
| memcache.chunk_size | "8192" | `INI_ALL` | Available since memcache 2.0.2. |
| memcache.default_port | "11211" | `INI_ALL` | Available since memcache 2.0.2. |
| memcache.hash_strategy | "standard" | `INI_ALL` | Available since memcache 2.2.0. |
| memcache.hash_function | "crc32" | `INI_ALL` | Available since memcache 2.2.0. |
| memcache.protocol | ascii | `INI_ALL` | Supported since memcache 3.0.0 |
| memcache.redundancy | 1 | `INI_ALL` | Supported since memcache 3.0.0 |
| memcache.session_redundancy | 2 | `INI_ALL` | Supported since memcache 3.0.0 |
| memcache.compress_threshold | 20000 | `INI_ALL` | Supported since memcache 3.0.3 |
| memcache.lock_timeout | 15 | `INI_ALL` | Supported since memcache 3.0.4 |

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| session.save_handler | "files" | `INI_ALL` | Supported since memcache 2.1.2 |
| session.save_path | "" | `INI_ALL` | Supported since memcache 2.1.2 |

有关 INI_* 样式的更多详情与定义，见 `configuration.changes.modes`。

这是配置指令的简短说明。

- **`$memcache.allow_failover` `bool`** — 是否在发生错误时（对用户）透明的转移到其他服务器。
- **`$memcache.max_failover_attempts` `int`** — 定义在写入和获取数据时最多尝试的服务器次数（即：故障转移最大尝试数），仅和 memcache.allow_failover 结合使用。
- **`$memcache.chunk_size` `int`** — 数据传输块大小，这个值越小网络I/O次数越多，如果发现莫名的速度降低， 可以尝试将此值调至 32768。
- **`$memcache.default_port` `string`** — 在连接 memcached 服务器时如果没有指定其它端口则使用默认 TCP 端口号。
- **`$memcache.hash_strategy` `string`** — 控制将 key 映射到服务器时使用的（分布式）策略。设置此值为 `consistent` 以启用一致散列，允许服务器增减而不会导致重新映射 key。（译注：参见 http://tech.idv2.com/2008/07/24/memcached-004/）将此值设置为 `standard` 会导致使用旧策略。
- **`$memcache.hash_function` `string`** — 控制将 key 映射到服务器时应用哪个 hash 函数，`crc32` 使用标准 CRC32 散列，`fnv` 使用 FNV-1a。
- **`$memcache.protocol` `string`**
- **`$memcache.redundancy` `int`**
- **`$memcache.session_redundancy` `int`**
- **`$memcache.compress_threshold` `int`**
- **`$memcache.lock_timeout` `int`**
- **`$session.save_handler` `string`** — 通过设置此值为 `memcache`，将 memcache 用作 session 处理程序。
- **`$session.save_path` `string`** — 定义服务器 URL，以逗号分隔，以用于 session 存储，例如`"tcp://host1:11211, tcp://host2:11211"`。 — 每个 url 可能包含应用于该服务器的参数，它们与 `Memcache::addServer()` 方法相同。 例如 `"tcp://host1:11211?persistent=1&weight=1&timeout=1&retry_interval=15"`
