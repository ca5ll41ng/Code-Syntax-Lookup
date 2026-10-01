---
id: "en-php-function-function-wincache-lock"
language: "php"
lang: "en"
category: "function"
name: "wincache_lock"
title: "Acquires an exclusive lock on a given key"
signature: "bool wincache_lock(string $key, bool $isglobal = false)"
module: "wincache"
source_url: "https://www.php.net/manual/en/function.wincache-lock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Acquires an exclusive lock on a given key

## Description

```php
bool wincache_lock(string $key, bool $isglobal = false)
```

Obtains an exclusive lock on a given key. The execution of the current script will be blocked until the lock can be obtained. Once the lock is obtained, the other scripts that try to request the lock by using the same key will be blocked, until the current script releases the lock by using `wincache_unlock()`.

> Using of the `wincache_lock()` and `wincache_unlock()` can cause deadlocks when executing PHP scripts in a multi-process environment like FastCGI. Do not use these functions unless you are absolutely sure you need to use them. For the majority of the operations on the user cache it is not necessary to use these functions.

## Parameters

- **`$key`** — Name of the key in the cache to get the lock on.
- **`$isglobal`** — Controls whether the scope of the lock is system-wide or local. Local locks are scoped to the application pool in IIS FastCGI case or to all php processes that have the same parent process identifier.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Using `wincache_lock()`**

```php


<?php
$fp = fopen("/tmp/lock.txt", "r+");
if (wincache_lock(“lock_txt_lock”)) { // do an exclusive lock
    ftruncate($fp, 0); // truncate file
    fwrite($fp, "Write something here\n");
    wincache_unlock(“lock_txt_lock”); // release the lock
} else {
    echo "Couldn't get the lock!";
}
fclose($fp);
?>

    
```

## See Also

`wincache_unlock()` `wincache_ucache_set()` `wincache_ucache_get()` `wincache_ucache_delete()` `wincache_ucache_clear()` `wincache_ucache_exists()` `wincache_ucache_meminfo()` `wincache_ucache_info()` `wincache_scache_info()`
