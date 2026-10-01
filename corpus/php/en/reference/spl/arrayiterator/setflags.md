---
id: "en-php-function-arrayiterator-setflags"
language: "php"
lang: "en"
category: "function"
name: "ArrayIterator::setFlags"
title: "Set behaviour flags"
signature: "public void ArrayIterator::setFlags(int $flags)"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayiterator.setflags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set behaviour flags

## Description

```php
public void ArrayIterator::setFlags(int $flags)
```

Set the flags that change the behavior of the ArrayIterator.

## Parameters

- **`$flags`** — The new ArrayIterator behavior. It takes on either a bitmask, or named constants. Using named constants is strongly encouraged to ensure compatibility for future versions. — The available behavior flags are listed below. The actual meanings of these flags are described in the predefined constants. | value | constant | | --- | --- | | 1 | ArrayIterator::STD_PROP_LIST | | 2 | ArrayIterator::ARRAY_AS_PROPS |

## Return Values

No value is returned.

## See Also

`ArrayIterator::getFlags()`
