---
id: "en-php-function-recursiveiteratoriterator-setmaxdepth"
language: "php"
lang: "en"
category: "function"
name: "RecursiveIteratorIterator::setMaxDepth"
title: "Set max depth"
signature: "public void RecursiveIteratorIterator::setMaxDepth(int $maxDepth = -1)"
module: "spl"
source_url: "https://www.php.net/manual/en/recursiveiteratoriterator.setmaxdepth.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set max depth

## Description

```php
public void RecursiveIteratorIterator::setMaxDepth(int $maxDepth = -1)
```

Set the maximum allowed depth.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$maxDepth`** — The maximum allowed depth. `-1` is used for any depth.

## Return Values

No value is returned.

## Errors/Exceptions

Emits an `Exception` if `$maxDepth` is less than `-1`.
