---
id: "zh-php-guide-memcached-constants"
language: "php"
lang: "zh"
category: "guide"
name: "memcached.constants"
title: "预定义常量"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`Memcached::OPT_COMPRESSION`** — 开启或关闭负载压缩。开启后，item 值的长度超过特定阈值（当前是 2000 字节）时，会对值压缩并存储，在检索时会以透明方式解压缩。可以使用 memcached.compression_threshold INI 配置来设置阈值。 — 类型：`bool`，默认：`true`。
- **`Memcached::OPT_COMPRESSION_TYPE`** — 如果启用了压缩，则指定要使用的压缩算法。有效的算法包括 `Memcached::COMPRESSION_FASTLZ`、`Memcached::COMPRESSION_ZLIB` 和 `Memcached::COMPRESSION_ZSTD`。 — 类型：`int`，默认：`Memcached::COMPRESSION_FASTLZ`。
- **`Memcached::COMPRESSION_FASTLZ`** — FASTLZ 压缩算法。
- **`Memcached::COMPRESSION_ZLIB`** — ZLIB 压缩算法。
- **`Memcached::COMPRESSION_ZSTD`** — ZSTD 压缩算法。 — 自 Memcached 3.3.0 起可用。
- **`Memcached::OPT_COMPRESSION_LEVEL`** — 如果启用了压缩，则指定要使用的压缩级别。
   `Memcached::COMPRESSION_FASTLZ` 不支持压缩级别。 `Memcached::COMPRESSION_ZSTD`：最低级别为 `-22`，最高级别为 `22`。 `Memcached::COMPRESSION_ZLIB`：最低级别为 `0`，最高级别为 `9`。 

 — 类型：`int`，默认：`3`。
- **`Memcached::OPT_SERIALIZER`** — 指定对于非标量值进行序列化的序列化工具。可用的值有 `Memcached::SERIALIZER_PHP`、`Memcached::SERIALIZER_IGBINARY`、`Memcached::SERIALIZER_JSON`、`Memcached::SERIALIZER_JSON_ARRAY` 和 `Memcached::SERIALIZER_MSGPACK`。 — 类型：`int`，默认：优先 `Memcached::SERIALIZER_IGBINARY`（如果有效），其次 `Memcached::SERIALIZER_MSGPACK`（如果有效），最后 `Memcached::SERIALIZER_PHP`。
- **`Memcached::SERIALIZER_PHP`** — 默认的 PHP 序列化工具（即 serialize 方法）。
- **`Memcached::SERIALIZER_IGBINARY`** — igbinary 序列化工具。它将 php 的数据结构 存储为紧密的二进制形式，而非文本表示，从而节省时间和空间。 — 仅当 memcached 配置了 --enable-memcached-igbinary 选项并加载了 igbinary 扩展时，才支持此序列化器。
- **`Memcached::SERIALIZER_JSON`** — JSON 序列化器。此序列化器将 JSON 反序列化为对象。
- **`Memcached::SERIALIZER_JSON_ARRAY`** — JSON 数组序列化器。此序列化器将 JSON 反序列化为关联数组
- **`Memcached::SERIALIZER_MSGPACK`** — [MessagePack](msgpack) 序列化器。 — 仅当 memcached 配置了 --enable-memcached-msgpack 选项并加载了 `msgpack` 扩展时，才支持此序列化器。
- **`Memcached::OPT_PREFIX_KEY`** — 可以用于为 key 创建“域”。这个值将会被作为每个 key 的前缀，它不能长于 `128` 个字符， 并且将会缩短最大可允许的 key 的长度。这个前缀仅仅用于被存储的元素的 key，而不会用于服务器 key。 — 类型：`string`，默认：`""`。
- **`Memcached::OPT_HASH`** — 指定存储元素 key 使用的散列算法。可用的值通过 `Memcached::HASH_{*}` 常量提供。每种散列算法均有其优缺点。若无特定需求或不了解差异，建议使用默认值。 — 类型：`int`，默认：`Memcached::HASH_DEFAULT`
- **`Memcached::HASH_DEFAULT`** — 默认的（Jenkins one-at-a-time）元素 key hash 算法
- **`Memcached::HASH_MD5`** — md5 元素 key hash 算法。
- **`Memcached::HASH_CRC`** — CRC 元素 key hash 算法。
- **`Memcached::HASH_FNV1_64`** — FNV1_64 元素 key hash 算法。
- **`Memcached::HASH_FNV1A_64`** — FNV1_64A 元素 key hash 算法。
- **`Memcached::HASH_FNV1_32`** — FNV1_32 元素 key hash 算法。
- **`Memcached::HASH_FNV1A_32`** — FNV1_32A 元素 key hash 算法。
- **`Memcached::HASH_HSIEH`** — Hsieh 元素 key hash 算法。
- **`Memcached::HASH_MURMUR`** — Murmur 元素 key hash 算法。
- **`Memcached::OPT_DISTRIBUTION`** — 指定元素 key 分布到各个服务器的方法。当前支持的方法有余数分步法合一致性 hash 算法两种。一致性 hash 算法提供 了更好的分配策略并且在添加服务器到集群时可以最小化缓存丢失。 — 类型：`int`，默认:：`Memcached::DISTRIBUTION_MODULA`。
- **`Memcached::DISTRIBUTION_MODULA`** — 余数分布算法。
- **`Memcached::DISTRIBUTION_CONSISTENT`** — 一致性分布算法（基于 libketama）。
- **`Memcached::DISTRIBUTION_VIRTUAL_BUCKET`** — 虚拟桶（bucket）散列 key 分布算法（也称为 vbucket）。
- **`Memcached::OPT_LIBKETAMA_COMPATIBLE`** — 开启或关闭兼容的 libketama 类行为。当开启此选项后，元素 key 的 hash 算法将会被设置为 md5 并且分布算法将会 采用带有权重的一致性 hash 分布。这一点非常有用因为其他基于 libketama 的客户端（比如 Python、Ruby 等）在同样 的服务端配置下可以透明的访问 key。
  > 如果要使用一致性 hash 算法强烈建议开启此选项，并且这个选项可能在未来的发布版中被设置为默认开启。

 — 类型：`bool`，默认：`false`。
