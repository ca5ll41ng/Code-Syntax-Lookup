---
id: "en-php-function-function-ssdeep-fuzzy-hash"
language: "php"
lang: "en"
category: "function"
name: "ssdeep_fuzzy_hash"
title: "Create a fuzzy hash from a string"
signature: "string ssdeep_fuzzy_hash(string $to_hash)"
module: "ssdeep"
source_url: "https://www.php.net/manual/en/function.ssdeep-fuzzy-hash.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a fuzzy hash from a string

## Description

```php
string ssdeep_fuzzy_hash(string $to_hash)
```

`ssdeep_fuzzy_hash()` calculates the hash of `$to_hash` using [context-triggered piecewise hashing](), and returns that hash.

## Parameters

- **`$to_hash`** — The input string.

## Return Values

Returns a string on success, `false` otherwise.
