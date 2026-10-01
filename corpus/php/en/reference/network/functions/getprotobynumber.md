---
id: "en-php-function-function-getprotobynumber"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sanitizer"}
name: "getprotobynumber"
title: "Get protocol name associated with protocol number"
signature: "string|false getprotobynumber(int $protocol)"
module: "network"
source_url: "https://www.php.net/manual/en/function.getprotobynumber.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get protocol name associated with protocol number

## Description

```php
string|false getprotobynumber(int $protocol)
```

`getprotobynumber()` returns the protocol name associated with protocol `$protocol` as per `/etc/protocols`.

## Parameters

- **`$protocol`** — The protocol number.

## Return Values

Returns the protocol name as a string, or `false` on failure.

## See Also

`getprotobyname()`
