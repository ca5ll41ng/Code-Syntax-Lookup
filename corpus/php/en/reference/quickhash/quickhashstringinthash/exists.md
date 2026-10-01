---
id: "en-php-function-quickhashstringinthash-exists"
language: "php"
lang: "en"
category: "function"
name: "QuickHashStringIntHash::exists"
title: "This method checks whether a key is part of the hash"
signature: "public bool QuickHashStringIntHash::exists(string $key)"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhashstringinthash.exists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# This method checks whether a key is part of the hash

## Description

```php
public bool QuickHashStringIntHash::exists(string $key)
```

This method checks whether an entry with the provided key exists in the hash.

## Parameters

- **`$key`** — The key of the entry to check for whether it exists in the hash.

## Return Values

Returns `true` when the entry was found, or `false` when the entry is not found.
