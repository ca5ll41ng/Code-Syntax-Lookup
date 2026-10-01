---
id: "en-php-function-function-sodium-unpad"
language: "php"
lang: "en"
category: "function"
name: "sodium_unpad"
title: "Remove padding data"
signature: "string sodium_unpad(string $string, int $block_size)"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-unpad.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove padding data

## Description

```php
string sodium_unpad(string $string, int $block_size)
```

Unpad a padded string. Timing-safe.

## Parameters

- **`$string`** — Padded string.
- **`$block_size`** — The block size for padding.

## Return Values

Unpadded string.
