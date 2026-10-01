---
id: "en-php-function-filteriterator-valid"
language: "php"
lang: "en"
category: "function"
name: "FilterIterator::valid"
title: "Check whether the current element is valid"
signature: "public bool FilterIterator::valid()"
module: "spl"
source_url: "https://www.php.net/manual/en/filteriterator.valid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check whether the current element is valid

## Description

```php
public bool FilterIterator::valid()
```

Checks whether the current element is valid.

> The standard implementation of this function will initially return `false` until the inner iterator is advanced to the first accepted element.

## Parameters

This function has no parameters.

## Return Values

`true` if the current element is valid, otherwise `false`
