---
id: "zh-php-guide-memcached-sessions"
language: "php"
lang: "zh"
category: "guide"
name: "memcached.sessions"
title: "Sessions支持"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.sessions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sessions支持

memcached 提供了一个自定义的 session 处理程序可以被用于存储用户 session 数据到 memcached 服务端。 一个完全独立的 memcached 实例将会在内部使用，因此如果需要您可以设置一个不同的服务器池。session 的 key 被存储在前缀 `memc.sess.key.` 之下，因此, 如果你对 session 和通常的缓存使用了 同样的服务器池，请注意这一点。 译注：另外一个 session 和通常缓存分离的原因是当通常的缓存占满了 memcached 服务端后，可能会导致你的 session 被 从缓存中踢除，导致用户莫名的掉线。

- **`$session.save_handler` `string`** — 设置为 `memcached` 开启 memcached 的 session 处理程序。
- **`$session.save_path` `string`** — 定义一个逗号分隔的 `hostname:port` 样式的 session 缓存服务器池，例如： `"sess1:11211, sess2:11211"`。
