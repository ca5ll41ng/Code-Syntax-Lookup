---
id: "en-php-function-function-msg-send"
language: "php"
lang: "en"
category: "function"
name: "msg_send"
title: "Send a message to a message queue"
signature: "bool msg_send(SysvMessageQueue $queue, int $message_type, string|int|float|bool $message, bool $serialize = true, bool $blocking = true, int $error_code = null)"
module: "sem"
source_url: "https://www.php.net/manual/en/function.msg-send.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send a message to a message queue

## Description

```php
bool msg_send(SysvMessageQueue $queue, int $message_type, string|int|float|bool $message, bool $serialize = true, bool $blocking = true, int $error_code = null)
```

`msg_send()` sends a `$message` of type `$message_type` (which MUST be greater than 0) to the message queue specified by `$queue`.

## Parameters

- **`$queue`** — The message queue.
- **`$message_type`** — The type of the message (MUST be greater than 0)
- **`$message`** — The body of the message.
  > If `$serialize` set to `false` is supplied, MUST be of type: `string`, `int`, `float` or `bool`. In other case a warning will be issued.


- **`$serialize`** — The optional `$serialize` controls how the `$message` is sent. `$serialize` defaults to `true` which means that the `$message` is serialized using the same mechanism as the session module before being sent to the queue. This allows complex arrays and objects to be sent to other PHP scripts, or if you are using the WDDX serializer, to any WDDX compatible client.
- **`$blocking`** — If the message is too large to fit in the queue, your script will wait until another process reads messages from the queue and frees enough space for your message to be sent. This is called blocking; you can prevent blocking by setting the optional `$blocking` parameter to `false`, in which case `msg_send()` will immediately return `false` if the message is too big for the queue, and set the optional `$error_code` to `MSG_EAGAIN`, indicating that you should try to send your message again a little later on.
- **`$error_code`** — If the function fails, the optional errorcode will be set to the value of the system errno variable.

## Return Values

Returns `true` on success or `false` on failure.

Upon successful completion the message queue data structure is updated as follows: `$msg_lspid` is set to the process-ID of the calling process, `$msg_qnum` is incremented by 1 and `$msg_stime` is set to the current time.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$queue` expects a `SysvMessageQueue` instance now; previously, a `resource` was expected. |

## See Also

 `msg_remove_queue()` `msg_receive()` `msg_stat_queue()` `msg_set_queue()`
