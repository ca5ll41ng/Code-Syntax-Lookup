---
id: "en-php-function-function-apcu-entry"
language: "php"
lang: "en"
category: "function"
name: "apcu_entry"
title: "Atomically fetch or generate a cache entry"
signature: "mixed apcu_entry(string $key, callable $callback, int $ttl = 0)"
module: "apcu"
source_url: "https://www.php.net/manual/en/function.apcu-entry.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Atomically fetch or generate a cache entry

## Description

```php
mixed apcu_entry(string $key, callable $callback, int $ttl = 0)
```

Atomically attempts to find `$key` in the cache, if it cannot be found `$callback` is called, passing `$key` as the only argument. The return value of the call is then cached with the optionally specified `$ttl`, and returned.

> When control enters `apcu_entry()` the lock for the cache is acquired exclusively, it is released when control leaves `apcu_entry()`: In effect, this turns the body of `$callback` into a critical section, disallowing two processes from executing the same code paths concurrently. In addition, it prohibits the concurrent execution of any other APCu functions, since they will acquire the same lock.

> The only APCu function that can be called safely by `$callback` is `apcu_entry()`.

## Parameters

- **`$key`** — Identity of cache entry
- **`$callback`** — A callable that accepts `$key` as the only argument and returns the value to cache.
- **`$ttl`** — Time To Live; store the `$callback`'s return value in the cache for `$ttl` seconds. After the `$ttl` has passed, the stored entry will be expunged from the cache (on the next request). If no `$ttl` is supplied (or if the `$ttl` is `0`), the value will persist until it is removed from the cache manually, or otherwise fails to exist in the cache (clear, restart, etc.).

## Return Values

Returns the cached value

## Examples

**An `apcu_entry()` example**

```php


<?php
$config = apcu_entry("config", function($key) {
 return [
   "fruit" => apcu_entry("config.fruit", function($key){
     return [
       "apples",
       "pears"
     ];
   }),
   "people" => apcu_entry("config.people", function($key){
     return [
      "bob",
      "joe",
      "niki"
     ];
   })
 ];
});

var_dump($config);
?>

   
```

The above example will output:

```text


array(2) {
  ["fruit"]=>
  array(2) {
    [0]=>
    string(6) "apples"
    [1]=>
    string(5) "pears"
  }
  ["people"]=>
  array(3) {
    [0]=>
    string(3) "bob"
    [1]=>
    string(3) "joe"
    [2]=>
    string(4) "niki"
  }
}

   
```

## See Also

 `apcu_store()` `apcu_fetch()` `apcu_delete()`
