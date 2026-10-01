---
id: "zh-php-guide-memcached-configuration"
language: "php"
lang: "zh"
category: "guide"
name: "memcached.configuration"
title: "运行时配置"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.configuration.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时配置

这些函数的行为受 php.ini 中的设置影响。

| 名字 | 默认 | 可修改范围 | 更新日志 |
| --- | --- | --- | --- |
| memcached.sess_locking | On | `INI_ALL` | 自 memcached 0.1.0 起可用。 |
| memcached.sess_consistent_hash | On | `INI_ALL` | 自 memcached 2.1.0 起可用。自 memcached 3.0.0 起默认值为 `On`。 |
| memcached.sess_binary | Off | `INI_ALL` | 自 memcached 2.0.0 起可用。自 memcached 3.0.0 起改用 `memcached.sess_binary_protocol`。 |
| memcached.sess_lock_wait | 150000 | `INI_ALL` | 自 memcached 0.1.0 起可用。自 memcached 3.0.0 起移除。 |
| memcached.sess_prefix | memc.sess.key. | `INI_ALL` | 自 memcached 0.1.0 起可用。 |
| memcached.sess_number_of_replicas | 0 | `INI_ALL` | 自 memcached 2.1.0 起可用。 |
| memcached.sess_randomize_replica_read | Off | `INI_ALL` | 自 memcached 2.1.0 起可用。 |
| memcached.sess_remove_failed | On | `INI_ALL` | 自 memcached 2.1.0 起可用。自 memcached 3.0.0 起改用 `memcached.sess_remove_failed_servers`。 |
| memcached.compression_type | fastlz | `INI_ALL` | 自 memcached 0.1.0 起可用。 |
| memcached.compression_factor | 1.3 | `INI_ALL` | 自 memcached 0.1.0 起可用。 |
| memcached.compression_threshold | 2000 | `INI_ALL` | 自 memcached 0.1.0 起可用。 |
| memcached.serializer | igbinary | `INI_ALL` | 自 memcached 0.1.0 起可用。 |
| memcached.use_sasl | Off | `INI_ALL` | 自 memcached 2.2.0 起可用。自 memcached 3.0.0 起移除。 |
| memcached.default_binary_protocol | Off | `INI_ALL` | 自 memcached 3.0.0 起可用。 |
| memcached.default_connect_timeout | 0 | `INI_ALL` | 自 memcached 3.0.0 起可用。 |
| memcached.default_consistent_hash | Off | `INI_ALL` | 自 memcached 3.0.0 起可用。 |
| memcached.sess_binary_protocol | On | `INI_ALL` | 自 memcached 3.0.0 起可用。替换 `memcached.sess_binary`。 |
| memcached.sess_connect_timeout | 1000 | `INI_ALL` | 自 memcached 2.2.0 起可用。 |
| memcached.sess_consistent_hash_type | ketama | `INI_ALL` | 自 memcached 3.1.0 起可用。 |
| memcached.sess_lock_expire | 0 | `INI_ALL` | 自 memcached 2.2.0 起可用。 |
| memcached.sess_lock_retries | 5 | `INI_ALL` | 自 memcached 3.0.0 起可用。 |
| memcached.sess_lock_wait_max | 150 | `INI_ALL` | 自 memcached 3.0.0 起可用。自 memcached 3.1.0 起默认值为 `150`（之前 `2000`）。 |
| memcached.sess_lock_wait_min | 150 | `INI_ALL` | 自 memcached 3.0.0 起可用。自 memcached 3.1.0 起默认值为 `150`（之前 `1000`）。 |
| memcached.sess_persistent | Off | `INI_ALL` | 自 memcached 3.0.0 起可用。 |
| memcached.sess_remove_failed_servers | Off | `INI_ALL` | 自 memcached 3.0.0 起可用。替换 `memcached.sess_remove_failed`。 |
| memcached.sess_server_failure_limit | 0 | `INI_ALL` | 自 memcached 3.0.0 起可用。 |
| memcached.sess_sasl_password | null | `INI_ALL` | 自 memcached 2.2.0 起可用。 |
| memcached.sess_sasl_username | null | `INI_ALL` | 自 memcached 2.2.0 起可用。 |
| memcached.store_retry_count | 0 | `INI_ALL` | 自 memcached 2.2.0 起可用。自 memcached 3.2.0 起默认值为 `0`（之前是 `2`）。 |

