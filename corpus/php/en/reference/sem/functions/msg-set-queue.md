---
id: "en-php-function-function-msg-set-queue"
language: "php"
lang: "en"
category: "function"
name: "msg_set_queue"
title: "Set information in the message queue data structure"
signature: "bool msg_set_queue(SysvMessageQueue $queue, array $data)"
module: "sem"
source_url: "https://www.php.net/manual/en/function.msg-set-queue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set information in the message queue data structure

## Description

```php
bool msg_set_queue(SysvMessageQueue $queue, array $data)
```

`msg_set_queue()` allows you to change the values of the msg_perm.uid, msg_perm.gid, msg_perm.mode and msg_qbytes fields of the underlying message queue data structure.

Changing the data structure will require that PHP be running as the same user that created the queue, owns the queue (as determined by the existing msg_perm.xxx fields), or be running with root privileges. root privileges are required to raise the msg_qbytes values above the system defined limit.

## Parameters

- **`$queue`** — The message queue.
- **`$data`** — You specify the values you require by setting the value of the keys that you require in the `$data` array.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$queue` expects a `SysvMessageQueue` instance now; previously, a `resource` was expected. |

## See Also

 `msg_remove_queue()` `msg_receive()` `msg_stat_queue()` `msg_get_queue()`
