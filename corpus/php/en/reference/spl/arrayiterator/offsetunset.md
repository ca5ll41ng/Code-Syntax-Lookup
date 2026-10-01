---
id: "en-php-function-arrayiterator-offsetunset"
language: "php"
lang: "en"
category: "function"
name: "ArrayIterator::offsetUnset"
title: "Unset value for an offset"
signature: "public void ArrayIterator::offsetUnset(mixed $key)"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayiterator.offsetunset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unset value for an offset

## Description

```php
public void ArrayIterator::offsetUnset(mixed $key)
```

Unsets a value for an offset.

If iteration is in progress, and `ArrayIterator::offsetUnset()` is used to unset the current index of iteration, the iteration position will be advanced to the next index. Since the iteration position is also advanced at the end of a  loop body, use of `ArrayIterator::offsetUnset()` inside a `foreach` loop may result in indices being skipped.

## Parameters

- **`$key`** — The offset to unset.

## Return Values

No value is returned.

## See Also

`ArrayIterator::offsetGet()` `ArrayIterator::offsetSet()`
