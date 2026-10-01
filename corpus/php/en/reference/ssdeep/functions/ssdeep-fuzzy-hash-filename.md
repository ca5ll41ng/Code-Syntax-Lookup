---
id: "en-php-function-function-ssdeep-fuzzy-hash-filename"
language: "php"
lang: "en"
category: "function"
name: "ssdeep_fuzzy_hash_filename"
title: "Create a fuzzy hash from a file"
signature: "string ssdeep_fuzzy_hash_filename(string $file_name)"
module: "ssdeep"
source_url: "https://www.php.net/manual/en/function.ssdeep-fuzzy-hash-filename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a fuzzy hash from a file

## Description

```php
string ssdeep_fuzzy_hash_filename(string $file_name)
```

`ssdeep_fuzzy_hash_filename()` calculates the hash of the file specified by `$file_name` using [context-triggered piecewise hashing](), and returns that hash.

## Parameters

- **`$file_name`** — The filename of the file to hash.

## Return Values

Returns a string on success, `false` otherwise.
