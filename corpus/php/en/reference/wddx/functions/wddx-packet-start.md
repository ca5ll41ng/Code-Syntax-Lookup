---
id: "en-php-function-function-wddx-packet-start"
language: "php"
lang: "en"
category: "function"
name: "wddx_packet_start"
title: "Starts a new WDDX packet with structure inside it"
signature: "resource wddx_packet_start([string $comment = ...])"
module: "wddx"
source_url: "https://www.php.net/manual/en/function.wddx-packet-start.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Starts a new WDDX packet with structure inside it

## Description

```php
resource wddx_packet_start([string $comment = ...])
```

Start a new WDDX packet for incremental addition of variables. It automatically creates a structure definition inside the packet to contain the variables.

## Parameters

- **`$comment`** — An optional comment string.

## Return Values

Returns a packet ID for use in later functions, or `false` on error.
