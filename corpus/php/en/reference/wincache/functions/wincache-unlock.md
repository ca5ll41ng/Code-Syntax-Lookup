---
id: "en-php-function-function-wincache-unlock"
language: "php"
lang: "en"
category: "function"
name: "wincache_unlock"
title: "Releases an exclusive lock on a given key"
signature: "bool wincache_unlock(string $key)"
module: "wincache"
source_url: "https://www.php.net/manual/en/function.wincache-unlock.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Releases an exclusive lock on a given key

## Description

```php
bool wincache_unlock(string $key)
```

Releases an exclusive lock that was obtained on a given key by using `wincache_lock()`. If any other process was blocked waiting for the lock on this key, that process will be able to obtain the lock.

> Using of the `wincache_lock()` and `wincache_unlock()` can cause deadlocks when executing PHP scripts in a multi-process environment like FastCGI. Do not use these functions unless you are absolutely sure you need to use them. For the majority of the operations on the user cache it is not necessary to use these functions.

## Parameters

- **`$key`** — Name of the key in the cache to release the lock on.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Using `wincache_unlock()`**

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

`wincache_lock()` `wincache_ucache_set()` `wincache_ucache_get()` `wincache_ucache_delete()` `wincache_ucache_clear()` `wincache_ucache_exists()` `wincache_ucache_meminfo()` `wincache_ucache_info()` `wincache_scache_info()`
