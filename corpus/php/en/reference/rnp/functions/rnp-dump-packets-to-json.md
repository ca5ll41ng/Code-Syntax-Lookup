---
id: "en-php-function-function-rnp-dump-packets-to-json"
language: "php"
lang: "en"
category: "function"
name: "rnp_dump_packets_to_json"
title: "Dump OpenPGP packets stream information to the JSON string"
signature: "string|false rnp_dump_packets_to_json(string $input, int $flags)"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-dump-packets-to-json.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Dump OpenPGP packets stream information to the JSON string

## Description

```php
string|false rnp_dump_packets_to_json(string $input, int $flags)
```

## Parameters

- **`$input`** — Input string containing OpenPGP data, either in binary or ASCII-armored format.
- **`$flags`** — See `RNP_JSON_DUMP_{*}` predefined constants.

## Return Values

JSON string with dump or `false` on failure.