- **`Memcached::OPT_LIBKETAMA_HASH`** — 指定用于主机映射的散列算法。 — 类型：`int`。
- **`Memcached::OPT_TCP_KEEPALIVE`** — 启用 TCP 保活（keep alive）。 — 类型：`bool`，默认:：`false`。
- **`Memcached::OPT_BUFFER_WRITES`** — 开启或关闭 I/O 缓存。开启 I/O 缓存会导致存储命令不实际发送而是存储到缓冲区中。任意的检索数据操作都会导致 缓存中的数据被发送到远程服务端。退出连接或关闭连接也会导致缓存数据被发送到远程服务端。 — 类型：`bool`，默认：`false`。
- **`Memcached::OPT_BINARY_PROTOCOL`** — 开启使用二进制协议。请注意这个选项不能在一个打开的连接上进行切换。 — 类型：`bool`，默认：`false`。
- **`Memcached::OPT_NO_BLOCK`** — 开启或关闭异步 I/O。这将使得存储函数传输速度最大化。 — 类型：`bool`，默认：`false`。
- **`Memcached::OPT_NOREPLY`** — 启用或禁用忽略存储命令（set、add、replace、append、prepend、delete、increment、decrement 等）的结果。存储命令将直接发送而无需等待响应（也不会返回响应）。检索命令（如 `Memcached::get()`）不受此设置影响。 — 类型：`bool`，默认：`false`。
- **`Memcached::OPT_TCP_NODELAY`** — 启用或禁用连接套接字的无延迟特性（在某些环境中可能提升速度）。 — 类型：`bool`，默认：`false`。
- **`Memcached::OPT_SOCKET_SEND_SIZE`** — socket 发送缓冲的最大值。 — 类型：`int`，默认：根据不同的平台/内核配置不同
- **`Memcached::OPT_SOCKET_RECV_SIZE`** — socket 接收缓冲的最大值。 — 类型：`int`，默认：根据不同的平台/内核配置不同
- **`Memcached::OPT_CONNECT_TIMEOUT`** — 在非阻塞模式下，设置套接字连接期间的超时值，单位是毫秒。 — 类型：`int`，默认：`1000`。
- **`Memcached::OPT_RETRY_TIMEOUT`** — 等待失败的连接重试的时间，单位秒。 — 类型：`int`，默认：`2`。
- **`Memcached::OPT_DEAD_TIMEOUT`** — 等待重试失效服务器的时间，单位为秒。`0` 表示不重试。 — 类型：`int`，默认：`0`。
- **`Memcached::OPT_SEND_TIMEOUT`** — socket 发送超时时间，单位微秒。在这种情况下您不能使用非阻塞 I/O，这将使得您仍然有数据会发送超时。 — 类型：`int`，默认：`0`。
- **`Memcached::OPT_RECV_TIMEOUT`** — socket 读取超时时间，单位微秒。在这种情况下您不能使用非阻塞 I/O，这将使得您仍然有数据会读取超时。 — 类型：`int`，默认：`0`。
- **`Memcached::OPT_POLL_TIMEOUT`** — poll 连接超时时间，单位毫秒。 — 类型：`int`，默认：`1000`。
- **`Memcached::OPT_CACHE_LOOKUPS`** — 开启或禁用 DNS 查找缓存。 — 类型：`bool`，默认：`false`。
- **`Memcached::OPT_SERVER_FAILURE_LIMIT`** — 指定一个服务器连接的失败重试次数限制。在达到此数量的失败重连后此服务器将被从服务器池中移除。 — 类型：`int`，默认：`5`。
- **`Memcached::OPT_SERVER_TIMEOUT_LIMIT`** — 指定服务器连接尝试的超时限制。当连续连接超时次数达到此值后，将移除此服务器。 — 类型：`int`，默认：`0`。
- **`Memcached::OPT_AUTO_EJECT_HOSTS`** — 从列表中移除已禁用的服务器。需与 `Memcached::OPT_SERVER_FAILURE_LIMIT` 和 `Memcached::OPT_SERVER_TIMEOUT_LIMIT` 配合使用。
  > `Memcached::OPT_REMOVE_FAILED_SERVERS` 已取代此选项。

 — 类型：`bool`，默认：`false`。
