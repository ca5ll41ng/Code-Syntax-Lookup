---
id: "en-php-function-function-msg-stat-queue"
language: "php"
lang: "en"
category: "function"
name: "msg_stat_queue"
title: "Returns information from the message queue data structure"
signature: "array|false msg_stat_queue(SysvMessageQueue $queue)"
module: "sem"
source_url: "https://www.php.net/manual/en/function.msg-stat-queue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns information from the message queue data structure

## Description

```php
array|false msg_stat_queue(SysvMessageQueue $queue)
```

`msg_stat_queue()` returns the message queue meta data for the message queue specified by the `$queue`. This is useful, for example, to determine which process sent the message that was just received.

## Parameters

- **`$queue`** — The message queue.

## Return Values

On success, the return value is an array whose keys and values have the following meanings:

| `msg_perm.uid` | The uid of the owner of the queue. |
| --- | --- |
| `msg_perm.gid` | The gid of the owner of the queue. |
| `msg_perm.mode` | The file access mode of the queue. |
| `msg_stime` | The time that the last message was sent to the queue. |
| `msg_rtime` | The time that the last message was received from the queue. |
| `msg_ctime` | The time that the queue was last changed. |
| `msg_qnum` | The number of messages waiting to be read from the queue. |
| `msg_qbytes` | The maximum number of bytes allowed in one message queue. On Linux, this value may be read and modified via `/proc/sys/kernel/msgmnb`. |
| `msg_lspid` | The pid of the process that sent the last message to the queue. |
| `msg_lrpid` | The pid of the process that received the last message from the queue. |

Returns `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$queue` expects a `SysvMessageQueue` instance now; previously, a `resource` was expected. |

## See Also

 `msg_remove_queue()` `msg_receive()` `msg_get_queue()` `msg_set_queue()`
