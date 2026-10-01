---
id: "en-php-function-callbackfilteriterator-accept"
language: "php"
lang: "en"
category: "function"
name: "CallbackFilterIterator::accept"
title: "Calls the callback with the current value, the current key and the inner iterator as arguments"
signature: "public bool CallbackFilterIterator::accept()"
module: "spl"
source_url: "https://www.php.net/manual/en/callbackfilteriterator.accept.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calls the callback with the current value, the current key and the inner iterator as arguments

## Description

```php
public bool CallbackFilterIterator::accept()
```

This method calls the callback with the current value, current key and the inner iterator.

The callback is expected to return `true` if the current item is to be accepted, or `false` otherwise.

## Parameters

This function has no parameters.

## Return Values

Returns `true` to accept the current item, or `false` otherwise.

## See Also

CallbackFilterIterator Examples `CallbackFilterIterator::__construct()`
