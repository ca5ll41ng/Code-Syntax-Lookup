---
id: "en-php-function-swoole-client-sendfile"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Client::sendfile"
title: "Send file to the remote TCP socket."
signature: "public bool Swoole\\Client::sendfile(string $filename, [int $offset = ...])"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-client.sendfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send file to the remote TCP socket.

## Description

```php
public bool Swoole\Client::sendfile(string $filename, [int $offset = ...])
```

This is a wrapper of the Linux sendfile system call.

## Parameters

- **`$filename`** — File path of the file to send.
- **`$offset`** — Offset of the file to send

## Return Values
