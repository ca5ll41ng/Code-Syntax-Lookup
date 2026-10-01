---
id: "en-php-function-transliterator-listids"
language: "php"
lang: "en"
category: "function"
name: "Transliterator::listIDs"
aliases: ["transliterator_list_ids"]
title: "Get transliterator IDs"
signature: "public static array|false Transliterator::listIDs()"
module: "intl"
source_url: "https://www.php.net/manual/en/transliterator.listids.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get transliterator IDs

## Description

Object-oriented style

```php
public static array|false Transliterator::listIDs()
```

Procedural style

```php
array|false transliterator_list_ids()
```

Returns an array with the registered transliterator IDs.

## Parameters

This function has no parameters.

## Return Values

An `array` of registered transliterator IDs on success, or `false` on failure.

## Examples

**Retrieving the registered transliterator IDs**

```php


<?php
print_r(Transliterator::listIDs());
?>

   
```

The above example will output something similar to:

```text


Array
(
    [0] => ASCII-Latin
    [1] => Accents-Any
    [2] => Amharic-Latin/BGN
    [3] => Any-Accents
    [4] => Any-Publishing
...
    [650] => Any-ps_Latn/BGN
    [651] => Any-tk/BGN
    [652] => Any-ch_FONIPA
    [653] => Any-cs_FONIPA
    [654] => Any-cy_FONIPA
)

   
```

## See Also

`Transliterator::getErrorMessage()` `Transliterator::transliterate()`
