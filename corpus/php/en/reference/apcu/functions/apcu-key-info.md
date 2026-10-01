---
id: "en-php-function-function-apcu-key-info"
language: "php"
lang: "en"
category: "function"
name: "apcu_key_info"
title: "Get detailed information about the cache key"
signature: "array|null apcu_key_info(string $key)"
module: "apcu"
source_url: "https://www.php.net/manual/en/function.apcu-key-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get detailed information about the cache key

## Description

```php
array|null apcu_key_info(string $key)
```

Get detailed information about the cache key

## Parameters

- **`$key`** — The key to retrieve information for.

## Return Values

An array containing the detailed information about the cache key, or `null` if the key does not exist.

## Examples

**A `apcu_key_info()` example**

```php


<?php
apcu_add('a','b');
var_dump(apcu_key_info('a'));
?>

   
```

The above example will output:

```text


array(7) {
  ["hits"]=>
  int(0)
  ["access_time"]=>
  int(1606701783)
  ["mtime"]=>
  int(1606701783)
  ["creation_time"]=>
  int(1606701783)
  ["deletion_time"]=>
  int(0)
  ["ttl"]=>
  int(0)
  ["refs"]=>
  int(0)
}

   
```

## See Also

 `apcu_store()` `apcu_fetch()` `apcu_delete()`