这是配置指令的简短说明。

- **`$memcached.sess_locking` `bool`** — 开启 session 支持。有效值: `On`、`Off`，默认值 `On`。
- **`$memcached.sess_consistent_hash` `bool`** — 如果为 `On`，session 处理程序则使用一致性哈希（libketama）。 使用一致性哈希，可以保证你在增加或删除 memcached 服务器节点的时候不会导致 session 大规模的失效。 默认是 `On`。
- **`$memcached.sess_binary` `bool`** — Memcached session 是否使用二进制模式。如果 Libmemcached 开启二进制模式。默认值是 `Off`。
- **`$memcached.sess_lock_wait` `int`** — Session 自旋锁等待时间（微秒）。请小心设置此值。值的类型是整数，当此值被设置为 `0` 的时候，lock wait 的时间将会使用系统默认值，Memcached 扩展中默认值是 `150000`。
- **`$memcached.sess_prefix` `string`** — 设置 memcached session key 的前缀。session 前缀最长为 219 字节长的字符串。默认值是 `memc.sess.key`。
- **`$memcached.sess_number_of_replicas` `int`** — Write data to a number of additional memcached servers. This is "poor man's HA" as libmemcached calls it. If this value is positive and `sess_remove_failed_servers` is enabled when a memcached server fails the session will continue to be available from a replica. However, if the failed memcache server becomes available again it will read the session from there which could have old data or no data at all. Default is `0`.
- **`$memcached.sess_randomize_replica_read` `bool`** — Memcached session 是否随机复制读。
- **`$memcached.sess_remove_failed` `int`** — 是否允许自动剔除出故障的 memcached 服务器。
- **`$memcached.compression_type` `string`** — 设置 memcached 的压缩类型，允许的值为 `fastlz`、`zlib`。默认值是 `fastlz`（快速无损压缩，性能不错）。
- **`$memcached.compression_factor` `float`** — 压缩因子。保存时压缩因子超过设置的极限才会将数据压缩存储。存储压缩条件：`plain_len > comp_len * factor`。默认是 `1.3`（节省 23% 的空间）。
- **`$memcached.compression_threshold` `int`** — 压缩阈值。不压缩的序列化值低于此阈值。默认值是 `2000` 字节。
- **`$memcached.serializer` `string`** — 设置缓存对象的默认序列化程序。有效值：`php`、`igbinary`、`json`、`json_array`、`msgpack`。
  - **json** — 标准的 PHP JSON 编码。此序列化程序快速而且是压缩后的数据，但是处理 UTF-8 编码数据时会不完全实现序列化。请查看 JSON 扩展。自 memcached 0.2.0 起可用。
  - **json_array** — `json`，但是反序列化的时候返回数组。自 memcached 2.0.0 起可用。
  - **php** — PHP 标准序列化
  - **igbinary** — 二进制序列化。自 memcached 0.1.4 起可用。
  - **msgpack** — 一个跨语言的二进制序列化器。自 memcached 2.2.0 起可用。

 — 如果 `igbinary` 有效则默认使用它，然后如果 `msgpack` 有效则使用它，否则使用 `php`。
