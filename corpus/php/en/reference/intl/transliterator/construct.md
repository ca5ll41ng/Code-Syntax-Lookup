---
id: "en-php-function-transliterator-construct"
language: "php"
lang: "en"
category: "function"
name: "Transliterator::__construct"
title: "Private constructor to deny instantiation"
signature: "final private Transliterator::__construct()"
module: "intl"
source_url: "https://www.php.net/manual/en/transliterator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Private constructor to deny instantiation

## Description

```php
final private Transliterator::__construct()
```

This method should not be called. Its only purpose is to deny instantiation with the new operator.

Use the factory methods `Transliterator::create()` or `Transliterator::createFromRules()` instead.

## Parameters

This function has no parameters.

## See Also

`Transliterator::create()` `Transliterator::createFromRules()`
