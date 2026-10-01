---
id: "en-php-function-function-msg-get-queue"
language: "php"
lang: "en"
category: "function"
name: "msg_get_queue"
title: "Create or attach to a message queue"
signature: "SysvMessageQueue|false msg_get_queue(int $key, int $permissions = 0666)"
module: "sem"
source_url: "https://www.php.net/manual/en/function.msg-get-queue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create or attach to a message queue

## Description

```php
SysvMessageQueue|false msg_get_queue(int $key, int $permissions = 0666)
```

`msg_get_queue()` returns an id that can be used to access the System V message queue with the given `$key`. The first call creates the message queue with the optional `$permissions`. A second call to `msg_get_queue()` for the same `$key` will return a different message queue identifier, but both identifiers access the same underlying message queue.

## Parameters

- **`$key`** — Message queue numeric ID
- **`$permissions`** — Queue permissions. Default to 0666. If the message queue already exists, the `$permissions` will be ignored.

## Return Values

Returns `SysvMessageQueue` instance that can be used to access the System V message queue, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | On success, this function returns a `SysvMessageQueue` instance now; previously, a `resource` was returned. |

## See Also

 `msg_remove_queue()` `msg_receive()` `msg_send()` `msg_stat_queue()` `msg_set_queue()`
