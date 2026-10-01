---
id: "en-php-function-function-wincache-ucache-get"
language: "php"
lang: "en"
category: "function"
name: "wincache_ucache_get"
title: "Gets a variable stored in the user cache"
signature: "mixed wincache_ucache_get(mixed $key, [bool $success = ...])"
module: "wincache"
source_url: "https://www.php.net/manual/en/function.wincache-ucache-get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets a variable stored in the user cache

## Description

```php
mixed wincache_ucache_get(mixed $key, [bool $success = ...])
```

Gets a variable stored in the user cache.

## Parameters

- **`$key`** — The `$key` that was used to store the variable in the cache. `$key` is case sensitive. `$key` can be an array of keys. In this case the return value will be an array of values of each element in the `$key` array. If an object, or an array containing objects, is returned, then the objects will be unserialized. See __wakeup() for details on unserializing objects.
- **`$success`** — Will be set to `true` on success and `false` on failure.

## Return Values

If `$key` is a string, the function returns the value of the variable stored with that key. The `$success` is set to `true` on success and to `false` on failure.

The `$key` is an array, the parameter `$success` is always set to `true`. The returned array (name => value pairs) will contain only those name => value pairs for which the get operation in user cache was successful. If none of the keys in the key array finds a match in the user cache an empty array will be returned.

## Examples

**`wincache_ucache_get()` with `$key` as a string**

```php


<?php
wincache_ucache_add('color', 'blue');
var_dump(wincache_ucache_get('color', $success));
var_dump($success);
?>

    
```

The above example will output:

```text


string(4) "blue"
bool(true)

    
```

**`wincache_ucache_get()` with `$key` as an array**

```php


<?php
$array1 = array('green' => '5', 'Blue' => '6', 'yellow' => '7', 'cyan' => '8');
wincache_ucache_set($array1);
$array2 = array('green', 'Blue', 'yellow', 'cyan');
var_dump(wincache_ucache_get($array2, $success));
var_dump($success);
?>

    
```

The above example will output:

```text


array(4) { ["green"]=> string(1) "5" 
           ["Blue"]=> string(1) "6" 
           ["yellow"]=> string(1) "7" 
           ["cyan"]=> string(1) "8" } 
bool(true) 

    
```

## See Also

`wincache_ucache_add()` `wincache_ucache_set()` `wincache_ucache_delete()` `wincache_ucache_clear()` `wincache_ucache_exists()` `wincache_ucache_meminfo()` `wincache_ucache_info()` __wakeup()
