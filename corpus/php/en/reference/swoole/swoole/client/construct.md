---
id: "en-php-function-swoole-client-construct"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Client::__construct"
title: "Create Swoole sync or async TCP/UDP client, with or without SSL."
signature: "public Swoole\\Client::__construct(int $sock_type, [int $is_async = ...])"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-client.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create Swoole sync or async TCP/UDP client, with or without SSL.

## Description

```php
public Swoole\Client::__construct(int $sock_type, [int $is_async = ...])
```

## Parameters

- **`$sock_type`** — The type of socket: SWOOLE_TCP, SWOOLE_UDP, SWOOLE_ASYNC, SWOOLE_SSL, SWOOLE_KEEP.
- **`$is_async`** — Synchronous or asynchronous client.
