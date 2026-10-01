---
id: "en-php-function-function-apcu-delete"
language: "php"
lang: "en"
category: "function"
name: "apcu_delete"
title: "Removes a stored variable from the cache"
signature: "mixed apcu_delete(mixed $key)"
module: "apcu"
source_url: "https://www.php.net/manual/en/function.apcu-delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes a stored variable from the cache

## Description

```php
mixed apcu_delete(mixed $key)
```

Removes a stored variable from the cache.

## Parameters

- **`$key`** — A `$key` used to store the value as a `string` for a single key, or as an `array` of strings for several keys, or as an `APCUIterator` `object`.

## Return Values

If `$key` is an `array`, an indexed `array` of the keys is returned. Otherwise `true` is returned on success, or `false` on failure.

## Examples

**A `apcu_delete()` example**

```php


<?php
$bar = 'BAR';
apcu_store('foo', $bar);
apcu_delete('foo');
// this is obviously useless in this form

// Alternatively delete multiple keys.
apcu_delete(['foo', 'bar', 'baz']);

// Or use an Iterator with a regular expression.
apcu_delete(new APCUIterator('#^myprefix_#'));
?>

   
```

## See Also

 `apcu_store()` `apcu_fetch()` `apcu_clear_cache()` `APCUIterator`
