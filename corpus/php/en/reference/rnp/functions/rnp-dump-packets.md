---
id: "en-php-function-function-rnp-dump-packets"
language: "php"
lang: "en"
category: "function"
name: "rnp_dump_packets"
title: "Dump OpenPGP packets stream information in humand-readable format"
signature: "string|false rnp_dump_packets(string $input, int $flags)"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-dump-packets.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dump OpenPGP packets stream information in humand-readable format

## Description

```php
string|false rnp_dump_packets(string $input, int $flags)
```

## Parameters

- **`$input`** — Input string containing OpenPGP data, either in binary or ASCII-armored format.
- **`$flags`** — See `RNP_DUMP_{*}` predefined constants.

## Return Values

Text describing packet sequence or `false` on failure.
