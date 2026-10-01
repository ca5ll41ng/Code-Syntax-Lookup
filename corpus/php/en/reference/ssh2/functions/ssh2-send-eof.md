---
id: "en-php-function-function-ssh2-send-eof"
language: "php"
lang: "en"
category: "function"
name: "ssh2_send_eof"
title: "Send EOF to stream"
signature: "bool ssh2_send_eof(resource $channel)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-send-eof.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send EOF to stream

## Description

```php
bool ssh2_send_eof(resource $channel)
```

Sends an EOF to the stream; this is typically used to close standard input, while keeping output and error alive. For example, one can send a remote process some data over standard input, close it to start processing, and still be able to read out the results without creating additional files.

## Parameters

- **`$channel`** — An SSH stream; can be acquired through functions like `ssh2_fetch_stream()` or `ssh2_connect()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `ssh2_fetch_stream()`
