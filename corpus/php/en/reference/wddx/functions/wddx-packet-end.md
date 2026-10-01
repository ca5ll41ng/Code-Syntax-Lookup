---
id: "en-php-function-function-wddx-packet-end"
language: "php"
lang: "en"
category: "function"
name: "wddx_packet_end"
title: "Ends a WDDX packet with the specified ID"
signature: "string wddx_packet_end(resource $packet_id)"
module: "wddx"
source_url: "https://www.php.net/manual/en/function.wddx-packet-end.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Ends a WDDX packet with the specified ID

## Description

```php
string wddx_packet_end(resource $packet_id)
```

Ends and returns the given WDDX packet.

## Parameters

- **`$packet_id`** — A WDDX packet, returned by `wddx_packet_start()`.

## Return Values

Returns the string containing the WDDX packet.
