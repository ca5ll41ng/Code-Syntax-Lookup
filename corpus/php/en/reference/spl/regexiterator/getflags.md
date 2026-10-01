---
id: "en-php-function-regexiterator-getflags"
language: "php"
lang: "en"
category: "function"
name: "RegexIterator::getFlags"
title: "Get flags"
signature: "public int RegexIterator::getFlags()"
module: "spl"
source_url: "https://www.php.net/manual/en/regexiterator.getflags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get flags

## Description

```php
public int RegexIterator::getFlags()
```

Returns the flags, see `RegexIterator::setFlags()` for a list of available flags.

## Parameters

This function has no parameters.

## Return Values

Returns the set flags.

## Examples

**`RegexIterator::getFlags()` example**

```php


<?php

$test = array ('str1' => 'test 1', 'teststr2' => 'another test', 'str3' => 'test 123');

$arrayIterator = new ArrayIterator($test);
$regexIterator = new RegexIterator($arrayIterator, '/^test/');
$regexIterator->setFlags(RegexIterator::USE_KEY);

if ($regexIterator->getFlags() & RegexIterator::USE_KEY) {
    echo 'Filtering based on the array keys.';
} else {
    echo 'Filtering based on the array values.';
}
?>

    
```

The above example will output:

```text


Filtering based on the array keys.

    
```

## See Also

`RegexIterator::setFlags()`