- **`Memcached::OPT_VERIFY_KEY`** — 启用 memcached 对 key 的验证。 — 类型：`bool`，默认：`false`。
- **`Memcached::OPT_USE_UDP`** — 使用 UDP 而非 TCP。 — 类型：`bool`，默认：`false`。
- **`Memcached::OPT_NUMBER_OF_REPLICAS`** — 在不同服务器上存储每个元素的指定数量的副本。 — 类型：`int`，默认：`0`。
- **`Memcached::OPT_RANDOMIZE_REPLICA_READS`** — 对副本读取服务器进行随机化。 — 类型：`bool`，默认：`false`。
- **`Memcached::OPT_REMOVE_FAILED_SERVERS`** — 从列表中移除已禁用的服务器。需与 `Memcached::OPT_SERVER_FAILURE_LIMIT` 和 `Memcached::OPT_SERVER_TIMEOUT_LIMIT` 配合使用。 — 类型：`bool`，默认：`false`。
- **`Memcached::HAVE_IGBINARY`** — 指示是否支持 igbinary 的序列化。 — 类型：`bool`。
- **`Memcached::HAVE_JSON`** — 指示是否支持 json 的序列化。 — 类型：`bool`。
- **`Memcached::HAVE_MSGPACK`** — 表示 MessagePack 序列化支持是否有效。 — 类型：`bool`。 — 自 Memcached 3.0.0 起可用。
- **`Memcached::HAVE_ZSTD`** — 表示是否支持 ZSTD 压缩。 — 类型：`bool`。 — 自 Memcached 3.3.0 起可用。
- **`Memcached::HAVE_ENCODING`** — 表示是否支持使用 `Memcached::setEncodingKey()` 进行数据加密。 — 类型：`bool`。 — 自 Memcached 3.1.0 起可用。
- **`Memcached::HAVE_SESSION`** — 类型：`bool`。 — 自 Memcached 3.0.0 起可用。
- **`Memcached::HAVE_SASL`** — 类型：`bool`。 — 自 Memcached 3.0.0 起可用。
- **`Memcached::GET_EXTENDED`** — `Memcached::get()`、`Memcached::getMulti()` 和 `Memcached::getMultiByKey()` 的 flag，确保返回 CAS 令牌值。 — 自 Memcached 3.0.0 起可用。
- **`Memcached::GET_PRESERVE_ORDER`** — 用于 `Memcached::getMulti()` 和 `Memcached::getMultiByKey()` 的 flag 用以确保返回的 key 和请求的 key 顺序保持一致。不存在的 key 将会得到默认值 `null`。
- **`Memcached::RES_SUCCESS`** — 操作成功。
- **`Memcached::RES_FAILURE`** — 某种方式的操作失败。
- **`Memcached::RES_HOST_LOOKUP_FAILURE`** — DNS 查找失败。
- **`Memcached::RES_UNKNOWN_READ_FAILURE`** — 读取网络数据失败。
- **`Memcached::RES_PROTOCOL_ERROR`** — 错误的 memcached 协议命令。
- **`Memcached::RES_CLIENT_ERROR`** — 客户端错误。
- **`Memcached::RES_SERVER_ERROR`** — 服务端错误。
- **`Memcached::RES_WRITE_FAILURE`** — 向网络写数据失败。
- **`Memcached::RES_DATA_EXISTS`** — 比较并交换值操作失败（cas 方法）：尝试向服务端存储数据时由于自此连接最后一次取此 key 对应数据之后被改变导致失败。
- **`Memcached::RES_NOTSTORED`** — 元素未存储，但并非由于错误。这通常表明“add”（元素已存在）或“replace”（元素不存在）命令的条件不满足或者该元素位于删除序列中（延时删除）。
- **`Memcached::RES_NOTFOUND`** — 元素未找到（通过“get”或“cas”操作时）。
- **`Memcached::RES_PARTIAL_READ`** — 局部网络数据读错误。
- **`Memcached::RES_SOME_ERRORS`** — 在多 key 获取的时候发生错误。
- **`Memcached::RES_NO_SERVERS`** — 服务器池空。
- **`Memcached::RES_END`** — 结果集到结尾了。
- **`Memcached::RES_ERRNO`** — 系统错误。
- **`Memcached::RES_BUFFERED`** — 操作被缓存。
- **`Memcached::RES_TIMEOUT`** — 操作超时。
- **`Memcached::RES_BAD_KEY_PROVIDED`** — 提供了无效的 key。
- **`Memcached::RES_STORED`** — 元素已存储。
- **`Memcached::RES_DELETED`** — 元素已删除。
- **`Memcached::RES_STAT`** — 统计数据。
- **`Memcached::RES_ITEM`** — 元素。
- **`Memcached::RES_NOT_SUPPORTED`** — 不支持。
- **`Memcached::RES_FETCH_NOTFINISHED`** — 获取尚未完成。
- **`Memcached::RES_SERVER_MARKED_DEAD`** — 服务器标记为失效
- **`Memcached::RES_UNKNOWN_STAT_KEY`** — 未知统计 key。
- **`Memcached::RES_INVALID_HOST_PROTOCOL`** — 主机协议无效。
- **`Memcached::RES_MEMORY_ALLOCATION_FAILURE`** — 内存分配失败。
- **`Memcached::RES_CONNECTION_SOCKET_CREATE_FAILURE`** — 创建网络 socket 失败。
- **`Memcached::RES_PAYLOAD_FAILURE`** — 不能压缩/解压缩或序列化/反序列化值。
- **`Memcached::RES_AUTH_PROBLEM`** — 自 Memcached 3.0.0 起可用。
- **`Memcached::RES_AUTH_FAILURE`** — 自 Memcached 3.0.0 起可用。
- **`Memcached::RES_AUTH_CONTINUE`** — 自 Memcached 3.0.0 起可用。
- **`Memcached::RES_E2BIG`** — 自 Memcached 3.0.0 起可用。
- **`Memcached::RES_KEY_TOO_BIG`** — 自 Memcached 3.0.0 起可用。
- **`Memcached::RES_SERVER_TEMPORARILY_DISABLED`** — 自 Memcached 3.0.0 起可用。
- **`Memcached::RES_SERVER_MEMORY_ALLOCATION_FAILURE`** — 自 Memcached 3.0.0 起可用。
