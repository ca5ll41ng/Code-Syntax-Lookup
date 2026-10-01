---
id: "en-php-function-function-getservbyport"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sanitizer"}
name: "getservbyport"
title: "Get Internet service which corresponds to port and protocol"
signature: "string|false getservbyport(int $port, string $protocol)"
module: "network"
source_url: "https://www.php.net/manual/en/function.getservbyport.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get Internet service which corresponds to port and protocol

## Description

```php
string|false getservbyport(int $port, string $protocol)
```

`getservbyport()` returns the Internet service associated with `$port` for the specified `$protocol` as per `/etc/services`.

## Parameters

- **`$port`** — The port number.
- **`$protocol`** — `$protocol` is either `"tcp"` or `"udp"` (in lowercase).

## Return Values

Returns the Internet service name as a string, or `false` on failure.

## See Also

`getservbyname()`
