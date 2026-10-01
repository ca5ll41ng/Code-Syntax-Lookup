---
id: "en-php-function-function-sodium-pad"
language: "php"
lang: "en"
category: "function"
name: "sodium_pad"
title: "Add padding data"
signature: "string sodium_pad(string $string, int $block_size)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-pad.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add padding data

## Description

```php
string sodium_pad(string $string, int $block_size)
```

Right-pad a string to a desired length. Timing-safe.

## Parameters

- **`$string`** — Unpadded string.
- **`$block_size`** — The string will be padded until it is an even multiple of the block size.

## Return Values

Padded string.