- **`$memcached.use_sasl` `bool`** — 链接 memcached 服务器时启用 SASL 认证。有效值 `On`、`Off`。默认值是 `Off`。
- **`$memcached.default_binary_protocol` `bool`** — 为新连接设置默认 memcached 协议。（如果要为 session 使用配置 memcached 协议，请改用 `memcached.sess_binary_protocol`。） 如果设置为 `On`，则默认使用 memcached 二进制协议。如果设置为 `Off`，则使用 memcached 文本协议。默认为 `Off`。
- **`$memcached.default_connect_timeout` `int`** — 为新连接设置默认的 memcached 连接超时。（要为会话配置 memcached 连接超时，请改用 `memcached.sess_connect_timeout`。） 在非阻塞模式下，这会更改超时值。以毫秒为单位的套接字连接期间。指定 `-1` 意味着无限超时。指定 `0` 意味着使用 memcached 库的默认连接超时。默认为 `0`。
- **`$memcached.default_consistent_hash` `bool`** — Sets the default for consistent hashing for new connections. (To configure consistent hashing for session connections, use `memcached.sess_consistent_hash` instead.) If set to `On`, consistent hashing (libketama) is used for session handling. When consistent hashing is used, one can add or remove cache node(s) without messing up too much with existing keys default is `Off`.
- **`$memcached.sess_binary_protocol` `bool`** — Use the memcached binary protocol for memcached sessions instead of the text protocol. libmemcached replicas only work if the binary mode is enabled. However, certain proxies (such as twemproxy) will only work if the binary protocol is disabled. Default is `On` as of libmemcached 1.0.18. Prior to libmemcached 1.0.18, the default was `Off`.
  > 在以前的 php-memcached 版本中，此设置称为 `memcached.sess_binary`。


- **`$memcached.sess_connect_timeout` `int`** — memcached connect timeout value In non-blocking mode this changes the value of the timeout during socket connection in milliseconds. Specifying `-1` means an infinite timeout.
- **`$memcached.sess_consistent_hash_type` `string`** — Memcached session consistent hash type. If set to `ketama`, consistent hashing (libketama) is used for session handling. If set to `ketama_weighted`, weighted consistent hashing (libketama) is used for session handling. Default is `ketama`. Prior to php-memcached 3.0, the default was `ketama_weighted`.
- **`$memcached.sess_lock_expire` `int`** — The time, in seconds, before a lock should release itself. Setting to `0` results in the default behaviour, which is to use PHP's `max_execution_time`. Default is `0`.
- **`$memcached.sess_lock_retries` `int`** — The number of times to retry locking the session lock, not including the first attempt. Default is `5`.
- **`$memcached.sess_lock_wait_max` `int`** — The maximum time, in milliseconds, to wait between session lock attempts. The default is `150`.
- **`$memcached.sess_lock_wait_min` `int`** — The minimum time, in milliseconds, to wait between session lock attempts. This value is double on each lock retry until `memcached.sess_lock_wait_max` is reached, after which any further retries will take `memcached.sess_lock_wait_max` seconds. The default is `150`.
- **`$memcached.sess_persistent` `bool`** — Whether or not to re-use the memcached connections corresponding to the value(s) of `session.save_path` after the execution of the script ends. Don't use this if certain settings (e.g. SASL settings, sess_binary_protocol) would be overridden between requests. Default is `Off`.
- **`$memcached.sess_remove_failed_servers` `bool`** — 允许自动移除失败的 memcached 服务器。默认值是 `Off`。
  > 在以前的 php-memcached 版本中，此设置称为 `memcached.sess_remove_failed`。


- **`$memcached.sess_server_failure_limit` `int`** — Set this value to enable the server be removed after configured number of continuous times connection failure. Default is `0`.
- **`$memcached.sess_sasl_password` `string`** — Session SASL 密码。 Both username and password need to be set for SASL to be enabled.
- **`$memcached.sess_sasl_username` `string`** — Session SASL 用户名。 Both username and password need to be set for SASL to be enabled.
- **`$memcached.store_retry_count` `int`** — 存储命令失败后的重试次数。 This mechanism allows transparent fail-over to secondary servers when set/increment/decrement/setMulti operations fail on the desired server in a multi-server environment. The default is `2`.
