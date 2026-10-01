---
id: "en-php-function-cachingiterator-getcache"
language: "php"
lang: "en"
category: "function"
name: "CachingIterator::getCache"
title: "Retrieve the contents of the cache"
signature: "public array CachingIterator::getCache()"
module: "spl"
source_url: "https://www.php.net/manual/en/cachingiterator.getcache.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the contents of the cache

## Description

```php
public array CachingIterator::getCache()
```

Retrieve the contents of the cache.

> The `CachingIterator::FULL_CACHE` flag must be being used.

## Parameters

This function has no parameters.

## Return Values

An `array` containing the cache items.

## Errors/Exceptions

Throws a `BadMethodCallException` when the `CachingIterator::FULL_CACHE` flag is not being used.

## Examples

**`CachingIterator::getCache()` example**

```php


<?php
$iterator = new ArrayIterator(array(1, 2, 3));
$cache    = new CachingIterator($iterator, CachingIterator::FULL_CACHE);

$cache->next();
$cache->next();
var_dump($cache->getCache());

$cache->next();
var_dump($cache->getCache());
?>

    
```

The above example will output:

```text


array(2) {
  [0]=>
  int(1)
  [1]=>
  int(2)
}
array(3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}

    
```
