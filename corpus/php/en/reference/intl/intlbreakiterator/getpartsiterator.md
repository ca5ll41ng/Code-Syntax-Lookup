---
id: "en-php-function-intlbreakiterator-getpartsiterator"
language: "php"
lang: "en"
category: "function"
name: "IntlBreakIterator::getPartsIterator"
title: "Create iterator for navigating fragments between boundaries"
signature: "public IntlPartsIterator IntlBreakIterator::getPartsIterator(int $type = IntlPartsIterator::KEY_SEQUENTIAL)"
module: "intl"
source_url: "https://www.php.net/manual/en/intlbreakiterator.getpartsiterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create iterator for navigating fragments between boundaries

## Description

```php
public IntlPartsIterator IntlBreakIterator::getPartsIterator(int $type = IntlPartsIterator::KEY_SEQUENTIAL)
```

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$type`** — Optional key type. Possible values are: `IntlPartsIterator::KEY_SEQUENTIAL` - The default. Sequentially increasing integers used as key. `IntlPartsIterator::KEY_LEFT` - Byte offset left of current part used as key. `IntlPartsIterator::KEY_RIGHT` - Byte offset right of current part used as key.

## Return Values
