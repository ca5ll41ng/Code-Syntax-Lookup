---
id: "en-php-function-function-yaz-range"
language: "php"
lang: "en"
category: "function"
name: "yaz_range"
title: "Specifies a range of records to retrieve"
signature: "void yaz_range(resource $id, int $start, int $number)"
module: "yaz"
source_url: "https://www.php.net/manual/en/function.yaz-range.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies a range of records to retrieve

## Description

```php
void yaz_range(resource $id, int $start, int $number)
```

Specifies a range of records to retrieve.

This function should be called before `yaz_search()` or `yaz_present()`.

## Parameters

- **`$id`** — The connection resource returned by `yaz_connect()`.
- **`$start`** — Specifies the position of the first record to be retrieved. The records numbers goes from 1 to `yaz_hits()`.
- **`$number`** — Specifies the number of records to be retrieved.

## Return Values

No value is returned.
