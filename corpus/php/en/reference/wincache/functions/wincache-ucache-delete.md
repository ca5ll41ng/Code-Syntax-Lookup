---
id: "en-php-function-function-wincache-ucache-delete"
language: "php"
lang: "en"
category: "function"
name: "wincache_ucache_delete"
title: "Deletes variables from the user cache"
signature: "bool wincache_ucache_delete(mixed $key)"
module: "wincache"
source_url: "https://www.php.net/manual/en/function.wincache-ucache-delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Deletes variables from the user cache

## Description

```php
bool wincache_ucache_delete(mixed $key)
```

Deletes the elements in the user cache pointed by `$key`.

## Parameters

- **`$key`** — The `$key` that was used to store the variable in the cache. `$key` is case sensitive. `$key` can be an array of keys.

## Return Values

Returns `true` on success or `false` on failure.

If `$key` is an array then the function returns `false` if every element of the array fails to get deleted from the user cache, otherwise returns an array which consists of all the keys that are deleted.

## Examples

**Using `wincache_ucache_delete()` with `$key` as a string**

```php


<?php
wincache_ucache_set('foo', 'bar');
var_dump(wincache_ucache_delete('foo'));
var_dump(wincache_ucache_exists('foo'));
?>

    
```

The above example will output:

```text


bool(true)
bool(false)

    
```

**Using`wincache_ucache_delete()` with `$key` as an array**

```php


<?php
$array1 = array('green' => '5', 'blue' => '6', 'yellow' => '7', 'cyan' => '8');
wincache_ucache_set($array1);
$array2 = array('green', 'blue', 'yellow', 'cyan');
var_dump(wincache_ucache_delete($array2));
?>

    
```

The above example will output:

```text


array(4) { [0]=> string(5) "green" 
           [1]=> string(4) "blue"
           [2]=> string(6) "yellow" 
           [3]=> string(4) "cyan" } 

    
```

**Using `wincache_ucache_delete()` with `$key` as an array where some elements cannot be deleted**

```php


<?php
$array1 = array('green' => '5', 'blue' => '6', 'yellow' => '7', 'cyan' => '8');
wincache_ucache_set($array1);
$array2 = array('orange', 'red', 'yellow', 'cyan');
var_dump(wincache_ucache_delete($array2));
?>

    
```

The above example will output:

```text


array(2) { [0]=> string(6) "yellow" 
           [1]=> string(4) "cyan" }

    
```

## See Also

`wincache_ucache_set()` `wincache_ucache_add()` `wincache_ucache_get()` `wincache_ucache_clear()` `wincache_ucache_exists()` `wincache_ucache_meminfo()` `wincache_ucache_info()`
