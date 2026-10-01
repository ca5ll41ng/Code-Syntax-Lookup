---
id: "en-php-function-function-msg-remove-queue"
language: "php"
lang: "en"
category: "function"
name: "msg_remove_queue"
title: "Destroy a message queue"
signature: "bool msg_remove_queue(SysvMessageQueue $queue)"
module: "sem"
source_url: "https://www.php.net/manual/en/function.msg-remove-queue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Destroy a message queue

## Description

```php
bool msg_remove_queue(SysvMessageQueue $queue)
```

`msg_remove_queue()` destroys the message queue specified by the `$queue`. Only use this function when all processes have finished working with the message queue and you need to release the system resources held by it.

## Parameters

- **`$queue`** — The message queue.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$queue` expects a `SysvMessageQueue` instance now; previously, a `resource` was expected. |

## See Also

 `msg_get_queue()` `msg_receive()` `msg_stat_queue()` `msg_set_queue()`
