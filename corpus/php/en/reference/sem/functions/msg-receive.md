---
id: "en-php-function-function-msg-receive"
language: "php"
lang: "en"
category: "function"
name: "msg_receive"
title: "Receive a message from a message queue"
signature: "bool msg_receive(SysvMessageQueue $queue, int $desired_message_type, int $received_message_type, int $max_message_size, mixed $message, bool $unserialize = true, int $flags = 0, int $error_code = null)"
module: "sem"
source_url: "https://www.php.net/manual/en/function.msg-receive.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Receive a message from a message queue

## Description

```php
bool msg_receive(SysvMessageQueue $queue, int $desired_message_type, int $received_message_type, int $max_message_size, mixed $message, bool $unserialize = true, int $flags = 0, int $error_code = null)
```

`msg_receive()` will receive the first message from the specified `$queue` of the type specified by `$desired_message_type`.

## Parameters

- **`$queue`** — The message queue.
- **`$desired_message_type`** — If `$desired_message_type` is 0, the message from the front of the queue is returned. If `$desired_message_type` is greater than 0, then the first message of that type is returned. If `$desired_message_type` is less than 0, the first message on the queue with a type less than or equal to the absolute value of `$desired_message_type` will be read. If no messages match the criteria, your script will wait until a suitable message arrives on the queue. You can prevent the script from blocking by specifying `MSG_IPC_NOWAIT` in the `$flags` parameter.
- **`$received_message_type`** — The type of the message that was received will be stored in this parameter.
- **`$max_message_size`** — The maximum size of message to be accepted is specified by the `$max_message_size`; if the message in the queue is larger than this size the function will fail (unless you set `$flags` as described below).
- **`$message`** — The received message will be stored in `$message`, unless there were errors receiving the message.
- **`$unserialize`** — If set to `true`, the message is treated as though it was serialized using the same mechanism as the session module. The message will be unserialized and then returned to your script. This allows you to easily receive arrays or complex object structures from other PHP scripts, or if you are using the WDDX serializer, from any WDDX compatible source. — If `$unserialize` is `false`, the message will be returned as a binary-safe string.
- **`$flags`** — The optional `$flags` allows you to pass flags to the low-level msgrcv system call. It defaults to 0, but you may specify one or more of the following values (by adding or ORing them together). | `MSG_IPC_NOWAIT` | If there are no messages of the `$desired_message_type`, return immediately and do not wait. The function will fail and return an integer value corresponding to `MSG_ENOMSG`. | | --- | --- | | `MSG_EXCEPT` | Using this flag in combination with a `$desired_message_type` greater than 0 will cause the function to receive the first message that is not equal to `$desired_message_type`. | | `MSG_NOERROR` | If the message is longer than `$max_message_size`, setting this flag will truncate the message to `$max_message_size` and will not signal an error. |
- **`$error_code`** — If the function fails, the optional `$error_code` will be set to the value of the system errno variable.

## Return Values

Returns `true` on success or `false` on failure.

Upon successful completion the message queue data structure is updated as follows: `msg_lrpid` is set to the process-ID of the calling process, `msg_qnum` is decremented by 1 and `msg_rtime` is set to the current time.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$queue` expects a `SysvMessageQueue` instance now; previously, a `resource` was expected. |

## See Also

 `msg_remove_queue()` `msg_send()` `msg_stat_queue()` `msg_set_queue()`
