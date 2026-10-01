---
id: "en-php-function-swoole-event-set"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Event::set"
title: "Modify event listener callbacks and mask"
signature: "public static bool Swoole\\Event::set(mixed $sock, callable $read_callback, [callable $write_callback = ...], [int $flags = ...])"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-event.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modify event listener callbacks and mask

## Description

```php
public static bool Swoole\Event::set(mixed $sock, callable $read_callback, [callable $write_callback = ...], [int $flags = ...])
```

Modifies the event listener callbacks and mask for the given file descriptor.

> When $read_callback is not null, the readable event callback function will be modified to the specified function.

> When $write_callback is not null, the writable event callback function will be updated to the specified function.

> Setting SWOOLE_EVENT_READ alone disables write event listening, while setting SWOOLE_EVENT_WRITE alone disables read event listening.

> Swoole\Event::set replaces callbacks but does not free them. Specifying null for callbacks (e.g., read_callback/write_callback) preserves the existing callbacks instead of clearing them.

> Listening for SWOOLE_EVENT_READ without a read_callback (or SWOOLE_EVENT_WRITE without a write_callback) will cause the operation to fail and return false.

## Parameters

- **`$sock`** — File descriptor, stream resource, sockets resource, or object.
- **`$read_callback`** — Callback function for readable events.
- **`$write_callback`** — Callback function for writable events.
- **`$flags`** — Event type mask (e.g. `SWOOLE_EVENT_READ`, `SWOOLE_EVENT_WRITE` or `SWOOLE_EVENT_READ` | `SWOOLE_EVENT_WRITE`).

## Return Values

Returns `true` on success or `false` on failure.
