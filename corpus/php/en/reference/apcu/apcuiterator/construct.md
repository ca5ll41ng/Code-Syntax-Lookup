---
id: "en-php-function-apcuiterator-construct"
language: "php"
lang: "en"
category: "function"
name: "APCUIterator::__construct"
title: "Constructs an APCUIterator iterator object"
signature: "public APCUIterator::__construct(array|string|null $search = null, int $format = APC_ITER_ALL, int $chunk_size = 100, int $list = APC_LIST_ACTIVE)"
module: "apcu"
source_url: "https://www.php.net/manual/en/apcuiterator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs an APCUIterator iterator object

## Description

```php
public APCUIterator::__construct(array|string|null $search = null, int $format = APC_ITER_ALL, int $chunk_size = 100, int $list = APC_LIST_ACTIVE)
```

Constructs an `APCUIterator` `object`.

## Parameters

- **`$search`** — Either a PCRE regular expression that matches against APCu key names, given as a `string`. Or an `array` of `string`s with APCu key names. Or, optionally `null` to skip the search.
- **`$format`** — The desired format, as configured with one or more of the APC_ITER_* constants.
- **`$chunk_size`** — The chunk size. Must be a value greater than 0. The default value is 100.
- **`$list`** — The type to list. Either pass in `APC_LIST_ACTIVE` or `APC_LIST_DELETED`.

## Examples

**A `APCUIterator::__construct()` example**

```php


<?php
foreach (new APCUIterator('/^counter\./') as $counter) {
    echo "$counter[key]: $counter[value]\n";
    apc_dec($counter['key'], $counter['value']);
}
?>

   
```

## See Also

 `apcu_exists()` `apcu_cache_info()`
