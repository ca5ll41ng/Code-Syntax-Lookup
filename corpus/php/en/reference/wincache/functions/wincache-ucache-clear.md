---
id: "en-php-function-function-wincache-ucache-clear"
language: "php"
lang: "en"
category: "function"
name: "wincache_ucache_clear"
title: "Deletes entire content of the user cache"
signature: "bool wincache_ucache_clear()"
module: "wincache"
source_url: "https://www.php.net/manual/en/function.wincache-ucache-clear.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Deletes entire content of the user cache

## Description

```php
bool wincache_ucache_clear()
```

Clears/deletes all the values stored in the user cache.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**using `wincache_ucache_clear()`**

```php


<?php
wincache_ucache_set('green', 1);
wincache_ucache_set('red', 2);
wincache_ucache_set('orange', 4);
wincache_ucache_set('blue', 8);
wincache_ucache_set('cyan', 16);
$array1 = array('green', 'red', 'orange', 'blue', 'cyan');
var_dump(wincache_ucache_get($array1));
var_dump(wincache_ucache_clear());
var_dump(wincache_ucache_get($array1));
?>

    
```

The above example will output:

```text


array(5) { ["green"]=> int(1) 
           ["red"]=> int(2) 
           ["orange"]=> int(4) 
           ["blue"]=> int(8) 
           ["cyan"]=> int(16) } 
bool(true) 
bool(false) 

    
```

## See Also

`wincache_ucache_set()` `wincache_ucache_add()` `wincache_ucache_delete()` `wincache_ucache_get()` `wincache_ucache_exists()` `wincache_ucache_meminfo()` `wincache_ucache_info()`
