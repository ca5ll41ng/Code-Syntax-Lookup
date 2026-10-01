---
id: "en-php-function-function-ssdeep-fuzzy-compare"
language: "php"
lang: "en"
category: "function"
name: "ssdeep_fuzzy_compare"
title: "Calculates the match score between two fuzzy hash signatures"
signature: "int ssdeep_fuzzy_compare(string $signature1, string $signature2)"
module: "ssdeep"
source_url: "https://www.php.net/manual/en/function.ssdeep-fuzzy-compare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculates the match score between two fuzzy hash signatures

## Description

```php
int ssdeep_fuzzy_compare(string $signature1, string $signature2)
```

Calculates the match score between `$signature1` and `$signature2` using [context-triggered piecewise hashing](), and returns the match score.

## Parameters

- **`$signature1`** — The first fuzzy hash signature string.
- **`$signature2`** — The second fuzzy hash signature string.

## Return Values

Returns an integer from 0 to 100 on success, `false` otherwise.
