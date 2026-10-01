---
id: "en-php-function-function-socket-export-stream"
language: "php"
lang: "en"
category: "function"
name: "socket_export_stream"
title: "Export a socket into a stream that encapsulates a socket"
signature: "resource|false socket_export_stream(Socket $socket)"
module: "sockets"
source_url: "https://www.php.net/manual/en/function.socket-export-stream.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Export a socket into a stream that encapsulates a socket

## Description

```php
resource|false socket_export_stream(Socket $socket)
```

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$socket`**

## Return Values

Return resource or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$socket` is a `Socket` instance now; previously, it was a `resource`. |
