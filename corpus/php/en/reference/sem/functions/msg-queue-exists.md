---
id: "en-php-function-function-msg-queue-exists"
language: "php"
lang: "en"
category: "function"
name: "msg_queue_exists"
title: "Check whether a message queue exists"
signature: "bool msg_queue_exists(int $key)"
module: "sem"
source_url: "https://www.php.net/manual/en/function.msg-queue-exists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check whether a message queue exists

## Description

```php
bool msg_queue_exists(int $key)
```

Checks whether the message queue `$key` exists.

## Parameters

- **`$key`** — Queue key.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `msg_remove_queue()` `msg_receive()` `msg_stat_queue()`
