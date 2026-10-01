---
id: "en-php-function-function-apcu-fetch"
language: "php"
lang: "en"
category: "function"
name: "apcu_fetch"
title: "Fetch a stored variable from the cache"
signature: "mixed apcu_fetch(mixed $key, [bool $success = ...])"
module: "apcu"
source_url: "https://www.php.net/manual/en/function.apcu-fetch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch a stored variable from the cache

## Description

```php
mixed apcu_fetch(mixed $key, [bool $success = ...])
```

Fetches an entry from the cache.

## Parameters

- **`$key`** — The `$key` used to store the value (with `apcu_store()`). If an array is passed then each element is fetched and returned.
- **`$success`** — Set to `true` in success and `false` in failure.

## Return Values

The stored variable or array of variables on success; `false` on failure

## Changelog

|  |  |
| --- | --- |
| PECL apcu 3.0.17 | The `$success` parameter was added. |

## Examples

**A `apcu_fetch()` example**

```php


<?php
$bar = 'BAR';
apcu_store('foo', $bar);
var_dump(apcu_fetch('foo'));
?>

   
```

The above example will output:

```text


string(3) "BAR"

   
```

## See Also

 `apcu_store()` `apcu_delete()` `APCUIterator`
